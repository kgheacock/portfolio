import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Keith Heacock — Full Stack Engineer',
  description:
    'Senior full-stack engineer with 8+ years experience building scalable web applications and distributed systems. TypeScript, Go, React, Node.js. Based in Austin, TX.',
  keywords: ['software engineer', 'full stack', 'TypeScript', 'React', 'Go', 'Node.js', 'Austin'],
  authors: [{ name: 'Keith Heacock' }],
  openGraph: {
    title: 'Keith Heacock — Full Stack Engineer',
    description: 'Senior full-stack engineer specializing in TypeScript, distributed systems, and developer tooling.',
    type: 'website',
    url: 'https://heacock.dev',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-terminal-bg font-mono antialiased">
        {children}
      </body>
    </html>
  )
}
