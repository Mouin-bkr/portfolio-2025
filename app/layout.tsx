import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ScrollProgress } from '@/components/scroll-progress';
import { Toaster } from '@/components/ui/sonner';
import { PersonStructuredData, WebsiteStructuredData } from '@/components/structured-data';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://yourwebsite.com'),
  title: 'Portfolio | Full-Stack Developer',
  description: 'Full-stack developer specializing in React, Next.js, TypeScript, and modern web technologies. View my projects, experience, and get in touch.',
  keywords: ['developer', 'full-stack', 'react', 'nextjs', 'typescript', 'portfolio'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourwebsite.com',
    title: 'Portfolio | Full-Stack Developer',
    description: 'Full-stack developer specializing in React, Next.js, TypeScript, and modern web technologies.',
    siteName: 'Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Full-Stack Developer',
    description: 'Full-stack developer specializing in React, Next.js, TypeScript, and modern web technologies.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <PersonStructuredData />
        <WebsiteStructuredData />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <Navbar />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
