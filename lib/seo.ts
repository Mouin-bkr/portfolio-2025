import { Metadata } from 'next'

export const baseMetadata = {
  metadataBase: new URL('https://yourwebsite.com'),
  title: {
    default: 'Portfolio | Full-Stack Developer',
    template: '%s | Portfolio'
  },
  description: 'Full-stack developer specializing in React, Next.js, TypeScript, and modern web technologies.',
  keywords: ['developer', 'full-stack', 'react', 'nextjs', 'typescript', 'portfolio', 'web development'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourwebsite.com',
    siteName: 'Portfolio',
    title: 'Portfolio | Full-Stack Developer',
    description: 'Full-stack developer specializing in React, Next.js, TypeScript, and modern web technologies.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Full-Stack Developer',
    description: 'Full-stack developer specializing in React, Next.js, TypeScript, and modern web technologies.',
    creator: '@yourusername',
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
}

export function generatePageMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://yourwebsite.com${path}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}
