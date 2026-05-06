import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo/metadata'
import { buildLocationSchema, buildFAQSchema, buildBreadcrumbSchema } from '@/lib/schema/localBusiness'
import FAQSchema from '@/components/seo/FAQSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = buildMetadata({
  title: 'Auto Locksmith in Wigan | RTI Auto Locksmith',
  description:
    'RTI Auto Locksmith is Wigan\'s trusted mobile locksmith. Car lockouts, key replacement and programming — 24/7, all areas covered.',
  path: '/auto-locksmith-wigan',
})

const locationSchema = buildLocationSchema({
  city: 'Wigan',
  slug: 'auto-locksmith-wigan',
  latitude: 53.5448,
  longitude: -2.6318,
  description:
    'Mobile auto locksmith serving Wigan and surrounding villages 24/7. Car lockouts, key replacement, and key programming for all UK car makes.',
})

const faqs = [
  {
    question: 'How quickly can you reach me in Wigan town centre?',
    answer:
      'If you are in or around Wigan town centre — Standishgate, Wallgate, or the Wigan Pier area — we can typically reach you within 25 to 35 minutes. Traffic near DW Stadium on match days can slow us slightly, but we will always give you an honest ETA when you call.',
  },
  {
    question: 'Do you cover the villages around Wigan, not just the town centre?',
    answer:
      'Yes. We cover Wigan town centre and all surrounding villages including Leigh, Atherton, Hindley, Abram, Standish, Aspull, and Ince. If you are unsure whether you fall within our area, just ring us — if we can reach you, we will.',
  },
  {
    question: 'I work shifts at the Wigan hospitals. Can I call you at odd hours?',
    answer:
      'Absolutely. RTI Auto Locksmith operates 24 hours a day, every single day. We regularly help shift workers who find themselves locked out at 5am or needing a key programming job done before their next shift starts. There is no unsociable hours surcharge.',
  },
  {
    question: 'Can you programme a key for my car without me taking it to a Wigan dealer?',
    answer:
      'In almost all cases, yes. We carry the Autel IM608 and VVDI2 diagnostic programmers, which cover the vast majority of UK car makes and models. This includes Ford, Vauxhall, Volkswagen, BMW, Audi, Renault, and Toyota. The advantage of using RTI is that we come to you — whether you are at home in Hindley, parked up near Robin Park, or stranded on the A49.',
  },
  {
    question: 'What should I do while waiting for you to arrive?',
    answer:
      'Stay with your vehicle if it is safe to do so. If you are in an isolated area at night, wait somewhere well-lit nearby and let us know your exact location. Do not attempt to force entry yourself — this can cause expensive damage to door seals, trim, or the lock mechanism that is far costlier to repair than a locksmith callout.',
  },
  {
    question: 'Is parking near Wigan North Western station easy for your van?',
    answer:
      'It depends on the time of day. At peak commuter times the area around Wallgate and the station is busy. If you are stuck there, let us know when you call and we will plan the best approach. We are familiar with the area and know where to pull in safely to get the job done quickly.',
  },
  {
    question: 'Do you charge more for callouts in Leigh or Atherton compared to Wigan?',
    answer:
      'No. We do not apply distance surcharges within our coverage area. Leigh, Atherton, Hindley, and Standish are all covered at the same standard rate. The price depends on the type of job — lockout, key cutting, programming — not how far you are from Wigan town centre.',
  },
]

const breadcrumbs = [
  { name: 'Home', url: 'https://rtiautolocksmith.com' },
  { name: 'Auto Locksmith Wigan', url: 'https://rtiautolocksmith.com/auto-locksmith-wigan' },
]

