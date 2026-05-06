import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo/metadata'
import { buildLocationSchema } from '@/lib/schema/localBusiness'
import FAQSchema from '@/components/seo/FAQSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = buildMetadata({
  title: 'Auto Locksmith in Chorley | RTI Auto Locksmith',
  description:
    'Mobile auto locksmith serving Chorley and nearby areas. RTI provides fast car lockout and key replacement — call anytime, 24/7.',
  path: '/auto-locksmith-chorley',
})

const locationSchema = buildLocationSchema({
  city: 'Chorley',
  slug: 'auto-locksmith-chorley',
  latitude: 53.6535,
  longitude: -2.6327,
  description:
    'Mobile auto locksmith serving Chorley, Adlington, Coppull, Eccleston, and surrounding areas 24/7. Car lockouts, key replacement, and key programming.',
})

const faqs = [
  {
    question: 'How long will it take you to reach me in Chorley town centre?',
    answer:
      'Chorley town centre — including the Flat Iron area, Union Street, and around Astley Park — is typically a 30 to 40 minute drive from our base. Traffic on the A6 and A49 can add time during rush hour, but we will give you a realistic ETA when you call rather than quoting a figure that sounds good but is rarely accurate.',
  },
  {
    question: 'Do you cover the Buckshaw Village area of Chorley?',
    answer:
      'Yes. Buckshaw Village is well within our coverage area. It is a common callout location — particularly from drivers returning to their cars in the retail and business park areas around the development. The same rates and response times apply as for Chorley town centre.',
  },
  {
    question: 'Can you programme a key for a car bought from a Chorley dealer?',
    answer:
      'Yes, and in most cases we can do it on your driveway for significantly less than going back to the dealer. We use the Autel IM608 and VVDI2 programmers, which cover all the major makes sold by Chorley dealerships — including Ford, Vauxhall, Volkswagen, and Toyota. Give us the make, model, and year and we will confirm before attending.',
  },
  {
    question: 'I am stuck in a retail park car park near Chorley. Can you help?',
    answer:
      'Yes. Retail park lockouts are among the most common jobs we handle. Whether you are at the Pall Mall retail area, the Asda on Blackburn Road, or anywhere else around Chorley, we will come to you. Let us know your location when you call and we will navigate directly to you.',
  },
  {
    question: 'Do you cover Adlington, Coppull, and Whittle-le-Woods?',
    answer:
      'Yes, all three are within our coverage area. We also cover Eccleston, Heath Charnock, and the villages along the A49 corridor south of Chorley. If you are unsure, just call — if we can get to you, we will tell you straight away.',
  },
  {
    question: 'My car broke down on the M61 near Chorley and I am locked out. Can you help?',
    answer:
      'We can come to you, but please make sure you are safe first. If you are on the motorway, call Highways England on 0300 123 5000 to have your car moved to a safe location such as a services area or slip road. Once you are off the live carriageway, call us and we will be there as quickly as possible.',
  },
  {
    question: 'Is there a surcharge for night callouts in Chorley?',
    answer:
      'No. RTI Auto Locksmith does not charge more for callouts in the early hours of the morning or on weekends and bank holidays. The price is based on the job, not the time. We quote you before we attend and that is the price you pay.',
  },
]

const breadcrumbs = [
  { name: 'Home', url: 'https://rtiautolocksmith.com' },
  { name: 'Auto Locksmith Chorley', url: 'https://rtiautolocksmith.com/auto-locksmith-chorley' },
]

export default function ChorleyPage() {
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
            <span className="text-gray-200">Auto Locksmith Chorley</span>
          </nav>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-6">
            Mobile Auto Locksmith in Chorley —{' '}
            <span className="text-yellow-400">Available Any Time You Need Us</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl">
            RTI Auto Locksmith covers Chorley and the surrounding area 24 hours a day. Car
            lockouts, key replacement, and key programming for all UK makes. No call-out fee.
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

      <section className="bg-yellow-50 border-l-4 border-yellow-400 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
            <strong>RTI Auto Locksmith covers Chorley</strong> including the town centre, Astley
            Park, Buckshaw Village, Euxton, Adlington, Coppull, Eccleston, Heath Charnock, and
            Whittle-le-Woods. We handle car lockouts, key replacement, and key programming for all
            makes — call any time, 24/7, with no call-out fee.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Serving Chorley and the M61 Corridor
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              Chorley sits at a busy junction of commuter routes — the A6, A49, and M61 all
              pass through or nearby, and the town itself has a strong mix of retail, residential,
              and industrial activity. That mix means we get a wide variety of callout types here.
            </p>
            <p>
              Retail park lockouts near the Pall Mall area and around the Asda on Blackburn Road
              are common — drivers distracted by shopping, kids, or just a long day leave keys
              inside without noticing. Commuters heading to the station who realise too late that
              their fob battery has died. Workers at the Buckshaw Village business park who park
              early and find themselves stuck when the shift is over.
            </p>
            <p>
              For key programming, we use the Autel IM608 and VVDI2 — tools that cover the vast
              majority of makes driven in this area, including Ford Focus and Fiesta, Vauxhall
              Astra and Corsa, Volkswagen Golf and Polo, Toyota Corolla and Yaris, and the full
              Nissan Qashqai and Juke range. We can programme keys on your driveway or in a car
              park — no towing needed.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Areas We Cover Around Chorley</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-700 mb-6">
            {['Adlington', 'Coppull', 'Eccleston', 'Heath Charnock', 'Whittle-le-Woods',
              'Euxton', 'Buckshaw Village', 'Rivington', 'Horwich', 'Standish'].map((area) => (
              <li key={area} className="flex items-center gap-2 text-sm">
                <span className="text-yellow-500">&#10003;</span> {area}
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-600">
            We are also based near{' '}
            <Link href="/auto-locksmith-wigan" className="text-yellow-600 underline hover:text-yellow-700">
              our base in Wigan
            </Link>
            , which keeps our response times to Chorley consistent.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Services Available in Chorley</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">Car Lockout Entry</h3>
              <p className="text-gray-700 text-sm mb-3">
                Specialist Lishi picks for all makes. Clean, non-destructive entry. Keys inside the
                car, broken in the lock, or dead fob — we cover all scenarios.
              </p>
              <Link href="/car-lockout-service" className="text-yellow-600 font-semibold text-sm hover:text-yellow-700">
                About our lockout service &rarr;
              </Link>
            </div>
            <div className="bg-gray-50 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">Car Key Programming</h3>
              <p className="text-gray-700 text-sm mb-3">
                Key cut but not starting? Remote not syncing? We programme transponder keys and
                remotes on-site using VVDI2 and Autel IM608.
              </p>
              <Link href="/car-key-programming" className="text-yellow-600 font-semibold text-sm hover:text-yellow-700">
                About key programming &rarr;
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Wondering About the Cost?</h2>
          <p className="text-gray-700 text-sm">
            Our guide on the{' '}
            <Link href="/advice/car-key-replacement-cost-uk" className="text-yellow-600 underline hover:text-yellow-700">
              cost of a replacement key
            </Link>{' '}
            explains real UK pricing across all key types — from basic cut keys to smart proximity
            fobs — so you know what to expect before you call.
          </p>
        </section>
      </article>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Questions About Our Chorley Service
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
            Need an Auto Locksmith in Chorley?
          </h2>
          <p className="text-gray-800 mb-8">
            Call RTI directly for a clear quote and honest ETA. No call-out fee. Available 24/7.
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
