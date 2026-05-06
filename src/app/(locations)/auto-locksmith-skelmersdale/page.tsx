import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo/metadata'
import { buildLocationSchema } from '@/lib/schema/localBusiness'
import FAQSchema from '@/components/seo/FAQSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = buildMetadata({
  title: 'Auto Locksmith Skelmersdale | RTI Auto Locksmith',
  description:
    'RTI Auto Locksmith serves Skelmersdale with 24/7 mobile lockout and car key services. All makes covered. Call for fast response.',
  path: '/auto-locksmith-skelmersdale',
})

const locationSchema = buildLocationSchema({
  city: 'Skelmersdale',
  slug: 'auto-locksmith-skelmersdale',
  latitude: 53.5513,
  longitude: -2.7762,
  description:
    'Mobile auto locksmith serving Skelmersdale, Upholland, Orrell, Digmoor, Tanhouse, and surrounding areas 24/7.',
})

const faqs = [
  {
    question: 'Does Skelmersdale\'s road layout make it harder for a locksmith to navigate?',
    answer:
      "Skelmersdale's New Town layout — with its roundabout-heavy dual carriageway system and residential areas set back from the main routes — can be confusing if you don't know it. We do. If you are in an area like Digmoor, Tanhouse, or White Moss, tell us the road name or a nearby landmark when you call and we will navigate directly. Don't worry about explaining how to get there — we cover Skelmersdale regularly.",
  },
  {
    question: 'Can you reach the Concourse Shopping Centre area quickly?',
    answer:
      'Yes. The Concourse and the surrounding Skelmersdale town centre area — including Peel Road and Glenburn Road — are well within our coverage. Retail and supermarket car park lockouts are among the most common jobs we handle in Skelmersdale. We will come directly to you in the car park.',
  },
  {
    question: 'Do you cover Upholland and Orrell from Skelmersdale?',
    answer:
      'Yes. Upholland and Orrell are within our coverage area, sitting between Skelmersdale and Wigan. Digmoor, Tanhouse, Rainford, and the surrounding residential areas are all included. If you are on the edge of our range, just call — if we can get to you, we will tell you honestly.',
  },
  {
    question: 'I work at one of the Skelmersdale industrial estates. Can you come there?',
    answer:
      'Yes. The industrial and business estates around Tawd Road and the surrounding areas are regular callout locations for us. Industrial estate lockouts are typically van or car lockouts mid-shift. We cover all commercial vehicle makes as well as cars, and we understand that time is money when you are on a job.',
  },
  {
    question: 'Can you make a replacement key if I have lost all my keys in Skelmersdale?',
    answer:
      'Yes. Even with no original key present, we can generate a new key for most makes using EEPROM data reading or OBD programming. For a Toyota Yaris or Nissan Micra this is a relatively straightforward process. For a BMW or Audi it takes longer and costs more, but it is still usually significantly cheaper and faster than arranging a dealer visit.',
  },
  {
    question: 'Is there a Skelmersdale-specific surcharge?',
    answer:
      'No. Skelmersdale falls within our standard coverage area and is priced the same as any other callout. The price depends on the type of job — lockout entry, key cutting, programming — not your postcode. We quote before attending, and that is the price you pay.',
  },
  {
    question: 'My key fob stopped working in Skelmersdale. Is it just the battery?',
    answer:
      'Often, yes — a CR2032 or similar battery is the first thing to check. Most fob batteries last two to five years. If replacing the battery does not restore the remote function, the fob may need re-syncing to the car, or in some cases the fob itself needs replacing and programming. Call us and describe the symptoms — we can usually diagnose the likely cause over the phone before attending.',
  },
]

const breadcrumbs = [
  { name: 'Home', url: 'https://rtiautolocksmith.com' },
  { name: 'Auto Locksmith Skelmersdale', url: 'https://rtiautolocksmith.com/auto-locksmith-skelmersdale' },
]

export default function SkelmersdalePage() {
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
            <span className="text-gray-200">Auto Locksmith Skelmersdale</span>
          </nav>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-6">
            Auto Locksmith in Skelmersdale —{' '}
            <span className="text-yellow-400">We Know the New Town Roads</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl">
            RTI Auto Locksmith covers Skelmersdale and surrounding areas 24/7. Car lockouts,
            key replacement, and programming for all makes. No call-out fee. Typically on-site
            within 35&ndash;45 minutes.
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
            <strong>RTI covers all of Skelmersdale</strong> — the town centre around the Concourse
            Shopping Centre, Tawd Road, Peel Road, Glenburn Road, White Moss, Digmoor, Tanhouse,
            and surrounding villages including Upholland, Orrell, and Rainford. Car lockouts and
            key replacement for all makes, 24 hours a day.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Skelmersdale: A Town That Keeps Us Busy
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              Skelmersdale was built as a New Town in the 1960s, which means its road layout is
              unlike most other towns in the North West — a network of dual carriageways, large
              roundabouts, and residential areas reached by secondary roads off the main
              circulatory routes. The Tawd Road and A570 are the main arteries, with estates
              branching off in every direction.
            </p>
            <p>
              For a locksmith, this means accurate navigation matters more than in a traditional
              grid-street town. We cover Skelmersdale regularly, so we know the difference between
              Digmoor and Tanhouse, and we know that telling someone to meet you "near the
              Concourse" is not specific enough at midnight. When you call, we will pinpoint your
              exact location before setting off.
            </p>
            <p>
              The types of callout we handle here include retail park lockouts near the Concourse,
              industrial estate jobs around Tawd Road, and residential callouts from across the
              New Town estates. We carry Lishi picks suited to all common makes — including the
              Ford Fiestas, Vauxhall Corsas, Renault Clios, and Nissan Micras that dominate the
              local roads here.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Areas Around Skelmersdale We Cover</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-700 mb-6">
            {['Upholland', 'Orrell', 'Rainford', 'Digmoor', 'Tanhouse',
              'White Moss', 'Birch Green', 'Pennylands', 'Moorside'].map((area) => (
              <li key={area} className="flex items-center gap-2 text-sm">
                <span className="text-yellow-500">&#10003;</span> {area}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Services in Skelmersdale</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">Car Lockout Entry</h3>
              <p className="text-gray-700 text-sm mb-3">
                Keys inside, broken in the lock, or dead fob. Non-destructive entry using
                specialist Lishi tools. All makes.
              </p>
              <Link href="/car-lockout-service" className="text-yellow-600 font-semibold text-sm hover:text-yellow-700">
                Our lockout service &rarr;
              </Link>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">Lost Car Keys</h3>
              <p className="text-gray-700 text-sm mb-3">
                Lost all your keys? We can generate a new key from scratch using EEPROM or OBD
                programming — no original needed in most cases.
              </p>
              <Link href="/lost-car-keys" className="text-yellow-600 font-semibold text-sm hover:text-yellow-700">
                Help with lost car keys &rarr;
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Curious About What a New Key Costs?</h2>
          <p className="text-gray-700 text-sm">
            If you need a replacement key and are wondering what to expect to pay, our guide on{' '}
            <Link href="/advice/car-key-replacement-cost-uk" className="text-yellow-600 underline hover:text-yellow-700">
              car key replacement costs in the UK
            </Link>{' '}
            breaks down real prices by key type — from basic blades to smart keys.
          </p>
        </section>
      </article>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Questions About Our Skelmersdale Service
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
            Need an Auto Locksmith in Skelmersdale?
          </h2>
          <p className="text-gray-800 mb-8">
            Call RTI directly. We know the area, we will navigate to you without fuss, and we
            will be transparent about timing and pricing from the first call.
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
