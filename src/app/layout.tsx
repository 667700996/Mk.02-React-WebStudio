import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
import './globals.scss';
import { Suspense } from 'react';
import AppNavbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { siteConfig } from '@/lib/siteConfig';
import Analytics from '@/components/Analytics';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import SmoothScrolling from '@/components/ui/SmoothScrolling';
import FloatingDock from '@/components/ui/FloatingDock';
import CommandMenu from '@/components/CommandMenu';

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
    default: siteConfig.name,
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
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
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
    <html lang="en" className="h-100" suppressHydrationWarning>
      <body className={`${sans.variable} ${display.variable} d-flex flex-column min-vh-100`}>
        <ThemeProvider attribute="data-bs-theme" defaultTheme="system" enableSystem>
          <SmoothScrolling>
            <ScrollProgressBar />
            <AppNavbar />
            <div style={{ flex: '1 0 auto' }}>{children}</div>
            <Footer />
            <FloatingDock />
            <CommandMenu />
            <Suspense fallback={null}>
              <Analytics />
            </Suspense>
          </SmoothScrolling>
        </ThemeProvider>
      </body>
    </html>
  );
}
