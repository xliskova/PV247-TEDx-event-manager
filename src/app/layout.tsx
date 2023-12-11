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
  description: 'TEDx Trenčín event manager app',
  metadataBase: new URL(process.env.DEPLOY_URL ?? 'http://localhost:3000'),
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
            <Navbar />
          </header>
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
