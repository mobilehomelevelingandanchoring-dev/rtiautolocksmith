import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo/metadata'
import { buildBreadcrumbSchema } from '@/lib/schema/localBusiness'
import FAQSchema from '@/components/seo/FAQSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = buildMetadata({
  title: 'Locked Out of Your Car? What To Do | RTI Guide',
  description:
    'Locked out of your car and not sure what to do? RTI Auto Locksmith explains your options, costs, and what to expect.',
  path: '/advice/what-to-do-locked-out-of-car',
  type: 'article',
})

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Locked Out of Your Car: What to Do, Who to Call, and What Not to Do',
  description:
    'A practical guide to handling a car lockout in the UK — your options, how to stay safe, what to avoid, and how to get back in your car as quickly as possible.',
  url: 'https://rtiautolocksmith.com/advice/what-to-do-locked-out-of-car',
  datePublished: '2025-01-01',
  dateModified: '2025-05-01',
  author: {
    '@type': 'Organization',
    name: 'RTI Auto Locksmith',
    url: 'https://rtiautolocksmith.com',
  },
  publisher: {
    '@type': 'Organization',
    '@id': 'https://rtiautolocksmith.com/#business',
    name: 'RTI Auto Locksmith',
  },
}

const faqs = [
  {
    question: 'What should I do first if I am locked out of my car?',
    answer:
      'Stay calm and take stock of your situation. Check every door and the boot — one may be unlocked. Look for your spare key. If you have breakdown cover, check whether it includes locksmith cover. If none of these apply, call a reputable local auto locksmith. In Wigan and the surrounding area, RTI Auto Locksmith can usually be with you within 30 to 45 minutes.',
  },
  {
    question: 'Can I break into my own car to get back in?',
    answer:
      'Legally, you can try — it is your car. But practically, it is almost always a bad idea. Modern cars have plastic door surrounds, fragile window seals, and wiring close to door edges. Improvised tools like coat hangers or credit cards rarely work on modern locks and frequently cause expensive damage to seals and trim. The cost of a locksmith is almost always lower than repair bills from a failed DIY entry attempt.',
  },
  {
    question: 'How long does it take for a locksmith to open a car?',
    answer:
      'Once a locksmith is with the vehicle, most car lockout jobs take between 5 and 25 minutes. A standard Ford Fiesta or Vauxhall Corsa is typically 5 to 10 minutes. High-security locks on BMW, Audi, or newer VW models can take 15 to 25 minutes. The travel time from when you call to arrival depends on your location — in Wigan, RTI is usually on-site within 30 to 45 minutes.',
  },
  {
    question: 'Is it worth calling the police if I am locked out?',
    answer:
      'The police will not help with a standard car lockout — it is not an emergency for policing purposes. The exception is if a child or vulnerable person is locked inside in dangerous conditions (extreme heat or cold, distress). In those situations, call 999 immediately. For everything else, call a locksmith.',
  },
  {
    question: 'Will my car insurance cover a lockout?',
    answer:
      'Some comprehensive car insurance policies include emergency lockout cover, or you may have separate breakdown cover that includes a locksmith. Check your policy. If you are covered, you will need an invoice from the locksmith to make a claim. RTI provides a full invoice. However, if you need access urgently and cannot reach your insurer quickly, call a locksmith first — your insurer can reimburse afterwards.',
  },
  {
    question: 'What if I am stuck in an unsafe location at night?',
    answer:
      'Your safety comes first. If the location feels unsafe — isolated, poorly lit, or you are being approached — move away from the car to somewhere safer and better lit. Call RTI (or 999 if you feel in immediate danger) and give them your new location. We can meet you at a safer nearby point. Do not feel you have to stay with the car at all costs.',
  },
]

const breadcrumbs = [
  { name: 'Home', url: 'https://rtiautolocksmith.com' },
  { name: 'Advice', url: 'https://rtiautolocksmith.com/advice/what-to-do-locked-out-of-car' },
  { name: 'Locked Out of Your Car?', url: 'https://rtiautolocksmith.com/advice/what-to-do-locked-out-of-car' },
]

