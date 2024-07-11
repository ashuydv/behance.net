// app/components/ConditionalLayout.tsx
'use client';

import { usePathname } from "next/navigation";
import { Header } from "./header";
import Footer from "./footer";

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showHeaderFooter = !["/signup", "/login"].includes(pathname);

  return (
    <>
      {showHeaderFooter && <Header />}
      <div className="flex min-h-screen w-full flex-col">{children}</div>
      {showHeaderFooter && <Footer />}
    </>
  );
}