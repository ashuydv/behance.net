// import { authConfig } from "@/auth.config"
// import NextAuth from "next-auth"
// // import authConfig from "./app/api/auth/[...nextauth]/route"

// export const { auth } = NextAuth(authConfig)

import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./lib/db";
import { compare } from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        if (!email || !password) {
          throw new Error("Please provide email and password");
        }

        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });

        if (!user || !user?.hashedPassword) {
          throw new Error("User not found");
        }

        const passwordMatch = await compare(
          password,
          user.hashedPassword
        );

        if (!passwordMatch) {
          throw new Error("Invalid password");
        }

        return user;
      },
    }),
  ],
});