export default function LockedOutAdvicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbs} />

      <section className="bg-gray-900 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-yellow-400">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">Locked Out of Your Car? What To Do</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
            Locked Out of Your Car:{' '}
            <span className="text-yellow-400">What to Do, Who to Call, and What to Avoid</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Being locked out of your car is stressful and can happen to anyone. This guide
            explains your options clearly — so you can make a calm, informed decision rather than
            an expensive, panicked one.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 border-l-4 border-yellow-400 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
            <strong>If you are locked out of your car right now</strong>: check all doors and the
            boot, check for a spare key, and call a local auto locksmith. Do not try to force
            entry — it almost always causes damage that costs more than a locksmith. In Wigan and
            surrounding areas, RTI Auto Locksmith can typically be with you in 30&ndash;45
            minutes, any time of day or night.
          </p>
          <div className="mt-4">
            <a
              href="tel:+44XXXXXXXXXX"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-6 py-3 rounded-lg transition-colors"
            >
              &#128222; Call RTI Now
            </a>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Step 1: Do Not Panic — Take Stock First
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              The first thing stress does in a lockout is make you act before you think. Take
              a breath and run through the basics before reaching for your phone or anything else.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Try every door handle, including the rear passenger doors and the boot.</li>
              <li>Check whether any window is open far enough to reach the interior handle.</li>
              <li>Look for the spare key — at home, in a bag, with a family member nearby.</li>
              <li>Check if anyone else has a copy of your key.</li>
            </ul>
            <p>
              If none of those options apply, you have a genuine lockout and you need a locksmith.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Step 2: Call a Reputable Local Locksmith
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              The locksmith industry in the UK is unregulated, which means anyone can set up as
              one. The safest approach is to use a local locksmith you can verify — check Google
              reviews, look at their website, and make sure they quote a price before attending
              rather than on arrival.
            </p>
            <p>
              Red flags to watch for: locksmiths advertising nationally with a local number,
              quotes that seem low until they arrive and add &quot;programming fees&quot; or
              &quot;security verification charges&quot;, and any locksmith who refuses to give a
              ballpark price over the phone.
            </p>
            <p>
              RTI Auto Locksmith operates locally across Wigan and surrounding areas. When you
              call, you get the person doing the job — not a dispatcher. We quote clearly before
              attending and that is the price you pay.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Not to Do When Locked Out
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              There is a lot of DIY lockout advice online that was written for cars from the
              1980s. None of it applies to modern vehicles and most of it causes damage. Avoid
              all of the following:
            </p>
            <div className="space-y-3">
              {[
                {
                  label: 'Coat hangers and wire',
                  detail: 'Modern door frames do not leave enough gap, and trying to create one will damage weatherstripping and trim. Effective on cars from before the 1990s. Useless and damaging on anything modern.',
                },
                {
                  label: 'Credit cards and plastic shims',
                  detail: 'This technique works on very old spring-latch locks. Modern cars use dead-bolt style mechanisms inside the door. A credit card will not move them, and you will likely crack the card into the door seal.',
                },
                {
                  label: 'Breaking a window',
                  detail: 'Tempered glass is expensive to replace. Laminated glass on some modern cars requires professional replacement. Unless there is a genuine emergency involving a person in danger inside, breaking a window will cost you far more than a locksmith.',
                },
                {
                  label: 'Recovery trucks',
                  detail: 'Calling breakdown recovery to tow your locked car to a dealer is expensive, slow (often 60 to 90 minutes or more), and the dealer will charge a premium for the key service anyway. A mobile locksmith on-site is almost always cheaper and faster.',
                },
              ].map(({ label, detail }) => (
                <div key={label} className="bg-red-50 border border-red-100 rounded-lg p-4">
                  <h3 className="font-semibold text-red-800 mb-1">&#10007; {label}</h3>
                  <p className="text-gray-700 text-sm">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Keeping Yourself Safe While You Wait
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              Most lockouts are straightforward inconveniences. But if yours happens at night, in
              an isolated area, or somewhere you feel uncomfortable, your safety takes priority
              over the car.
            </p>
            <p>
              Move to a well-lit, public area if necessary. A nearby petrol station, a 24-hour
              supermarket car park, or even a well-lit street corner is fine — let the locksmith
              know your new location when you call. They will update their navigation.
            </p>
            <p>
              If someone approaches you and you feel unsafe, call 999. Your car is not worth your
              safety.
            </p>
          </div>
        </section>

        <section className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Other Useful Guides from RTI</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/advice/car-key-replacement-cost-uk" className="text-yellow-600 hover:text-yellow-700 font-medium">
                Car key replacement costs in the UK &rarr;
              </Link>{' '}
              <span className="text-gray-600">— what you should expect to pay</span>
            </li>
            <li>
              <Link href="/advice/can-locksmith-make-key-without-original" className="text-yellow-600 hover:text-yellow-700 font-medium">
                Can a locksmith make a key without the original? &rarr;
              </Link>
            </li>
            <li>
              <Link href="/car-lockout-service" className="text-yellow-600 hover:text-yellow-700 font-medium">
                Our car lockout service &rarr;
              </Link>{' '}
              <span className="text-gray-600">— how RTI handles lockout entry</span>
            </li>
            <li>
              <Link href="/auto-locksmith-wigan" className="text-yellow-600 hover:text-yellow-700 font-medium">
                Our Wigan coverage area &rarr;
              </Link>{' '}
              <span className="text-gray-600">— areas and response times</span>
            </li>
          </ul>
        </section>

      </article>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Locked Out Questions Answered
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
            Locked Out Near Wigan? Call RTI Now.
          </h2>
          <p className="text-gray-800 mb-8">
            We will be with you within 30&ndash;45 minutes in most cases. No call-out fee.
            No hold music. Just a real person ready to help.
          </p>
          <a
            href="tel:+44XXXXXXXXXX"
            className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold text-xl px-10 py-5 rounded-lg transition-colors"
          >
            &#128222; Call RTI Auto Locksmith
          </a>
          <p className="mt-4 text-sm text-gray-700">Available 24/7/365</p>
        </div>
      </section>
    </>
  )
}
