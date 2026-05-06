import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo/metadata'
import { buildLocationSchema } from '@/lib/schema/localBusiness'
import FAQSchema from '@/components/seo/FAQSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = buildMetadata({
  title: 'Auto Locksmith St Helens | RTI Auto Locksmith',
  description:
    'Locked out or lost your keys in St Helens? RTI Auto Locksmith provides fast mobile auto locksmith services around the clock.',
  path: '/auto-locksmith-st-helens',
})

const locationSchema = buildLocationSchema({
  city: 'St Helens',
  slug: 'auto-locksmith-st-helens',
  latitude: 53.4539,
  longitude: -2.7368,
  description:
    'Mobile auto locksmith serving St Helens, Rainford, Newton-le-Willows, Haydock, and surrounding areas 24/7.',
})

const faqs = [
  {
    question: 'How far is RTI from St Helens and how long will it take to arrive?',
    answer:
      'St Helens is approximately 8 to 12 miles from our base depending on the exact location in town. Under normal traffic conditions we can usually reach St Helens town centre — including the Linkway East area and around the Hardshaw Centre — within 35 to 45 minutes. We will confirm your ETA on the call.',
  },
  {
    question: 'Do you cover Whiston Hospital? Staff and visitors get stuck there regularly.',
    answer:
      'Yes. Whiston Hospital, just outside St Helens on the A580 corridor, is within our coverage area. It is a location we visit regularly — staff finishing long shifts, visitors who have been there for hours and come back to a locked car. We treat these as priority callouts and will come to the hospital car parks directly.',
  },
  {
    question: 'I am locked out on Chalon Way near St Helens town centre. Can you help?',
    answer:
      'Yes. Chalon Way and the surrounding retail and commercial areas are well within our range. Call us with your location and we will navigate straight there. Parking for our van on Chalon Way is usually manageable, but if there is a specific bay or entrance that helps, let us know when you call.',
  },
  {
    question: 'Do you cover Newton-le-Willows and Haydock?',
    answer:
      'Yes. Newton-le-Willows, Haydock, and the areas around Haydock Park Racecourse are all within our coverage area. We also cover Rainford, Billinge, and Eccleston to the north and west of St Helens town centre.',
  },
  {
    question: 'Can you programme a key for an older car — say a 2005 Ford Focus?',
    answer:
      'Yes. Older vehicles are often actually easier to programme than newer ones because the security systems are more widely documented. A 2005 Ford Focus uses a standard transponder system that most of our diagnostic equipment handles routinely. We can cut and programme a replacement key on-site without any issues.',
  },
  {
    question: 'What if I need a key for a car that is not starting?',
    answer:
      'This is a key programming job rather than a lockout job. If the car has a key but the transponder chip has lost its pairing with the ECU — which can happen after a flat battery or certain electrical work — we can re-programme the existing key or supply a new one. We use the Autel IM608 for most of these jobs, which covers the vast majority of makes and models seen in the St Helens area.',
  },
  {
    question: 'Is there anything I should not do while waiting for you?',
    answer:
      'Do not try to force entry yourself using a coat hanger, credit card, or anything similar. These methods damage door seals and lock mechanisms and rarely work on modern vehicles. Also avoid calling multiple locksmiths simultaneously — if you have a firm booking with RTI, cancelling another mid-job creates problems for everyone. Just call us, get the ETA, and sit tight.',
  },
]

const breadcrumbs = [
  { name: 'Home', url: 'https://rtiautolocksmith.com' },
  { name: 'Auto Locksmith St Helens', url: 'https://rtiautolocksmith.com/auto-locksmith-st-helens' },
]

export default function StHelensPage() {
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
            <span className="text-gray-200">Auto Locksmith St Helens</span>
          </nav>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-6">
            Mobile Auto Locksmith in St Helens —{' '}
            <span className="text-yellow-400">We Come to You, Round the Clock</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl">
            RTI Auto Locksmith covers St Helens and the surrounding area 24 hours a day. Car
            lockouts, key replacement, and programming for all UK makes. No call-out fee.
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
            <strong>RTI Auto Locksmith covers St Helens</strong> including the town centre, Chalon
            Way, Linkway East and West, Rainford, Newton-le-Willows, Haydock, Billinge, and
            Eccleston. We handle car lockouts and key replacement for all makes — 24/7, no
            call-out fee.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Auto Locksmith Services in St Helens
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              St Helens has a busy mix of retail, healthcare, and industrial activity that creates
              a steady range of lockout and key situations. Hospital workers at Whiston finishing
              a night shift to find keys locked inside a cold car. Shoppers at the Hardshaw Centre
              who have left their Vauxhall Corsa keys in the boot. Drivers passing through on the
              A58 between Wigan and Liverpool who have a key problem mid-journey.
            </p>
            <p>
              We cover all of these. The tools we carry — Lishi 2-in-1 picks, Autel IM608,
              VVDI2 — handle the full range of vehicles commonly seen in St Helens, from older
              Ford Focuses and Vauxhall Astras to newer Nissan Qashqais, Kia Sportages, and
              Hyundai Tuscson models. We also work on BMW and Audi, though these take slightly
              longer due to more complex security systems.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Areas We Cover Around St Helens</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-700 mb-6">
            {['Rainford', 'Newton-le-Willows', 'Haydock', 'Billinge',
              'Eccleston', 'Thatto Heath', 'Sutton', 'Earlestown', 'Bold Heath'].map((area) => (
              <li key={area} className="flex items-center gap-2 text-sm">
                <span className="text-yellow-500">&#10003;</span> {area}
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-600">
            We are also well placed to reach{' '}
            <Link href="/auto-locksmith-wigan" className="text-yellow-600 underline hover:text-yellow-700">
              Wigan
            </Link>{' '}
            and{' '}
            <Link href="/auto-locksmith-skelmersdale" className="text-yellow-600 underline hover:text-yellow-700">
              Skelmersdale
            </Link>{' '}
            from St Helens when needed.
          </p>
        </section>

        <section className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Not Sure What Type of Key You Have?</h2>
          <p className="text-gray-700 text-sm">
            If you are not sure whether you have a basic key, a transponder, or a smart key — and
            why it matters for cost and timing — our guide on{' '}
            <Link href="/advice/types-of-car-keys-explained" className="text-yellow-600 underline hover:text-yellow-700">
              types of car keys explained
            </Link>{' '}
            covers all of this in plain language.
          </p>
        </section>
      </article>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Questions About Our St Helens Service
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
            Need an Auto Locksmith in St Helens?
          </h2>
          <p className="text-gray-800 mb-8">
            Call RTI Auto Locksmith directly. We will give you a clear price and honest arrival
            time — no surprises.
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
