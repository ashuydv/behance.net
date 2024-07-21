import { handlers } from "@/auth";

export const { GET, POST } = handlers;


// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// // import dbConnect from "@/lib/dbConnect";
// import prisma from "@/lib/db";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import GoogleProvider from "next-auth/providers/google";
// // import User from "@/models/User";
// import { compare } from "bcrypt";
// import { NextResponse } from "next/server";

// const handler = NextAuth({
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//     }),
//     CredentialsProvider({
//       name: "credentials",
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//         username: { label: "Username", type: "text" },
//       },
//       async authorize(credentials) {
//         const { email, password } = credentials as {
//           email: string;
//           password: string;
//         };
//         if (!email || !password) {
//           throw new Error("Please provide email and password");
//         }

//         const user = await prisma.user.findUnique({
//           where: {
//             email,
//           },
//         });

//         if (!user || !user?.hashedPassword) {
//           throw new Error("User not found");
//         }

//         const passwordMatch = await compare(password, user.hashedPassword);

//         if (!passwordMatch) {
//           throw new Error("Invalid password");
//         }

//         return user;
//       },
//     }),
//   ],
//   secret: process.env.AUTH_SECRET as string,
//   session: {
//     maxAge: 24 * 60 * 60,
//     strategy: "jwt",
//   },
//   pages: {
//     signIn: "/signin",
//   },
//   callbacks: {
//     async jwt({ token, user, session, trigger }: any) {
//       if (trigger === "update" && session?.name) {
//         token.name = session.name;
//       }

//       if (user) {
//         return { ...token, id: user.id };
//       }

//       const newUser = await prisma.user.update({
//         where: {
//           id: token.id,
//         },
//         data: {
//           name: token.name,
//         },
//       });

//       return token;
//     },
//     async session({ session, token, user }: any) {
//       return {
//         ...session,
//         user: { ...session.user, id: token.id, name: token.name },
//       };
//     },
//   },
//   debug: process.env.NODE_ENV === "development",
// });
// export { handler as GET, handler as POST };









// const handler = NextAuth(authOptions);

/*
if (!process.env.NEXTAUTH_SECRET) {
  throw new Error("NEXTAUTH_SECRET is not set");
}

export const authConfig: NextAuthConfig = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        if (!email || !password) {
          return null;
        }

        await dbConnect();

        const user = await User.findOne({ email });
        if (!user) {
          return null;
        }

        const isPasswordValid = await compare(password, user.password);
        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);

export const { GET, POST } = handlers;
*/
