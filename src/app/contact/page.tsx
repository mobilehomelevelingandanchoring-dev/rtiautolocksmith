import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo/metadata'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = buildMetadata({
  title: 'Contact RTI Auto Locksmith | Call 24/7',
  description:
    'Contact RTI Auto Locksmith for car lockout and key replacement services across Wigan, Chorley, Leyland, St Helens, and Skelmersdale. Available 24/7.',
  path: '/contact',
})

const breadcrumbs = [
  { name: 'Home', url: 'https://rtiautolocksmith.com' },
  { name: 'Contact', url: 'https://rtiautolocksmith.com/contact' },
]

const coverageAreas = [
  { city: 'Wigan', href: '/auto-locksmith-wigan' },
  { city: 'Chorley', href: '/auto-locksmith-chorley' },
  { city: 'Leyland', href: '/auto-locksmith-leyland' },
  { city: 'St Helens', href: '/auto-locksmith-st-helens' },
  { city: 'Skelmersdale', href: '/auto-locksmith-skelmersdale' },
]

const services = [
  { name: 'Car Lockout Service', href: '/car-lockout-service' },
  { name: 'Car Key Replacement', href: '/car-key-replacement' },
  { name: 'Lost Car Keys', href: '/lost-car-keys' },
  { name: 'Car Key Programming', href: '/car-key-programming' },
  { name: 'Emergency Auto Locksmith', href: '/emergency-auto-locksmith' },
]

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      <section className="bg-gray-900 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-yellow-400">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">Contact</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
            Contact RTI Auto Locksmith —{' '}
            <span className="text-yellow-400">We Answer 24/7</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            The fastest way to get help is to call directly. When you ring RTI, you speak
            immediately to the locksmith who will attend your job — no queues, no automated
            systems, no holding music.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 gap-6">

          {/* Phone */}
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-8 text-center">
            <div className="text-5xl mb-4">&#128222;</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Call Us</h2>
            <p className="text-gray-600 text-sm mb-4">
              For emergency lockouts, same-day service, or a quick quote — calling is the
              fastest route. We answer any time, day or night.
            </p>
            <a
              href="tel:+44XXXXXXXXXX"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold text-xl px-8 py-4 rounded-lg transition-colors w-full"
            >
              Call RTI Now
            </a>
            <p className="mt-3 text-xs text-gray-500">Available 24/7/365 &mdash; no hold music</p>
          </div>

          {/* WhatsApp */}
          <div className="bg-green-50 border-2 border-green-400 rounded-xl p-8 text-center">
            <div className="text-5xl mb-4">&#128172;</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h2>
            <p className="text-gray-600 text-sm mb-4">
              Prefer to message? Send us a WhatsApp with your car make, model, location, and
              the issue. We will come back to you quickly with a quote.
            </p>
            <a
              href="https://wa.me/44XXXXXXXXXX"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold text-xl px-8 py-4 rounded-lg transition-colors w-full"
            >
              WhatsApp RTI
            </a>
            <p className="mt-3 text-xs text-gray-500">Response time may vary at busy periods</p>
          </div>
        </div>

        {/* Important note */}
        <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-5">
          <h3 className="font-bold text-red-800 mb-1">&#9888; Emergency? Always call — do not WhatsApp.</h3>
          <p className="text-red-700 text-sm">
            If you are in an urgent or unsafe situation — locked out at night, keys in a running
            vehicle, child or pet inside — please call rather than message. A phone call gets an
            immediate response. WhatsApp messages are checked regularly but not guaranteed
            instantly.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Have Ready When You Call</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: '&#128664;', label: 'Your vehicle make, model, and year', detail: 'This lets us identify the key type and quote accurately before attending.' },
              { icon: '&#128205;', label: 'Your location', detail: 'Street name or nearby landmark — the more specific the better so we can navigate directly to you.' },
              { icon: '&#128273;', label: 'Description of the issue', detail: 'Locked out, lost keys, key won\'t start the car, remote not working — this determines the job type and cost.' },
              { icon: '&#128084;', label: 'Whether you have a spare key', detail: 'If you have one working key and need a spare, the process and cost are different from a total lost-key job.' },
            ].map(({ icon, label, detail }) => (
              <div key={label} className="bg-white rounded-lg p-5 border border-gray-100">
                <div className="text-2xl mb-2" dangerouslySetInnerHTML={{ __html: icon }} />
                <h3 className="font-semibold text-gray-900 mb-1">{label}</h3>
                <p className="text-gray-600 text-sm">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 gap-12">

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Areas We Cover</h2>
            <ul className="space-y-2">
              {coverageAreas.map(({ city, href }) => (
                <li key={city}>
                  <Link href={href} className="text-yellow-600 hover:text-yellow-700 font-medium text-sm flex items-center gap-2">
                    <span>&#10003;</span> Auto Locksmith {city}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-500">
              We cover all villages and surrounding areas within approximately 15 miles of
              Wigan town centre.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Our Services</h2>
            <ul className="space-y-2">
              {services.map(({ name, href }) => (
                <li key={name}>
                  <Link href={href} className="text-yellow-600 hover:text-yellow-700 font-medium text-sm flex items-center gap-2">
                    <span>&#8594;</span> {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Business Information</h2>
          <div className="text-gray-700 space-y-2 text-sm">
            <p><strong>Business name:</strong> RTI Auto Locksmith</p>
            <p><strong>Type:</strong> Mobile auto locksmith (service-area business — no fixed premises open to the public)</p>
            <p><strong>Service area:</strong> Wigan and approximately 15 miles radius, including Chorley, Leyland, St Helens, and Skelmersdale</p>
            <p><strong>Hours:</strong> 24 hours a day, 7 days a week, 365 days a year — including all bank holidays</p>
            <p><strong>Call-out fee:</strong> None</p>
          </div>
        </div>
      </section>

      <section className="bg-yellow-400 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Ready to Call?
          </h2>
          <p className="text-gray-800 mb-8">
            RTI Auto Locksmith — local, independent, and available any time you need us.
            No call-out fee. Honest pricing. Straight answers.
          </p>
          <a
            href="tel:+44XXXXXXXXXX"
            className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold text-xl px-10 py-5 rounded-lg transition-colors"
          >
            &#128222; Call RTI Auto Locksmith
          </a>
          <p className="mt-4 text-sm text-gray-700">Available 24/7/365 — covering Wigan and surrounding areas</p>
        </div>
      </section>
    </>
  )
}
