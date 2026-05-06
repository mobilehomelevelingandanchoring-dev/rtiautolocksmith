import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'RTI Auto Locksmith — Wigan',
    short_name: 'RTI Locksmith',
    description: 'Mobile auto locksmith serving Wigan 24/7. Car lockouts, key replacement, key programming.',
    start_url: '/',
    display: 'standalone',
    background_color: '#111827',
    theme_color: '#FBBF24',
    orientation: 'portrait-primary',
    lang: 'en-GB',
    scope: '/',
    categories: ['automotive', 'business', 'utilities'],
    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    shortcuts: [
      {
        name: 'Call RTI Now',
        short_name: 'Call Now',
        description: 'Tap to call RTI Auto Locksmith directly',
        url: 'tel:+447309903243',
        icons: [{ src: '/icons/icon-192.png', sizes: '192x192' }],
      },
    ],
  }
}
