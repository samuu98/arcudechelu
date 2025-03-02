import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/locales'
import Script from 'next/script'

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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Arcu de Chelu - Bed & Breakfast a Modolo, Sardegna" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
        
        {/* Script di analytics caricato solo dopo che tutte le risorse prioritarie sono state caricate */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PLACEHOLDER"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
} 