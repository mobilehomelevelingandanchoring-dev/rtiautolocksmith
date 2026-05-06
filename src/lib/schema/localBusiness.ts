export const BUSINESS_ID = 'https://rtiautolocksmith.com/#business'
export const BUSINESS_NAME = 'RTI Auto Locksmith'
export const BUSINESS_URL = 'https://rtiautolocksmith.com'
export const BUSINESS_PHONE = '+44XXXXXXXXXX'

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
    name,
    description,
    url,
    provider: {
      '@type': 'LocalBusiness',
      '@id': BUSINESS_ID,
      name: BUSINESS_NAME,
      telephone: BUSINESS_PHONE,
    },
    areaServed: areaServed.map((city) => ({ '@type': 'City', name: city })),
    availableChannel: {
      '@type': 'ServiceChannel',
      servicePhone: {
        '@type': 'ContactPoint',
        telephone: BUSINESS_PHONE,
        contactType: 'customer service',
        availableLanguage: 'en',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday', 'Tuesday', 'Wednesday', 'Thursday',
            'Friday', 'Saturday', 'Sunday',
          ],
          opens: '00:00',
          closes: '23:59',
        },
      },
    },
  }
}

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
    '@id': `${BUSINESS_URL}/${slug}/#business-${slug}`,
    name: BUSINESS_NAME,
    description,
    url: `${BUSINESS_URL}/${slug}`,
    telephone: BUSINESS_PHONE,
    openingHours: 'Mo-Su 00:00-23:59',
    areaServed: { '@type': 'City', name: city },
    geo: {
      '@type': 'GeoCoordinates',
      latitude,
      longitude,
    },
    parentOrganization: {
      '@type': 'LocalBusiness',
      '@id': BUSINESS_ID,
    },
  }
}

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
