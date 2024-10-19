import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function TopTracks() {
  const { data: session } = useSession();
  const [topTracks, setTopTracks] = useState([]);
  const [topArtists, setTopArtists] = useState([]);

  useEffect(() => {
    if (session) {
      // Fetch top tracks
      axios.get('https://api.spotify.com/v1/me/top/tracks', {
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      })
      .then((response) => {
        console.log(response)
        setTopTracks(response.data.items);
      });

      // Fetch top artists
      axios.get('https://api.spotify.com/v1/me/top/artists', {
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      })
      .then((response) => {
        console.log(response)
        setTopArtists(response.data.items);
      });
    }
  }, [session]);

  if (!session) {
    return <p>Please log in to view your top tracks.</p>;
  }

  return (
    <div>
      <h1>Your Top Tracks</h1>
      <ul>
        {topTracks.map(track => (
          <li key={track.id}>{track.name} by {track.artists[0].name}</li>
        ))}
      </ul>
      <h1>Your Top Artists</h1>
      <ul>
        {topArtists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </div>
  );
}



// import { useSession } from 'next-auth/react';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function CustomBedroom() {
//   const { data: session } = useSession();
//   const [topTracks, setTopTracks] = useState([]);
//   const [topArtists, setTopArtists] = useState([]);
//   const [suggestions, setSuggestions] = useState("");

//   useEffect(() => {
//     if (session) {
//       // Fetch top tracks and artists
//       axios.get('/api/spotifyData', {
//         headers: {
//           Authorization: `Bearer ${session.accessToken}`,
//         },
//       }).then(({ data }) => {
//         setTopTracks(data.tracks);
//         setTopArtists(data.artists);

//         // Send data to ChatGPT
//         axios.post('/api/chatgpt', {
//           topArtists: "Tahsan",
//           topGenres: '1',
//         })
//         .then((response) => {
//           setSuggestions(response.data.suggestions);
//         });
//       });
//     }
//   }, [session]);

//   return (
//     <div>
//       <h1>Internet Bedroom for {session?.user?.name}</h1>

//       <h2>Your Top Artists</h2>
//       <ul>
//         {topArtists.map(artist => <li key={artist.id}>{artist.name}</li>)}
//       </ul>

//       <h2>ChatGPT's Customization Suggestions</h2>
//       <p>{suggestions}</p>
//     </div>
//   );
// }
