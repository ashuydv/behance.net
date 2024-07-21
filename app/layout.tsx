import { ReactNode } from "react";
import Provider from "../context/Provider";
import "./globals.css";
import { Montserrat } from "next/font/google";
import getServerSession from "next-auth";
import { auth } from "@/auth";

const montserrat = Montserrat({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();
  // console.log("Session", session);
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Provider session={session}>{children}</Provider>
      </body>
    </html>
  );
}
