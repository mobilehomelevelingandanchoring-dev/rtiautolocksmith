import type { Metadata } from 'next'

interface BuildMetadataOptions {
  title: string
  description: string
  path: string
  type?: 'website' | 'article'
}

export function buildMetadata({
  title,
  description,
  path,
  type = 'website',
}: BuildMetadataOptions): Metadata {
  const canonical = `https://rtiautolocksmith.com${path}`
  const ogImagePath = `/og${path === '/' ? '/home' : path}.png`

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'RTI Auto Locksmith',
      locale: 'en_GB',
      type,
      images: [
        {
          url: ogImagePath,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}
