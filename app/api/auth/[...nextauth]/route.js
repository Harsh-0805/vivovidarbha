import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }) {
      // Add additional fields from the token to the session
      session.user.id = token.sub;
      session.user.accessToken = token.accessToken;
      session.user.picture = token.picture;
      session.user.locale = token.locale;

      // Send user data to your Express backend
      try {
        const res = await fetch("https://vivo-backend.vercel.app/createUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: session.user.email,
            name: session.user.name,
            // phoneNumber: session.user.id,
            // address: {
            //   addressLine1: "gigu", // Replace with actual data if available
            //   pincode: "hjghg",     // Replace with actual data if available
            //   city: "ggfhjf"        // Replace with actual data if available
            // }
          }),
        });

        if (!res.ok) {
          throw new Error(`Failed to save user: ${res.status}`);
        }
      } catch (error) {
        console.error("Error in session callback:", error);
      }

      return session;
    },
    async jwt({ token, account, profile }) {
      // Add additional profile information to the token
      if (account?.provider === "google") {
        token.accessToken = account.access_token;
        token.picture = profile.picture;
        token.locale = profile.locale;
      }
      return token;
    },
  },
});

export { handler as GET, handler as POST };
