import SpotifyWebApi from "spotify-web-api-node";

console.log(process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID)

const spotifyApi = new SpotifyWebApi({
  clientId:'cd9391d75814407f9ba7ce42b1272338',
  clientSecret: '3cef58d1c07044598cf314a6663425ab',
});

export default async function handler(req, res) {
  const { token } = req.query;
  
  if (!token) {
    return res.status(401).json({ error: "No access token" });
  }

  spotifyApi.setAccessToken(token);

  try {
    const [topTracks, topArtists] = await Promise.all([
      spotifyApi.getMyTopTracks({ limit: 10 }),
      spotifyApi.getMyTopArtists({ limit: 10 }),
    ]);

    const genres = topArtists.body.items.map(artist => artist.genres).flat();
    // console.log(genres)

    res.status(200).json({
      topTracks: topTracks.body.items,
      topArtists: topArtists.body.items,
      genres,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
