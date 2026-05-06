import type { MetadataRoute } from 'next'

const BASE_URL = 'https://rtiautolocksmith.com'

// Fixed build date — update this when content changes significantly.
// Using a static date prevents unnecessary "sitemap changed" signals to GSC
// on every deploy when content has not actually changed.
const LAST_MODIFIED_HIGH    = '2025-05-01'   // Homepage + location pages
const LAST_MODIFIED_SERVICE = '2025-05-01'   // Service pages
const LAST_MODIFIED_ADVICE  = '2025-05-01'   // Advice / AEO pages
const LAST_MODIFIED_SUPPORT = '2025-05-01'   // About / Contact

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Homepage ──────────────────────────────────────────────────────────────
    {
      url: BASE_URL,
      lastModified: LAST_MODIFIED_HIGH,
      changeFrequency: 'weekly',
      priority: 1.0,
    },

    // ── Location pages (priority 0.9) ─────────────────────────────────────────
    {
      url: `${BASE_URL}/auto-locksmith-wigan`,
      lastModified: LAST_MODIFIED_HIGH,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/auto-locksmith-chorley`,
      lastModified: LAST_MODIFIED_HIGH,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/auto-locksmith-leyland`,
      lastModified: LAST_MODIFIED_HIGH,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/auto-locksmith-st-helens`,
      lastModified: LAST_MODIFIED_HIGH,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/auto-locksmith-skelmersdale`,
      lastModified: LAST_MODIFIED_HIGH,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // ── Service pages (priority 0.8) ──────────────────────────────────────────
    {
      url: `${BASE_URL}/car-lockout-service`,
      lastModified: LAST_MODIFIED_SERVICE,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/car-key-replacement`,
      lastModified: LAST_MODIFIED_SERVICE,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/lost-car-keys`,
      lastModified: LAST_MODIFIED_SERVICE,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/car-key-programming`,
      lastModified: LAST_MODIFIED_SERVICE,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/emergency-auto-locksmith`,
      lastModified: LAST_MODIFIED_SERVICE,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // ── Advice / AEO pages (priority 0.7) ────────────────────────────────────
    {
      url: `${BASE_URL}/advice/what-to-do-locked-out-of-car`,
      lastModified: LAST_MODIFIED_ADVICE,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/advice/car-key-replacement-cost-uk`,
      lastModified: LAST_MODIFIED_ADVICE,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/advice/can-locksmith-make-key-without-original`,
      lastModified: LAST_MODIFIED_ADVICE,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/advice/types-of-car-keys-explained`,
      lastModified: LAST_MODIFIED_ADVICE,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // ── Supporting pages (priority 0.5) ───────────────────────────────────────
    {
      url: `${BASE_URL}/about`,
      lastModified: LAST_MODIFIED_SUPPORT,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: LAST_MODIFIED_SUPPORT,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}
