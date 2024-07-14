import { authConfig } from "@/auth.config"
import NextAuth from "next-auth"
// import authConfig from "./app/api/auth/[...nextauth]/route"

export const { auth } = NextAuth(authConfig)