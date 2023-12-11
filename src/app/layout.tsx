import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Providers } from './Providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | TEDxTrenčín',
    default: 'TEDxTrenčín',
  },
  description: 'TEDxTrenčín poskytuje platformu pre zaujimavých a inšpiratívnych ľudí, ktorých myšlienky, nápady a činy sú hodné zdieľania.',
  metadataBase: new URL('https://www.tedxtrencin.sk/images/facebook.jpg'),
  twitter: {
    card: "summary_large_image",
    title: "TEDxTrenčín",
    description: "TEDxTrenčín poskytuje platformu pre zaujimavých a inšpiratívnych ľudí, ktorých myšlienky, nápady a činy sú hodné zdieľania.",
    images: [
      {
        url: "https://www.tedxtrencin.sk/images/facebook.jpg",
        type: "image/jpg",
        width: 1200,
        height: 630,
        alt: "tedx",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <Providers>
      <header>
        <Navbar/>
      </header>
      {children}
    </Providers>
    <Footer/>
    </body>
    </html>
  );
}
