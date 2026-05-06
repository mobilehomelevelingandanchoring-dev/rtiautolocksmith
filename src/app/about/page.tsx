import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo/metadata'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = buildMetadata({
  title: 'About RTI Auto Locksmith | Mobile Locksmith Wigan',
  description:
    'RTI Auto Locksmith is a local, independent mobile auto locksmith serving Wigan and surrounding areas 24/7. Find out who we are and how we work.',
  path: '/about',
})

const breadcrumbs = [
  { name: 'Home', url: 'https://rtiautolocksmith.com' },
  { name: 'About RTI Auto Locksmith', url: 'https://rtiautolocksmith.com/about' },
]

const trustItems = [
  { label: 'Coverage area', value: 'Wigan, Chorley, Leyland, St Helens, Skelmersdale and surrounding villages' },
  { label: 'Availability', value: '24 hours a day, 7 days a week, 365 days a year' },
  { label: 'Response time', value: 'Typically 30–45 minutes across the core Wigan area' },
  { label: 'Call-out fee', value: 'None — price quoted before we attend' },
  { label: 'Vehicles covered', value: 'All UK makes and models, cars and light commercial vehicles' },
  { label: 'Insurance', value: 'Fully insured mobile locksmith' },
]

const equipment = [
  { name: 'Autel IM608', use: 'Professional all-makes key programmer and diagnostic platform' },
  { name: 'VVDI2 (Xhorse)', use: 'Transponder generation, remote programming, key learning' },
  { name: 'Lishi 2-in-1 picks', use: 'Non-destructive entry and lock decoding — full range of profiles' },
  { name: 'EEPROM reader/writer', use: 'Direct chip reading for vehicles where OBD access is restricted' },
  { name: 'Air wedge entry kit', use: 'Supplementary entry tool for select vehicle types' },
  { name: 'Mobile key cutting machine', use: 'Blade cutting on-site to decoded or code-based profiles' },
]

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      <section className="bg-gray-900 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-yellow-400">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">About</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
            About RTI Auto Locksmith —{' '}
            <span className="text-yellow-400">Local, Independent, and Always Available</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            RTI Auto Locksmith is a mobile auto locksmith based near Wigan, covering the
            surrounding area 24 hours a day. We are not a franchise. We are not a call centre.
            When you call RTI, you speak directly to the person who will be attending your job.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-16 space-y-14">

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <div className="text-gray-700 space-y-4">
            <p>
              RTI Auto Locksmith is a mobile auto locksmith service operating across Wigan,
              Chorley, Leyland, St Helens, Skelmersdale, and the surrounding villages and
              towns within approximately 15 miles of Wigan town centre.
            </p>
            <p>
              We are a local, independent operation — not affiliated with any national franchise,
              not subcontracted from a call centre, and not competing on volume by cutting
              corners on equipment or training. Every job is attended by the same person who
              takes your call. You get consistency, honesty, and a clear price before we move.
            </p>
            <p>
              Auto locksmithing is a specialist trade. Gaining entry to a modern car without
              causing damage, and programming a replacement key to a current-generation vehicle
              immobiliser, requires professional-grade equipment and working knowledge of how
              different makes and models behave. We invest in both.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">RTI at a Glance</h2>
          <div className="divide-y divide-gray-100 border border-gray-100 rounded-lg overflow-hidden">
            {trustItems.map(({ label, value }) => (
              <div key={label} className="flex flex-col sm:flex-row">
                <div className="sm:w-1/3 bg-gray-50 px-5 py-4 font-semibold text-gray-800 text-sm">
                  {label}
                </div>
                <div className="sm:w-2/3 px-5 py-4 text-gray-700 text-sm">{value}</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Actually Do</h2>
          <div className="text-gray-700 space-y-4">
            <p>
              The vast majority of our callouts fall into three categories: car lockouts (gaining
              entry when keys are locked inside), car key replacement (cutting and programming a
              new key when the original is lost or damaged), and key programming (programming a
              key that was cut elsewhere, or re-syncing a remote that has stopped working).
            </p>
            <p>
              We work on all UK makes and models including Ford, Vauxhall, Volkswagen, Audi,
              BMW, Renault, Toyota, Nissan, Hyundai, Kia, Skoda, Seat, Mercedes, and more.
              We also cover vans and light commercial vehicles — Transit, Vivaro, Sprinter,
              Caddy, and others are regular jobs.
            </p>
            <p>
              Everything is done at your location. There is no workshop to bring the car to,
              no towing needed in the vast majority of cases, and no waiting for a parts order
              in most situations. We carry the equipment and blanks for the most common
              makes and can source less common items quickly.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Equipment We Use</h2>
          <p className="text-gray-700 mb-6">
            In this trade, the quality of your tools is the quality of your service. We use
            professional-grade equipment that matches or exceeds what main dealers use for
            key programming:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {equipment.map(({ name, use }) => (
              <div key={name} className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-1">{name}</h3>
                <p className="text-gray-600 text-sm">{use}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Price Jobs</h2>
          <div className="text-gray-700 space-y-4">
            <p>
              We quote before attending. Always. When you call and tell us your car make, model,
              and the nature of the job, we give you a clear price. That price does not change
              when we arrive unless the job turns out to be significantly different from what was
              described — and if that happens, we will tell you before we do the additional work,
              not after.
            </p>
            <p>
              There is no call-out fee. There is no unsociable hours surcharge. A 3am callout
              in Hindley costs the same as a midday callout in Wigan town centre — the price
              is based on the job, not the hour.
            </p>
            <p>
              If you want a rough idea of what different jobs typically cost across the UK, our
              guide on{' '}
              <Link href="/advice/car-key-replacement-cost-uk" className="text-yellow-600 underline hover:text-yellow-700">
                car key replacement costs in the UK
              </Link>{' '}
              gives honest figures by key type.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Coverage Area</h2>
          <p className="text-gray-700 mb-6">
            We cover approximately a 15-mile radius from Wigan town centre. This includes:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
            {[
              'Wigan town centre', 'Leigh', 'Atherton', 'Hindley', 'Abram',
              'Standish', 'Aspull', 'Ince', 'Chorley', 'Adlington', 'Coppull',
              'Leyland', 'Farington', 'Bamber Bridge', 'St Helens', 'Rainford',
              'Newton-le-Willows', 'Haydock', 'Skelmersdale', 'Upholland', 'Orrell',
            ].map((area) => (
              <div key={area} className="flex items-center gap-2 text-sm text-gray-700">
                <span className="text-yellow-500">&#10003;</span> {area}
              </div>
            ))}
          </div>
          <p className="text-gray-700 text-sm">
            Not sure if we cover your location? Just call. If we can get to you, we will
            tell you straight away along with a realistic ETA.
          </p>
        </section>

        <section className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            {[
              { label: 'Car lockout entry', href: '/car-lockout-service' },
              { label: 'Car key replacement', href: '/car-key-replacement' },
              { label: 'Lost car keys', href: '/lost-car-keys' },
              { label: 'Car key programming', href: '/car-key-programming' },
              { label: 'Emergency auto locksmith', href: '/emergency-auto-locksmith' },
            ].map(({ label, href }) => (
              <Link key={href} href={href} className="flex items-center gap-2 text-yellow-600 hover:text-yellow-700 font-medium">
                <span>&#8594;</span> {label}
              </Link>
            ))}
          </div>
        </section>

      </article>

      <section className="bg-yellow-400 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Need RTI Auto Locksmith?
          </h2>
          <p className="text-gray-800 mb-8">
            Call directly. No automated systems, no hold music. You speak to the locksmith
            attending your job, get an honest ETA, and a clear price upfront.
          </p>
          <a
            href="tel:+44XXXXXXXXXX"
            className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold text-xl px-10 py-5 rounded-lg transition-colors"
          >
            &#128222; Call RTI Auto Locksmith
          </a>
          <p className="mt-4 text-sm text-gray-700">Available 24/7/365 &mdash; no call-out fee</p>
        </div>
      </section>
    </>
  )
}
