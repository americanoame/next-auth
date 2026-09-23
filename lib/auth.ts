// /lib/auth.ts
import CredentialsProvider from "next-auth/providers/credentials";
import type { User } from "next-auth";
import type { JWT } from "next-auth/jwt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize() {
        const user: User = { id: "1", name: "Test User", email: "test@example.com" };
        return user || null;
      },
    }),
  ],
  session: {
    strategy: "jwt" as const, // keeps TS happy
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: User }) {
      if (user) token.id = user.id;
      return token;
    },
    async session({ session, token }: { session: any; token: JWT }) {
      if (token?.id) session.user.id = token.id as string;
      return session;
    },
  },
};
