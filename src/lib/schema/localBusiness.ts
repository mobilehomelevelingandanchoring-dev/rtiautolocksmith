export const BASE_URL      = 'https://rtiautolocksmith.com'
export const BUSINESS_ID   = `${BASE_URL}/#business`
export const BUSINESS_NAME = 'RTI Auto Locksmith'
export const BUSINESS_PHONE = '+447309903243'

/** Shared PostalAddress block — used in every LocalBusiness schema */
const POSTAL_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: 'Wigan',          // SAB — no street number; use town
  addressLocality: 'Wigan',
  addressRegion: 'Greater Manchester',
  postalCode: 'WN1',
  addressCountry: 'GB',
}

/** Shared ContactPoint block */
const CONTACT_POINT = {
  '@type': 'ContactPoint',
  telephone: BUSINESS_PHONE,
  contactType: 'customer service',
  contactOption: 'TollFree',
  areaServed: 'GB',
  availableLanguage: { '@type': 'Language', name: 'English' },
  hoursAvailable: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday', 'Tuesday', 'Wednesday', 'Thursday',
      'Friday', 'Saturday', 'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// Service schema
// ─────────────────────────────────────────────────────────────────────────────

export interface ServiceSchemaOptions {
  name: string
  description: string
  url: string
  areaServed?: string[]
}

export function buildServiceSchema({
  name,
  description,
  url,
  areaServed = ['Wigan', 'Chorley', 'Leyland', 'St Helens', 'Skelmersdale'],
}: ServiceSchemaOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}/#service`,
    name,
    description,
    url,
    serviceType: 'Auto Locksmith',
    category: 'Automotive Services',
    provider: {
      '@type': 'LocalBusiness',
      '@id': BUSINESS_ID,
      name: BUSINESS_NAME,
      telephone: BUSINESS_PHONE,
      address: POSTAL_ADDRESS,
    },
    areaServed: areaServed.map((city) => ({
      '@type': 'City',
      name: city,
      containedInPlace: { '@type': 'Country', name: 'United Kingdom' },
    })),
    availableChannel: {
      '@type': 'ServiceChannel',
      servicePhone: CONTACT_POINT,
      availableLanguage: { '@type': 'Language', name: 'English' },
    },
    termsOfService: `${BASE_URL}/about`,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'GBP',
      priceRange: '££',
      availability: 'https://schema.org/InStock',
      businessFunction: 'https://schema.org/ProvideService',
    },
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Location / city-specific LocalBusiness schema
// ─────────────────────────────────────────────────────────────────────────────

export interface LocationSchemaOptions {
  city: string
  slug: string
  latitude: number
  longitude: number
  description: string
}

export function buildLocationSchema({
  city,
  slug,
  latitude,
  longitude,
  description,
}: LocationSchemaOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Locksmith'],
    '@id': `${BASE_URL}/${slug}/#business`,
    name: BUSINESS_NAME,
    description,
    url: `${BASE_URL}/${slug}`,
    telephone: BUSINESS_PHONE,
    priceRange: '££',
    currenciesAccepted: 'GBP',
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
      ...POSTAL_ADDRESS,
      addressLocality: city,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude,
      longitude,
    },
    areaServed: {
      '@type': 'City',
      name: city,
      containedInPlace: { '@type': 'Country', name: 'United Kingdom' },
    },
    contactPoint: CONTACT_POINT,
    // Ties this city-level entity back to the canonical business entity
    parentOrganization: {
      '@type': 'LocalBusiness',
      '@id': BUSINESS_ID,
      name: BUSINESS_NAME,
    },
    sameAs: [
      // Add Google Business Profile URL when claimed
      // 'https://g.page/rti-auto-locksmith',
    ],
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// FAQ schema
// ─────────────────────────────────────────────────────────────────────────────

export interface FAQItem {
  question: string
  answer: string
}

export function buildFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Breadcrumb schema
// ─────────────────────────────────────────────────────────────────────────────

export interface BreadcrumbItem {
  name: string
  url: string
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
