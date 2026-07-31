import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.scss';
import { Suspense } from 'react';
import AppNavbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { siteConfig } from '@/lib/siteConfig';
import Analytics from '@/components/Analytics';
import ScrollProgressBar from '@/components/ScrollProgressBar';

const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Commonline — Design Engineering Practice',
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: new URL('/og-commonline-2026.png', siteConfig.url).toString(),
        width: 1731,
        height: 909,
        alt: 'Commonline — Make complexity feel inevitable.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [new URL('/og-commonline-2026.png', siteConfig.url).toString()],
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-100" data-bs-theme="dark">
      <body className={`${sans.variable} ${display.variable} d-flex flex-column min-vh-100`}>
        <ScrollProgressBar />
        <AppNavbar />
        <div style={{ flex: '1 0 auto' }}>{children}</div>
        <Footer />
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
