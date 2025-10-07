export function PersonStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Your Name',
    url: 'https://yourwebsite.com',
    jobTitle: 'Full-Stack Developer',
    description: 'Full-stack developer specializing in React, Next.js, TypeScript, and modern web technologies.',
    sameAs: [
      'https://github.com/yourusername',
      'https://linkedin.com/in/yourusername',
      'https://twitter.com/yourusername',
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Python',
      'PostgreSQL',
      'Web Development',
      'UI/UX Design',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function WebsiteStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Portfolio | Full-Stack Developer',
    url: 'https://yourwebsite.com',
    description: 'Full-stack developer specializing in React, Next.js, TypeScript, and modern web technologies.',
    author: {
      '@type': 'Person',
      name: 'Your Name',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
