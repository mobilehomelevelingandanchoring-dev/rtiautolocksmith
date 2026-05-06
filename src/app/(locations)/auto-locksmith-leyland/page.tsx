import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo/metadata'
import { buildLocationSchema } from '@/lib/schema/localBusiness'
import FAQSchema from '@/components/seo/FAQSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = buildMetadata({
  title: 'Auto Locksmith in Leyland | RTI Auto Locksmith',
  description:
    'RTI Auto Locksmith covers Leyland with 24/7 mobile car key and lockout services. Local, fast, and fully insured. Call now.',
  path: '/auto-locksmith-leyland',
})

const locationSchema = buildLocationSchema({
  city: 'Leyland',
  slug: 'auto-locksmith-leyland',
  latitude: 53.6921,
  longitude: -2.6944,
  description:
    'Mobile auto locksmith serving Leyland, Farington, Bamber Bridge, Lostock Hall, and surrounding areas 24/7.',
})

const faqs = [
  {
    question: 'How quickly can you reach Leyland town centre?',
    answer:
      'Leyland town centre and the surrounding areas including Turpin Green Lane and Worden Park are typically within 35 to 45 minutes from our base. We will give you a realistic ETA on the call — not an optimistic number designed to keep you on the line.',
  },
  {
    question: 'Do you cover the industrial estates on the A582 near Leyland?',
    answer:
      'Yes. The business and industrial estates along the A582 corridor are a regular source of callouts — particularly from HGV drivers and van operators who have locked their cab keys inside. We cover vans and light commercial vehicles as well as cars.',
  },
  {
    question: 'Can you help with a lost key for a car parked at Worden Park?',
    answer:
      'Yes, and we can come directly to the park. Give us your parking location when you call and we will navigate straight there. We cover all common makes including Ford, Vauxhall, VW, Toyota, and Nissan — most jobs are completed on-site without any towing.',
  },
  {
    question: 'My child has locked themselves inside the car. What should I do?',
    answer:
      'Call 999 first if the child is in distress, especially in warm weather. Emergency services can break a window safely and quickly. Once the child is safe, call RTI and we will help with entry or lock repairs if needed. Never feel embarrassed to call 999 in a genuine child-in-car emergency — that is exactly what that service is for.',
  },
  {
    question: 'Do you cover Bamber Bridge and Lostock Hall?',
    answer:
      'Yes. Bamber Bridge, Lostock Hall, Farington, and Walton-le-Dale are all within our coverage area south of Preston. The same response times and pricing apply as for Leyland town centre itself.',
  },
  {
    question: 'What car makes do you cover in the Leyland area?',
    answer:
      'All makes sold and driven in the UK. In the Leyland and South Ribble area we regularly work on Ford (Focus, Fiesta, Transit), Vauxhall (Astra, Corsa, Combo), Volkswagen (Golf, Polo, Caddy), Toyota, Nissan, Renault, and BMW. If you have a less common make, call us — we almost certainly cover it.',
  },
  {
    question: 'Is RTI a national company or a local Leyland locksmith?',
    answer:
      'RTI Auto Locksmith is a local, independent mobile locksmith — not a national franchise or call centre. When you ring us, you speak to the person doing the job. There is no third-party dispatch, no subcontracting, and no hidden markups from middlemen.',
  },
]

const breadcrumbs = [
  { name: 'Home', url: 'https://rtiautolocksmith.com' },
  { name: 'Auto Locksmith Leyland', url: 'https://rtiautolocksmith.com/auto-locksmith-leyland' },
]

export default function LeylandPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbs} />

      <section className="bg-gray-900 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-yellow-400">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">Auto Locksmith Leyland</span>
          </nav>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-6">
            Auto Locksmith Covering Leyland —{' '}
            <span className="text-yellow-400">24 Hours, Every Day</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl">
            RTI Auto Locksmith provides mobile car lockout and key services across Leyland and
            South Ribble. Fully insured, no call-out fee, typically on-site within 35&ndash;45
            minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+447309903243"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              &#128222; Call RTI Now
            </a>
            <a
              href="https://wa.me/447309903243"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              &#128172; WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <section className="bg-yellow-50 border-l-4 border-yellow-400 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
            <strong>RTI covers all of Leyland</strong> including Worden Park, Turpin Green Lane,
            the A582 corridor, and surrounding villages — Farington, Bamber Bridge, Lostock Hall,
            and Walton-le-Dale. Car lockouts, key replacement, and key programming for all makes.
            24/7, no call-out fee.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Leyland Drivers Call RTI
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              Leyland has a strong industrial and logistics heritage, and that shows in the
              callout mix we handle here. A meaningful proportion of our Leyland jobs involve
              commercial vehicles — Transit vans, Vauxhall Combos, VW Caddys — where a driver
              has locked their keys in the cab mid-shift on an industrial estate off the A582.
              We treat these exactly the same as a car lockout: the right Lishi pick for the
              lock type, clean entry, no damage.
            </p>
            <p>
              Worden Park is another regular location. Families visiting the park, dog walkers,
              and joggers who leave keys in their car and find the door locked when they return.
              We come directly to the park — no need to arrange transport to us.
            </p>
            <p>
              School-run lockouts are more common than people expect. A parent drops the kids at
              school, leaves the engine running briefly and steps out — central locking engages,
              keys inside. For these we use the air-wedge entry method or appropriate Lishi pick
              depending on the make, always aiming to get the parent back on their way as quickly
              as possible.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Areas Around Leyland We Cover</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-700 mb-6">
            {['Farington', 'Bamber Bridge', 'Lostock Hall', 'Walton-le-Dale',
              'Penwortham', 'Tarleton', 'Much Hoole', 'Croston'].map((area) => (
              <li key={area} className="flex items-center gap-2 text-sm">
                <span className="text-yellow-500">&#10003;</span> {area}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Services in the Leyland Area</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">Car &amp; Van Lockout Entry</h3>
              <p className="text-gray-700 text-sm mb-3">
                Cars, vans, and light commercial vehicles. Non-destructive entry using specialist
                tools. All makes covered.
              </p>
              <Link href="/car-lockout-service" className="text-yellow-600 font-semibold text-sm hover:text-yellow-700">
                Our lockout service &rarr;
              </Link>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">Car Key Replacement</h3>
              <p className="text-gray-700 text-sm mb-3">
                Supply and programme replacement keys on-site. No dealer trip needed. Same-day
                service where possible.
              </p>
              <Link href="/car-key-replacement" className="text-yellow-600 font-semibold text-sm hover:text-yellow-700">
                Our key replacement service &rarr;
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Not Sure What to Do?</h2>
          <p className="text-gray-700 text-sm">
            If you have never been in this situation before, our guide on{' '}
            <Link href="/advice/what-to-do-locked-out-of-car" className="text-yellow-600 underline hover:text-yellow-700">
              what to do if you are locked out of your car
            </Link>{' '}
            walks through your options clearly. The short version: do not force anything, stay
            with the vehicle if safe, and call RTI.
          </p>
        </section>
      </article>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Questions About Our Leyland Service
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-lg p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-yellow-400 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Need an Auto Locksmith in Leyland?
          </h2>
          <p className="text-gray-800 mb-8">
            Call RTI now for a clear quote. No call-out fee, no waiting in a queue, no
            automated systems — just a real person ready to help.
          </p>
          <a
            href="tel:+447309903243"
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
