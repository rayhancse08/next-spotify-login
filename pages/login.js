// import { signIn } from "next-auth/react";
// // console.log("NEXTAUTH_URL:", process.env.NEXT_PUBLIC_NEXTAUTH_URL);

// export default function Login() {
//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#000', color: '#fff' }}>
//       <h1>Your Internet Bedroom</h1>
//       <p>Find out what your internet bedroom looks like based on your music taste.</p>
//       <button onClick={() => signIn("spotify")} style={{ margin: '10px', padding: '10px 20px', background: '#1DB954', color: '#fff', border: 'none', borderRadius: '20px', cursor: 'pointer' }}>
//         Connect Spotify
//       </button>
//     </div>
//   );
// }



import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Login() {
  // const { data: session, status } = useSession();
  // const router = useRouter();

  // // Redirect to the bedroom page if the user is authenticated
  // useEffect(() => {
  //   if (status === "authenticated") {
  //     router.push("/bedroom");
  //   }
  // }, [status, router]);

  // if (status === "loading") {
  //   // Optionally display a loading spinner or message while the session is loading
  //   return <div>Loading...</div>;
  // }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#000",
        color: "#fff",
      }}
    >
      <h1>Your Internet Bedroom</h1>
      <p>Find out what your internet bedroom looks like based on your music taste.</p>
      <button
        onClick={() => signIn("spotify")}
        style={{
          margin: "10px",
          padding: "10px 20px",
          background: "#1DB954",
          color: "#fff",
          border: "none",
          borderRadius: "20px",
          cursor: "pointer",
        }}
      >
        Connect Spotify
      </button>
    </div>
  );
}
