import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo/metadata'
import { buildServiceSchema } from '@/lib/schema/localBusiness'
import FAQSchema from '@/components/seo/FAQSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = buildMetadata({
  title: 'Emergency Auto Locksmith Wigan | RTI',
  description:
    'Need an emergency locksmith near Wigan? RTI responds fast, day or night. All car makes covered. Don\'t wait — call RTI now.',
  path: '/emergency-auto-locksmith',
})

const serviceSchema = buildServiceSchema({
  name: 'Emergency Auto Locksmith',
  description:
    '24/7 emergency auto locksmith covering Wigan and surrounding areas. Fast response for car lockouts and urgent key situations. All makes covered.',
  url: 'https://rtiautolocksmith.com/emergency-auto-locksmith',
})

const faqs = [
  {
    question: 'What counts as an emergency for a locksmith?',
    answer:
      'Any situation where you cannot access your vehicle and waiting is not a safe or practical option. This includes being locked out in an unsafe location, a child or pet inside a locked car, needing to drive urgently (medical, work, family), or being stranded in bad weather. We treat all lockout calls with urgency — you do not need to justify why it is an emergency.',
  },
  {
    question: 'How fast can you realistically get to me in an emergency?',
    answer:
      'Across the Wigan area, typically within 30 to 45 minutes. For the outermost parts of our coverage — parts of Chorley, Leyland, and Skelmersdale — allow 40 to 55 minutes. We will give you a genuine ETA when you call, not a quote designed to keep you from calling someone else. If we cannot reach you in time, we will tell you.',
  },
  {
    question: 'Is there a child or pet locked in my car — should I call you or 999?',
    answer:
      'Call 999 first. Always. In warm weather especially, a child or animal inside a locked car can be in danger within minutes. Emergency services are equipped to break glass safely and quickly when life is at risk. Once the situation is safe, call RTI if you need help with locks or replacement keys.',
  },
  {
    question: 'Do you charge more for emergency callouts at night?',
    answer:
      'No. RTI Auto Locksmith does not apply unsociable hours surcharges. A 3am lockout in Hindley costs the same as a 3pm lockout in Wigan town centre. The price is based on the type of job, not the time you call. We will quote clearly before attending.',
  },
  {
    question: 'What should I do while waiting for the emergency locksmith?',
    answer:
      'If you are in a safe, well-lit location, stay with your vehicle. Have your vehicle registration, make, and model to hand — it helps us prepare the right tools before we arrive. If you are in a location that feels unsafe, move to a nearby public area and let us know. Do not attempt to force entry — it almost always causes damage that costs more to repair than the locksmith callout.',
  },
  {
    question: 'Can RTI help if my key breaks inside the lock?',
    answer:
      'Yes. A broken key inside a lock barrel is a fairly common emergency. Depending on how far in the key has broken and whether the barrel has seized, we can usually extract the broken piece using specialist extraction tools and then gain entry. We will assess whether the barrel needs replacing once the key is removed.',
  },
]

const breadcrumbs = [
  { name: 'Home', url: 'https://rtiautolocksmith.com' },
  { name: 'Emergency Auto Locksmith', url: 'https://rtiautolocksmith.com/emergency-auto-locksmith' },
]

export default function EmergencyAutoLocksmithPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbs} />

      <section className="bg-gray-900 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-yellow-400">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">Emergency Auto Locksmith</span>
          </nav>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-6">
            Emergency Auto Locksmith Near Wigan —{' '}
            <span className="text-yellow-400">Call Now. We Answer.</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl">
            RTI Auto Locksmith provides 24/7 emergency coverage across Wigan and the surrounding
            area. When you call, you speak to the person coming out to you. No automated systems.
            No queues. Just a fast, honest response.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+44XXXXXXXXXX"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold text-xl px-8 py-5 rounded-lg transition-colors"
            >
              &#128222; Call RTI Right Now
            </a>
            <a
              href="https://wa.me/44XXXXXXXXXX"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              &#128172; WhatsApp
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-300">
            <span>&#9889; Typically 30&ndash;45 min response</span>
            <span>&#10003; No call-out fee</span>
            <span>&#128664; All car makes</span>
            <span>&#128197; 24/7/365</span>
          </div>
        </div>
      </section>

      <section className="bg-yellow-50 border-l-4 border-yellow-400 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
            <strong>For an emergency auto locksmith in or around Wigan</strong>, call RTI
            directly. We cover Wigan, Chorley, Leyland, St Helens, and Skelmersdale around the
            clock. We provide a realistic ETA immediately, charge no call-out fee, and carry the
            tools to handle any car lockout or lost key situation on-site.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Makes RTI the Right Call in an Emergency
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              In an emergency, the last thing you need is to be put on hold, transferred, or
              given a vague arrival window. When you call RTI, you speak directly to the locksmith
              attending your job. That means you get an accurate ETA based on where we actually
              are, not where a call centre hopes we are.
            </p>
            <p>
              We keep the van stocked with tools for the most common emergency scenarios: a full
              set of Lishi picks for all major UK makes, the air-wedge entry kit, an Autel IM608
              for on-site key programming, and a range of key blanks for Ford, Vauxhall,
              Volkswagen, Toyota, Renault, and BMW — the makes we see most often across Wigan and
              the surrounding area.
            </p>
            <p>
              An emergency callout from the Scholes area of Wigan at 1am on a bank holiday will
              be handled with exactly the same tools and the same approach as a Monday afternoon
              job in Standish. There are no tiers of service, no priority lists, and no uplifted
              rates for antisocial hours.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Common Emergency Locksmith Scenarios We Handle
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Keys Locked Inside the Car',
                desc: 'The most common emergency. We gain entry using Lishi picks or air-wedge tools. No damage. All makes covered.',
              },
              {
                title: 'Key Fob Battery Died',
                desc: 'Flat fob battery means the remote and sometimes the physical barrel will not operate. We can gain entry and often supply a replacement battery on the spot.',
              },
              {
                title: 'Broken Key in the Lock',
                desc: 'A key that snaps inside the barrel is an emergency. We extract the broken section and gain entry without replacing the lock in most cases.',
              },
              {
                title: 'Lost All Keys Urgently',
                desc: 'No keys at all and need access immediately. We gain entry and can programme a new key on-site. See our emergency response for the full process.',
              },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-gray-50 rounded-lg p-5 border-l-4 border-yellow-400">
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-700 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">After the Emergency</h2>
          <p className="text-gray-700 text-sm mb-4">
            Once we have you back in your car and the immediate situation is resolved, it is worth
            taking a moment to consider next steps. If you only have one working key left, a spare
            programmed now — while we are with the car — is significantly cheaper than an
            emergency replacement later. Read about our{' '}
            <Link href="/car-lockout-service" className="text-yellow-600 underline hover:text-yellow-700">
              car lockout service
            </Link>{' '}
            or our guide on{' '}
            <Link href="/advice/what-to-do-locked-out-of-car" className="text-yellow-600 underline hover:text-yellow-700">
              what to do in a lockout
            </Link>{' '}
            for further detail.
          </p>
          <p className="text-sm text-gray-600">
            All emergency services available across{' '}
            <Link href="/auto-locksmith-wigan" className="text-yellow-600 underline hover:text-yellow-700">
              our Wigan response area
            </Link>
            .
          </p>
        </section>
      </article>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Emergency Locksmith Questions
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

      <section className="bg-red-600 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Need Help Right Now?
          </h2>
          <p className="text-red-100 mb-8">
            Do not wait. Call RTI directly. We answer immediately, give you an honest ETA,
            and set off straight away. Covering Wigan and surrounding areas — 24/7/365.
          </p>
          <a
            href="tel:+44XXXXXXXXXX"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-red-700 font-bold text-xl px-10 py-5 rounded-lg transition-colors"
          >
            &#128222; Call RTI Now &mdash; We Answer 24/7
          </a>
          <p className="mt-4 text-sm text-red-200">No call-out fee &mdash; honest pricing upfront</p>
        </div>
      </section>
    </>
  )
}
