import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import ConditionalLayout from "./components/conditionallayout";
import { NextAuthProvider } from "./providers";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital Signage Center",
  description: "A marketplace where you get everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}