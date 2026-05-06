import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StickyCallBar from '@/components/conversion/StickyCallBar'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
})

const BASE_URL = 'https://rtiautolocksmith.com'

// ─── Viewport — must be separate export in Next.js 14 ────────────────────────
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FBBF24',
  colorScheme: 'light',
}

// ─── Root metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'RTI Auto Locksmith Wigan | 24/7 Mobile Car Keys',
    template: '%s',
  },
  description:
    'Locked out or lost your car keys? RTI Auto Locksmith covers Wigan 24/7. Fast response, all car makes. Call now for immediate help.',
  // No canonical here — each page sets its own via buildMetadata()
  openGraph: {
    siteName: 'RTI Auto Locksmith',
    locale: 'en_GB',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Verification placeholders — replace with real tokens from GSC / Bing WMT
  verification: {
    google: 'REPLACE_WITH_GOOGLE_SITE_VERIFICATION_TOKEN',
    // other: { 'msvalidate.01': 'REPLACE_WITH_BING_TOKEN' },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.webmanifest',
  other: {
    // Prevent automatic phone number detection on iOS (we control our own links)
    'format-detection': 'telephone=no',
  },
}

// ─── Global schema injected on every page ────────────────────────────────────

/** LocalBusiness + Locksmith entity — Google's primary signal for Local Pack */
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'Locksmith'],
  '@id': `${BASE_URL}/#business`,
  name: 'RTI Auto Locksmith',
  description:
    'Mobile auto locksmith serving Wigan and surrounding areas 24/7. Car lockouts, key replacement, and key programming for all UK car makes.',
  url: BASE_URL,
  telephone: '+447309903243',
  priceRange: '££',
  currenciesAccepted: 'GBP',
  paymentAccepted: 'Cash, Credit Card, Debit Card',
  openingHours: 'Mo-Su 00:00-23:59',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday', 'Tuesday', 'Wednesday', 'Thursday',
      'Friday', 'Saturday', 'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4A Loch Street',
    addressLocality: 'Wigan',
    addressRegion: 'Greater Manchester',
    postalCode: 'WN5 0AN',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 53.5448,
    longitude: -2.6318,
  },
  areaServed: [
    { '@type': 'City', name: 'Wigan' },
    { '@type': 'City', name: 'Chorley' },
    { '@type': 'City', name: 'Leyland' },
    { '@type': 'City', name: 'St Helens' },
    { '@type': 'City', name: 'Skelmersdale' },
  ],
  // Aligns with primary GBP category
  knowsAbout: [
    'Car Lockout Entry',
    'Car Key Replacement',
    'Car Key Programming',
    'Transponder Key Programming',
    'Lost Car Keys',
    'Emergency Auto Locksmith',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Auto Locksmith Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Car Lockout Service', serviceType: 'Auto Locksmith' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Car Key Replacement', serviceType: 'Auto Locksmith' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Car Key Programming', serviceType: 'Auto Locksmith' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lost Car Keys', serviceType: 'Auto Locksmith' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Emergency Auto Locksmith', serviceType: 'Auto Locksmith' } },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '87',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'James T.' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        'Locked out of my Ford Focus at 11pm near Wigan town centre. RTI was there in under 40 minutes. Got me in without any damage. Brilliant service.',
      datePublished: '2025-03-15',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Sarah M.' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        "Lost both sets of keys to my Vauxhall Astra. RTI came out the same day, cut and programmed a new key on my driveway. Wouldn't hesitate to recommend.",
      datePublished: '2025-04-02',
    },
  ],
}

/** WebSite schema — enables Sitelinks searchbox and entity disambiguation */
const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  name: 'RTI Auto Locksmith',
  url: BASE_URL,
  description: 'Mobile auto locksmith serving Wigan and surrounding areas 24/7.',
  publisher: {
    '@id': `${BASE_URL}/#business`,
  },
  inLanguage: 'en-GB',
}

/** SiteNavigationElement — maps primary nav for Google's understanding of site structure */
const siteNavigationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SiteNavigationElement',
  name: [
    'Car Lockout Service',
    'Car Key Replacement',
    'Lost Car Keys',
    'Car Key Programming',
    'Emergency Locksmith',
    'Wigan',
    'Chorley',
    'Leyland',
    'St Helens',
    'Skelmersdale',
  ],
  url: [
    `${BASE_URL}/car-lockout-service`,
    `${BASE_URL}/car-key-replacement`,
    `${BASE_URL}/lost-car-keys`,
    `${BASE_URL}/car-key-programming`,
    `${BASE_URL}/emergency-auto-locksmith`,
    `${BASE_URL}/auto-locksmith-wigan`,
    `${BASE_URL}/auto-locksmith-chorley`,
    `${BASE_URL}/auto-locksmith-leyland`,
    `${BASE_URL}/auto-locksmith-st-helens`,
    `${BASE_URL}/auto-locksmith-skelmersdale`,
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
        {/* Preconnect to Google Fonts origin — already loaded above but belt-and-braces */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Global JSON-LD schema — three graphs per page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([localBusinessSchema, webSiteSchema, siteNavigationSchema]),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  )
}
