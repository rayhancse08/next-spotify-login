import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css"; // Custom CSS for styling
import { useSession, signIn } from "next-auth/react";
import Moodboard from '../components/Moodboard';
import Lighting from '../components/Lighting';
import Furniture from '../components/Furniture';
import WallArt from '../components/WallArt';
import InternetBedroom from '../components/InternetBedroom';

export default function Home() {
  const { data: session, status } = useSession();
  const [spotifyData, setSpotifyData] = useState(null);
  const [bedroom, setBedroom] = useState(null);

  // Fetch Spotify data
  useEffect(() => {
    if (session?.accessToken && !spotifyData) {
      fetch(`/api/spotify?token=${session.accessToken}`)
        .then((res) => {
          if (!res.ok) throw new Error("Session expired");
          return res.json();
        })
        .then((data) => setSpotifyData(data))
        .catch(() => signIn("spotify"));
    }
  }, [session, spotifyData]);

  // Fetch personalized bedroom suggestions
  useEffect(() => {
    if (spotifyData && !bedroom) {
      fetch("/api/chatgpt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topTracks: spotifyData.topTracks,
          topArtists: spotifyData.topArtists,
          genres: spotifyData.genres,
        }),
      })
        .then((res) => res.json())
        .then((data) => setBedroom(data.suggestions))
        .catch((error) => console.error("Error fetching bedroom data", error));
    }
  }, [spotifyData, bedroom]);

  // Session loading state
  if (status === "loading") return <p>Loading...</p>;

  // Unauthenticated user
  if (status === "unauthenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.heroSection}>
          <div className={styles.textSection}>
            <h1 className={styles.title}>YOUR INTERNET BEDROOM</h1>
            <p className={styles.description}>
              Find out what your internet bedroom looks like based on your music taste.
            </p>
            <div className={styles.buttons}>
              <button className={styles.spotifyBtn} onClick={() => signIn("spotify")}>
                Connect Spotify
              </button>
              <button className={styles.appleMusicBtn}>Connect Apple Music</button>
            </div>
            <div className={styles.soundIcon}>🔊 Sound On</div>
          </div>
          <div className={styles.imageSection}>
            <Image
              src="/images/home.png"
              alt="Verse powered design"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.welcomeText}>
        Welcome to your Internet Bedroom, {session.user.name}!
      </h1>

      {/* Spotify Data Section */}
      {spotifyData && (
        <div className={styles.spotifySection}>
          <h2>Your Spotify Music Data</h2>
          <div className={styles.spotifyGrid}>
            <div className={styles.spotifyItem}>
              <h3>Top Tracks</h3>
              <ul>
                {spotifyData.topTracks.map((track, index) => (
                  <li key={index}>{track.name} - {track.artists.map(artist => artist.name).join(", ")}</li>
                ))}
              </ul>
            </div>

            <div className={styles.spotifyItem}>
              <h3>Top Artists</h3>
              <ul>
                {spotifyData.topArtists.map((artist, index) => (
                  <li key={index}>{artist.name}</li>
                ))}
              </ul>
            </div>

            <div className={styles.spotifyItem}>
              <h3>Genres</h3>
              <ul>
                {spotifyData.genres.map((genre, index) => (
                  <li key={index}>{genre}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ChatGPT Personalized Bedroom Section */}
      {bedroom ? (
        <div className={styles.bedroomSection}>
          <h2 className={styles.bedroomTitle}>
            Your Personalized Internet Bedroom Idea from gemini 🎶
          </h2>
          <div className={styles.bedroomDescription}>
              <p>{bedroom}</p>
              {/* <button className={styles.exploreMoreBtn}>
                Explore More Ideas
              </button> */}
            </div>
          <div className={styles.bedroomContent}>
            <div className={styles.bedroomImage}>
              <Image
                src="/images/bedroom.webp"  // Replace with an image file for a personalized bedroom
                alt="Personalized Bedroom"
                width={800}
                height={800}
                className={styles.bedroomPhoto}
              />
            </div>
            
          </div>
        </div>
      ) : (
        <p>Loading your personalized bedroom...</p>
      )}

      <InternetBedroom />
    </div>
  );
}
