import './globals.css';
import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cypherframes.com'),
  title: 'CypherFrames — Capturing Stories. Creating Timeless Frames.',
  description:
    'Premium photography that transforms moments into timeless visual stories. Wedding, portrait, commercial, events, travel and lifestyle photography by CypherFrames.',
  keywords: [
    'photography',
    'luxury photography',
    'wedding photography',
    'portrait photography',
    'commercial photography',
    'cinematic photography',
    'CypherFrames',
  ],
  authors: [{ name: 'CypherFrames' }],
  openGraph: {
    title: 'CypherFrames — Capturing Stories. Creating Timeless Frames.',
    description:
      'Premium photography that transforms moments into timeless visual stories.',
    type: 'website',
    siteName: 'CypherFrames',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CypherFrames — Timeless Photography',
    description:
      'Premium photography that transforms moments into timeless visual stories.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
