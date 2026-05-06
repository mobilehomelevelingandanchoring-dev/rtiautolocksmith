import type { Metadata } from 'next'

const BASE_URL = 'https://rtiautolocksmith.com'

interface BuildMetadataOptions {
  title: string
  description: string
  path: string
  type?: 'website' | 'article'
  /** Override the OG image. Defaults to /og/<path>.png */
  ogImage?: string
  /** Article published date (ISO string) — only for advice pages */
  datePublished?: string
  /** Article modified date (ISO string) — only for advice pages */
  dateModified?: string
}

export function buildMetadata({
  title,
  description,
  path,
  type = 'website',
  ogImage,
  datePublished,
  dateModified,
}: BuildMetadataOptions): Metadata {
  const canonical = `${BASE_URL}${path}`

  // OG image — absolute URL required by WhatsApp, Slack, iMessage previews
  const ogImageUrl = ogImage
    ? `${BASE_URL}${ogImage}`
    : `${BASE_URL}/og${path === '/' ? '/home' : path}.png`

  return {
    title: { absolute: title },
    description,

    // ── Canonical ────────────────────────────────────────────────────────────
    alternates: {
      canonical,
      // hreflang — en-GB only (single language site)
      languages: {
        'en-GB': canonical,
        'x-default': canonical,
      },
    },

    // ── Open Graph ───────────────────────────────────────────────────────────
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'RTI Auto Locksmith',
      locale: 'en_GB',
      type,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/png',
        },
      ],
      ...(datePublished && { publishedTime: datePublished }),
      ...(dateModified && { modifiedTime: dateModified }),
    },

    // ── Twitter / X card ─────────────────────────────────────────────────────
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImageUrl],
    },

    // ── Robots — granular directives ─────────────────────────────────────────
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        // Allow Google to show large image previews in search results
        'max-image-preview': 'large',
        // Allow full snippet length — critical for featured snippets / SGE citations
        'max-snippet': -1,
      },
    },

    // ── Additional signals ───────────────────────────────────────────────────
    referrer: 'strict-origin-when-cross-origin',

    // Category helps with entity classification
    category: 'Automotive Services',
  }
}
