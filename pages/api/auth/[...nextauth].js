import config from "@/postcss.config.mjs";
import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

console.log("NEXTAUTH_URL:", process.env.NEXT_PUBLIC_NEXTAUTH_URL);

export const authOptions = {
  

  providers: [
    SpotifyProvider({
      clientId: 'cd9391d75814407f9ba7ce42b1272338',
      clientSecret: '3cef58d1c07044598cf314a6663425ab',
      authorization:
        "https://accounts.spotify.com/authorize?scope=user-read-email,playlist-read-private,user-library-read,user-top-read",
    }),
  ],
  secret:'VshhRh2MDLxun6HclrbES6OeEd3vpIW0dvbKOAJ+pkQ=',
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
       
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
};

export default NextAuth(authOptions);
