import type { Metadata } from 'next';
import { Playfair_Display, Libre_Franklin } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const libreFranklin = Libre_Franklin({
  subsets: ['latin'],
  variable: '--font-libre-franklin',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: {
    default: 'Atletico Laeken | Club de Football en Salle - Bruxelles',
    template: '%s | Atletico Laeken',
  },
  description:
    'Atletico Laeken est un club de football en salle (futsal) basé à Laeken, Bruxelles. Fondé en 2018, affilié à la LFFS. 3 équipes, 60+ joueurs, 15+ nationalités. Rejoignez notre communauté !',
  keywords: [
    'futsal',
    'football en salle',
    'Atletico Laeken',
    'Laeken',
    'Bruxelles',
    'LFFS',
    'football',
    'Belgique',
    'club de foot',
    'Provinciale Bruxelles',
  ],
  authors: [{ name: 'Atletico Laeken' }],
  creator: 'Atletico Laeken',
  metadataBase: new URL('https://atleticolaeken.be'),
  openGraph: {
    title: 'Atletico Laeken | Club de Football en Salle - Bruxelles',
    description:
      'Club de futsal fondé en 2018 à Laeken, Bruxelles. 3 équipes en compétition, plus de 60 joueurs de 15+ nationalités.',
    url: 'https://atleticolaeken.be',
    siteName: 'Atletico Laeken',
    locale: 'fr_BE',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Atletico Laeken - Club de Football en Salle',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atletico Laeken | Club de Football en Salle',
    description: 'Club de futsal fondé en 2018 à Laeken, Bruxelles.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${libreFranklin.variable}`}>
      <body className="font-body bg-off-white text-noir antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] btn-primary"
        >
          Aller au contenu principal
        </a>
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
