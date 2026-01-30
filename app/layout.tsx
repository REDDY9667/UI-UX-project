import type { Metadata } from 'next'
import './globals.css'
import DevTweakPanel from '../components/DevTweakPanel'

export const metadata: Metadata = {
  title: 'NEXUS 2026 - Where Innovation Meets Reality',
  description: 'Premium Tech Fest with cutting-edge hackathons, workshops, and networking opportunities. Join 1000+ innovators March 15-17, 2026.',
  keywords: 'tech fest, hackathon, AI, blockchain, web3, innovation, technology event',
  authors: [{ name: 'NEXUS Team' }],
  openGraph: {
    title: 'NEXUS 2026 - Tech Fest',
    description: 'Where Innovation Meets Reality',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
        {/* Dev tweak panel (renders only in development) */}
        <DevTweakPanel />
      </body>
    </html>
  )
}