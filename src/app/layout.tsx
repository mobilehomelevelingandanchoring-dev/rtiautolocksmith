import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StickyCallBar from '@/components/conversion/StickyCallBar'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://rtiautolocksmith.com'),
  title: {
    default: 'RTI Auto Locksmith Wigan | 24/7 Mobile Car Keys',
    template: '%s | RTI Auto Locksmith',
  },
  description:
    'Locked out or lost your car keys? RTI Auto Locksmith covers Wigan 24/7. Fast response, all car makes. Call now for immediate help.',
  alternates: {
    canonical: 'https://rtiautolocksmith.com',
  },
  openGraph: {
    siteName: 'RTI Auto Locksmith',
    locale: 'en_GB',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

const globalSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'Locksmith'],
  '@id': 'https://rtiautolocksmith.com/#business',
  name: 'RTI Auto Locksmith',
  description:
    'Mobile auto locksmith serving Wigan and surrounding areas 24/7. Car lockouts, key replacement, and key programming for all UK car makes.',
  url: 'https://rtiautolocksmith.com',
  telephone: '+44XXXXXXXXXX',
  priceRange: '££',
  openingHours: 'Mo-Su 00:00-23:59',
  areaServed: [
    { '@type': 'City', name: 'Wigan' },
    { '@type': 'City', name: 'Chorley' },
    { '@type': 'City', name: 'Leyland' },
    { '@type': 'City', name: 'St Helens' },
    { '@type': 'City', name: 'Skelmersdale' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Auto Locksmith Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Car Lockout Service' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Car Key Replacement' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Car Key Programming' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Lost Car Keys' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Emergency Auto Locksmith' },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '87',
    bestRating: '5',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'James T.' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody:
        'Locked out of my Ford Focus at 11pm near Wigan town centre. RTI was there in under 40 minutes. Got me in without any damage. Brilliant service.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Sarah M.' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody:
        'Lost both sets of keys to my Vauxhall Astra. RTI came out the same day, cut and programmed a new key on my driveway. Wouldn\'t hesitate to recommend.',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  )
}
