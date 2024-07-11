import { Metadata } from 'next';
import { headers } from 'next/headers';
import Gallery from "./components/galleries";
import Index from './homeIndex';
import { Header } from './components/header';
import Footer from './components/footer';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to our Digital Signage Center',
};

export default async function Home() {
  const headersList = headers();
  const pathname = headersList.get('x-invoke-path') || '';
  const showHeaderFooter = !["/signup", "/signin"].includes(pathname);

  return (
    <>
      {showHeaderFooter && <Header />}
      <main>
        <Index />
        <Gallery />
      </main>
      {showHeaderFooter && <Footer />}
    </>
  );
}