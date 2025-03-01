import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Arcu de Chelu - B&B Modolo Sardegna',
  description: 'Scopri il B&B Arcu de Chelu, un\'oasi di relax e comfort per le tue vacanze in Sardegna.',
  icons: {
    icon: '/images/B2_reduction_edited.png',
    apple: '/images/B2_reduction_edited.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/images/B2_reduction_edited.png" />
        <link rel="apple-touch-icon" href="/images/B2_reduction_edited.png" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
} 