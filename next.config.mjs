/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  reactStrictMode: true,
  env: {
    JWT_SECRET: process.env.JWT_SECRET,
  },
  // Add the pages configuration for NextAuth
  pages: {
    signIn: "/signin",
    signUp: "/signup",
    error: "/error",
    verifyRequest: "/verify-request",
    newUser: "/new-user",
  },
  images: {
    domains: ['mir-s3-cdn-cf.behance.net', 'cdn.dribbble.com'],
  },
};

export default nextConfig;
