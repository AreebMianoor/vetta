import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Vetta - The Network for Builders Who Lead',
  description: 'Skip the résumés. Show your thinking in 2 minutes. Get matched to problems worth solving.',
  openGraph: {
    title: 'Vetta - The Network for Builders Who Lead',
    description: 'Skip the résumés. Show your thinking in 2 minutes. Get matched to problems worth solving.',
    url: 'https://vetta.ai',
    siteName: 'Vetta',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: 'Vetta - The Network for Builders Who Lead',
    description: 'Skip the résumés. Show your thinking in 2 minutes. Get matched to problems worth solving.',
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}