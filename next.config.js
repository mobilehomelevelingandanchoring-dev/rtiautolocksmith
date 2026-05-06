/** @type {import('next').NextConfig} */

const securityHeaders = [
  // Tell browsers to always use HTTPS for 2 years, including subdomains
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  // Prevent clickjacking — disallow embedding in iframes from other origins
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  // Stop browsers sniffing MIME types
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // Referrer policy — send full URL on same-origin, only origin cross-origin
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // Permissions policy — lock down sensors, only allow geolocation for self
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(self), interest-cohort=()',
  },
  // Prefetch DNS for external resources used site-wide
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
]

const config = {
  // Remove X-Powered-By header — no need to advertise Next.js to scrapers
  poweredByHeader: false,

  // Gzip / Brotli compression at the Node layer (Vercel handles this too)
  compress: true,

  // Generate stable ETags for cache validation
  generateEtags: true,

  // Trailing slash — canonical without slash (matches our metadata)
  trailingSlash: false,

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [390, 640, 768, 1024, 1280],
    imageSizes: [16, 32, 64, 128, 256],
    minimumCacheTTL: 31536000,
    // Allow Vercel image optimisation to serve from the live domain
    remotePatterns: [],
  },

  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  async redirects() {
    return [
      // Canonicalise www → non-www permanently
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.rtiautolocksmith.com' }],
        destination: 'https://rtiautolocksmith.com/:path*',
        permanent: true,
      },
    ]
  },

  async headers() {
    return [
      // Apply security headers to every route
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
      // Long-lived cache for static assets (hashed filenames by Next.js)
      {
        source: '/(.*)\\.(jpg|jpeg|png|webp|avif|ico|svg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*)\\.(woff|woff2|ttf|otf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Sitemap and robots — short cache so GSC picks up changes quickly
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
          },
          {
            key: 'Content-Type',
            value: 'application/xml; charset=utf-8',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600',
          },
        ],
      },
    ]
  },
}

module.exports = config
