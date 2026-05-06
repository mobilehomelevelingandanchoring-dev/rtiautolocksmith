import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'RTI Auto Locksmith — Wigan',
    short_name: 'RTI Locksmith',
    description: 'Mobile auto locksmith serving Wigan 24/7. Car lockouts, key replacement, key programming.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1a0020',
    theme_color: '#C9A84C',
    orientation: 'portrait-primary',
    lang: 'en-GB',
    scope: '/',
    categories: ['automotive', 'business', 'utilities'],
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    shortcuts: [
      {
        name: 'Call RTI Now',
        short_name: 'Call Now',
        description: 'Tap to call RTI Auto Locksmith directly',
        url: 'tel:+447309903243',
        icons: [{ src: '/android-chrome-192x192.png', sizes: '192x192' }],
      },
    ],
  }
}
