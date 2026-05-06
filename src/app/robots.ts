import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── Googlebot — full crawl access ────────────────────────────────────────
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/404', '/500'],
      },
      // ── Googlebot-Image — allow for image search ──────────────────────────────
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
      // ── Bingbot ───────────────────────────────────────────────────────────────
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
        crawlDelay: 1,
      },
      // ── All other bots ────────────────────────────────────────────────────────
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/404',
          '/500',
        ],
      },
    ],
    sitemap: 'https://rtiautolocksmith.com/sitemap.xml',
    host: 'https://rtiautolocksmith.com',
  }
}