export default function WiganPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-yellow-400">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">Auto Locksmith Wigan</span>
          </nav>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-6">
            Your Local Auto Locksmith in Wigan —{' '}
            <span className="text-yellow-400">Here When You Need Us</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl">
            RTI Auto Locksmith is a mobile auto locksmith serving Wigan town centre and the
            surrounding area 24 hours a day. No call-out fee. Typically on-site within 30&ndash;45
            minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+44XXXXXXXXXX"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              &#128222; Call RTI Now
            </a>
            <a
              href="https://wa.me/44XXXXXXXXXX"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              &#128172; WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Direct Answer Block */}
      <section className="bg-yellow-50 border-l-4 border-yellow-400 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
            <strong>RTI Auto Locksmith covers all of Wigan</strong> — from the town centre around
            Standishgate and Wallgate, out to Leigh, Atherton, Hindley, Abram, Standish, Aspull,
            and Ince. We handle car lockouts, car key replacement, and key programming for all UK
            makes and models. Call any time — we operate 24/7/365 with no call-out charge.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">

        {/* Local context */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            A Mobile Locksmith Who Knows Wigan
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              When I say I cover Wigan, I mean all of it. The town centre roads around the DW
              Stadium, the residential streets in Scholes and Ince, the car parks off the A49 near
              Robin Park, the stretch of B5238 towards Ashton-in-Makerfield — I have driven these
              roads on callouts at every hour imaginable.
            </p>
            <p>
              A common job I get in Wigan town centre involves drivers who have popped into a shop
              on Standishgate and come back to find the key fob battery has died mid-lock. The car
              is secured, the key will not open it, and they are stranded. Nine times out of ten
              this is a straightforward entry job using mechanical means — no fuss, no damage, car
              open within minutes.
            </p>
            <p>
              Night shift workers near Wigan North Western station are another regular callout. A
              driver finishing a long shift at 4am, exhausted, discovers they have locked their keys
              inside their Ford Transit. We will be there. That is not a line from a brochure — it
              is just what we do.
            </p>
          </div>
        </section>

        {/* Services in Wigan */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Auto Locksmith Services Available Across Wigan
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">Car Lockout &mdash; Entry Without a Key</h3>
              <p className="text-gray-700 text-sm mb-3">
                Whether you have locked your keys inside, snapped a key in the lock, or found
                yourself with a flat key fob battery on a cold Wigan morning, we gain entry cleanly
                using Lishi picks and specialist tools suited to your car make. We cover all common
                vehicles on Wigan roads — Ford Focus and Fiesta, Vauxhall Astra and Corsa,
                Volkswagen Golf and Polo, Toyota Yaris, and more.
              </p>
              <Link href="/car-lockout-service" className="text-yellow-600 font-semibold text-sm hover:text-yellow-700">
                More about our car lockout service &rarr;
              </Link>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">Car Key Replacement</h3>
              <p className="text-gray-700 text-sm mb-3">
                Need a replacement key cut and programmed? We supply and programme keys on-site for
                all makes. Whether it is a basic cut key, a transponder key, or a full proximity
                smart key for a newer BMW or Audi, we have the equipment to do this at your
                location — no towing to a dealer required.
              </p>
              <Link href="/car-key-replacement" className="text-yellow-600 font-semibold text-sm hover:text-yellow-700">
                About car key replacement &rarr;
              </Link>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">Key Programming</h3>
              <p className="text-gray-700 text-sm mb-3">
                Got a key cut that will not start the car? Remote not syncing? We use the VVDI2 and
                Autel IM608 to programme transponder chips, remote keys, and proximity fobs for all
                makes. This is often significantly cheaper than going through a franchised dealer.
              </p>
              <Link href="/car-key-programming" className="text-yellow-600 font-semibold text-sm hover:text-yellow-700">
                About key programming &rarr;
              </Link>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">Lost All Keys</h3>
              <p className="text-gray-700 text-sm mb-3">
                If you have lost all copies of your car key, we can still help. Using EEPROM
                reading or OBD programming depending on the vehicle, we can generate a working key
                from scratch — even with no original present.
              </p>
              <Link href="/lost-car-keys" className="text-yellow-600 font-semibold text-sm hover:text-yellow-700">
                Help with lost car keys &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Coverage details */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Areas We Cover Around Wigan
          </h2>
          <p className="text-gray-700 mb-4">
            We cover Wigan town centre and surrounding areas including:
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-700 mb-6">
            {[
              'Leigh', 'Atherton', 'Hindley', 'Abram', 'Standish', 'Aspull',
              'Ince', 'Platt Bridge', 'Golborne', 'Tyldesley', 'Orrell', 'Pemberton',
            ].map((area) => (
              <li key={area} className="flex items-center gap-2 text-sm">
                <span className="text-yellow-500">&#10003;</span> {area}
              </li>
            ))}
          </ul>
          <p className="text-gray-700 text-sm">
            We also cover{' '}
            <Link href="/auto-locksmith-chorley" className="text-yellow-600 underline hover:text-yellow-700">
              Chorley
            </Link>
            {' '}and surrounding areas for drivers along the M61 corridor. If you are not sure
            whether you are within our range, just call — we will tell you honestly.
          </p>
        </section>

        {/* Advice link */}
        <section className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Not Sure What to Do Right Now?
          </h2>
          <p className="text-gray-700 mb-4">
            If you are locked out and feeling stressed, our guide on{' '}
            <Link href="/advice/what-to-do-locked-out-of-car" className="text-yellow-600 underline hover:text-yellow-700">
              what to do if you are locked out of your car
            </Link>{' '}
            walks you through your options clearly. The short answer: call RTI first, before trying
            anything else.
          </p>
        </section>

      </article>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Questions About Our Wigan Service
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

      {/* CTA */}
      <section className="bg-yellow-400 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Need an Auto Locksmith in Wigan Right Now?
          </h2>
          <p className="text-gray-800 mb-8">
            Call RTI directly. We will be honest about our ETA, confirm the price before
            starting, and get to you as quickly as possible. No hold music. No call centres.
          </p>
          <a
            href="tel:+44XXXXXXXXXX"
            className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold text-xl px-10 py-5 rounded-lg transition-colors"
          >
            &#128222; Call RTI Auto Locksmith
          </a>
          <p className="mt-4 text-sm text-gray-700">
            Available 24/7/365 &mdash; no call-out fee
          </p>
        </div>
      </section>
    </>
  )
}
