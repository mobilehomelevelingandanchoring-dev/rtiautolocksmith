import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo/metadata'
import FAQSchema from '@/components/seo/FAQSchema'

export const metadata: Metadata = buildMetadata({
  title: 'RTI Auto Locksmith Wigan | 24/7 Mobile Car Keys',
  description:
    'Locked out or lost your car keys? RTI Auto Locksmith covers Wigan 24/7. Fast response, all car makes. Call now for immediate help.',
  path: '/',
})

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://rtiautolocksmith.com/#website',
  name: 'RTI Auto Locksmith',
  url: 'https://rtiautolocksmith.com',
  description:
    'Mobile auto locksmith covering Wigan, Chorley, Leyland, St Helens and Skelmersdale — 24 hours a day, 365 days a year.',
  publisher: {
    '@type': 'LocalBusiness',
    '@id': 'https://rtiautolocksmith.com/#business',
  },
}

const homepageFAQs = [
  {
    question: 'How quickly can RTI Auto Locksmith reach me in Wigan?',
    answer:
      'In most cases we are on-site within 30 to 45 minutes of your call. Response time can vary slightly depending on traffic and your exact location, but we aim to reach you as quickly as safely possible. We cover Wigan and surrounding towns including Chorley, Leyland, St Helens, and Skelmersdale.',
  },
  {
    question: 'Do you charge a call-out fee?',
    answer:
      'No. RTI Auto Locksmith does not charge a call-out fee. The price you are quoted covers the job. There are no hidden charges added once we arrive. We are transparent about pricing before any work begins.',
  },
  {
    question: 'Can you help if I have lost all copies of my car key?',
    answer:
      'Yes. Even if you have no working key at all, we can usually supply and programme a new key on-site for most UK car makes and models. We use specialist equipment including the Autel IM608 and VVDI2 to cut and programme keys without needing the original.',
  },
  {
    question: 'Are you available on bank holidays and weekends?',
    answer:
      'Yes, absolutely. RTI Auto Locksmith operates 24 hours a day, 7 days a week, 365 days a year — including all UK bank holidays. Car lockouts and key problems do not respect office hours, so neither do we.',
  },
  {
    question: 'Which car makes do you cover?',
    answer:
      'We cover all UK car makes and models, including Ford, Vauxhall, Volkswagen, BMW, Audi, Toyota, Renault, Nissan, and many more. Whether your car has a basic cut key, a transponder key, a remote flip key, or a proximity smart key, we have the tools and knowledge to help.',
  },
  {
    question: 'Is RTI Auto Locksmith fully insured?',
    answer:
      'Yes. RTI Auto Locksmith is fully insured. You can have complete confidence that any work carried out on your vehicle is covered. We take great care to gain entry and cut keys without causing damage to your car.',
  },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <FAQSchema faqs={homepageFAQs} />

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-95" />
        <div className="relative max-w-5xl mx-auto px-4 py-16 sm:py-24 text-center">
          <p className="text-yellow-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Available 24/7 &mdash; No Call-Out Fee
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-6">
            Locked Out of Your Car in Wigan?
            <br />
            <span className="text-yellow-400">RTI Auto Locksmith Is On the Way.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Mobile auto locksmith covering Wigan and surrounding areas around the clock.
            Typically on-site within 30&ndash;45 minutes. All UK car makes supported.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+44XXXXXXXXXX"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              <span>&#128222;</span> Call Now &mdash; We Answer 24/7
            </a>
            <a
              href="https://wa.me/44XXXXXXXXXX"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              <span>&#128172;</span> WhatsApp Us
            </a>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
            <span className="flex items-center gap-2">
              <span className="text-yellow-400">&#9889;</span> 30&ndash;45 Min Response
            </span>
            <span className="flex items-center gap-2">
              <span className="text-yellow-400">&#128274;</span> All Car Makes
            </span>
            <span className="flex items-center gap-2">
              <span className="text-yellow-400">&#10003;</span> No Hidden Fees
            </span>
            <span className="flex items-center gap-2">
              <span className="text-yellow-400">&#9733;</span> 4.9 / 5 Rating (87 reviews)
            </span>
          </div>
        </div>
      </section>

      {/* Direct Answer Block */}
      <section className="bg-yellow-50 border-l-4 border-yellow-400 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
            <strong>RTI Auto Locksmith</strong> is a mobile auto locksmith based in and around
            Wigan, covering a 15-mile radius that includes Chorley, Leyland, St Helens, and
            Skelmersdale. We provide car lockout entry, car key replacement, and key programming
            for all UK makes and models — 24 hours a day, every day of the year. No call-out fee.
            Typically on-site within 30&ndash;45 minutes.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
          What We Do
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Whether you are standing next to a locked car at midnight or you have lost both sets of
          keys and need a replacement cut and programmed, this is what we handle every day.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            title="Car Lockout Service"
            description="Locked keys inside? Broken key in the lock? We gain entry to your car quickly and cleanly, using specialist tools including Lishi 2-in-1 picks — no unnecessary damage."
            href="/car-lockout-service"
            linkText="About our car lockout service"
          />
          <ServiceCard
            title="Car Key Replacement"
            description="Need a replacement key cut and programmed to your car? We supply and programme keys for all makes on-site, including Ford, Vauxhall, VW, BMW, Audi, and many more."
            href="/car-key-replacement"
            linkText="About car key replacement"
          />
          <ServiceCard
            title="Lost Car Keys"
            description="Lost all your keys with no spare? We can cut and programme a brand-new key even without the original — using EEPROM reading or OBD programming depending on the vehicle."
            href="/lost-car-keys"
            linkText="Help with lost car keys"
          />
          <ServiceCard
            title="Car Key Programming"
            description="Key cut but not starting the car? Remote not working? We programme transponder chips, proximity keys, and remotes using VVDI2 and Autel IM608 diagnostic equipment."
            href="/car-key-programming"
            linkText="About key programming"
          />
          <ServiceCard
            title="Emergency Auto Locksmith"
            description="Need someone out to you right now? We prioritise emergency callouts across Wigan and nearby towns. Call and we will give you an honest ETA immediately."
            href="/emergency-auto-locksmith"
            linkText="Our emergency locksmith service"
          />
        </div>
      </section>

      {/* Coverage Area */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
            Covering Wigan and the Surrounding Area
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            We are a truly mobile locksmith — no shopfront, no dispatch centre. When you call, you
            get RTI directly. Our coverage spans roughly 15 miles from Wigan town centre.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { town: 'Wigan', href: '/auto-locksmith-wigan', primary: true },
              { town: 'Chorley', href: '/auto-locksmith-chorley', primary: false },
              { town: 'Leyland', href: '/auto-locksmith-leyland', primary: false },
              { town: 'St Helens', href: '/auto-locksmith-st-helens', primary: false },
              { town: 'Skelmersdale', href: '/auto-locksmith-skelmersdale', primary: false },
            ].map(({ town, href, primary }) => (
              <Link
                key={town}
                href={href}
                className={`block p-4 rounded-lg border text-center font-semibold transition-colors ${
                  primary
                    ? 'bg-yellow-400 border-yellow-400 text-gray-900 hover:bg-yellow-300'
                    : 'bg-white border-gray-200 text-gray-800 hover:border-yellow-400'
                }`}
              >
                Auto Locksmith {town}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Scenario / Real Experience */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          What a Typical Callout Looks Like
        </h2>
        <div className="prose prose-gray max-w-none text-gray-700 space-y-4">
          <p>
            When I get a call at 2am from someone stuck in the car park off Wallgate near Wigan
            North Western station, the first thing I do is ask three quick questions: what car is
            it, roughly where are you parked, and what is the problem? Within 60 seconds I know
            whether I need a Lishi pick for a Ford, a different decoder for a Vauxhall, or a
            diagnostic programmer if the transponder has lost its pairing.
          </p>
          <p>
            Most car lockouts take between 5 and 20 minutes to resolve once I am with the vehicle.
            A Toyota Yaris with a basic barrel lock is straightforward. A newer Volkswagen Golf
            with a high-security lock takes a bit more care. In either case, the goal is always
            the same: get you into your car without leaving a mark on the bodywork or trim.
          </p>
          <p>
            Key replacements are more involved. If you have lost all keys to a Renault Megane, for
            example, I will need to either read the EEPROM chip from the ECU or use OBD
            programming via a dedicated sequence — it depends on the year and security system. The
            Autel IM608 handles most of this automatically, which keeps the job fast and the cost
            lower than going to a main dealer.
          </p>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10">Why Drivers Choose RTI</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '&#9889;',
                title: '30–45 Minute Response',
                body: 'We give you a realistic ETA on the call, not a vague "someone will be with you soon." Most jobs across Wigan are reached within 45 minutes.',
              },
              {
                icon: '&#128274;',
                title: 'Local Specialist',
                body: 'RTI is not a national call centre that farms jobs out to third parties. You speak to the person doing the job, every time.',
              },
              {
                icon: '&#10003;',
                title: 'No Hidden Fees',
                body: 'No call-out charge. No surprise surcharge for night work. The price quoted is the price you pay — nothing added at the roadside.',
              },
              {
                icon: '&#128664;',
                title: 'All UK Car Makes',
                body: 'Ford, Vauxhall, VW, BMW, Audi, Renault, Toyota, Nissan — if it drives on UK roads, we cover it.',
              },
              {
                icon: '&#128737;',
                title: 'Fully Insured',
                body: 'All work is fully insured. We take great care during every job, but if anything did happen, you are covered.',
              },
              {
                icon: '&#128197;',
                title: '24/7/365',
                body: 'Christmas Day, bank holidays, middle of the night — we answer the phone and we come out. No exceptions.',
              },
            ].map(({ icon, title, body }) => (
              <div key={title} className="text-left">
                <div className="text-3xl mb-3" dangerouslySetInnerHTML={{ __html: icon }} />
                <h3 className="text-lg font-bold mb-2 text-yellow-400">{title}</h3>
                <p className="text-gray-300 text-sm">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
          What Customers Say
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <blockquote className="bg-gray-50 rounded-lg p-6 border border-gray-100">
            <p className="text-gray-700 mb-4">
              "Locked out of my Ford Focus at 11pm near Wigan town centre. RTI was there in under
              40 minutes. Got me in without any damage. Brilliant service."
            </p>
            <footer className="text-sm font-semibold text-gray-900">James T. &mdash; Wigan</footer>
          </blockquote>
          <blockquote className="bg-gray-50 rounded-lg p-6 border border-gray-100">
            <p className="text-gray-700 mb-4">
              "Lost both sets of keys to my Vauxhall Astra. RTI came out the same day, cut and
              programmed a new key on my driveway. Wouldn't hesitate to recommend."
            </p>
            <footer className="text-sm font-semibold text-gray-900">Sarah M. &mdash; Wigan</footer>
          </blockquote>
        </div>
      </section>

      {/* Advice Links */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Helpful Guides from RTI
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">
            Not sure what type of key you have or{' '}
            <Link
              href="/advice/car-key-replacement-cost-uk"
              className="text-yellow-600 underline hover:text-yellow-700"
            >
              how much a replacement key costs
            </Link>
            ? Our guides answer the questions we hear every day.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/advice/what-to-do-locked-out-of-car"
              className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-yellow-400 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 mb-1">
                What to Do If You Are Locked Out of Your Car
              </h3>
              <p className="text-sm text-gray-600">Your options, what not to do, and who to call.</p>
            </Link>
            <Link
              href="/advice/car-key-replacement-cost-uk"
              className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-yellow-400 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 mb-1">
                Car Key Replacement Cost in the UK
              </h3>
              <p className="text-sm text-gray-600">Real price ranges and what affects the cost.</p>
            </Link>
            <Link
              href="/advice/can-locksmith-make-key-without-original"
              className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-yellow-400 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 mb-1">
                Can a Locksmith Make a Key Without the Original?
              </h3>
              <p className="text-sm text-gray-600">The honest answer, explained properly.</p>
            </Link>
            <Link
              href="/advice/types-of-car-keys-explained"
              className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-yellow-400 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 mb-1">Types of Car Keys Explained</h3>
              <p className="text-sm text-gray-600">
                From basic blade keys to proximity smart keys.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {homepageFAQs.map((faq) => (
            <div key={faq.question} className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-yellow-400 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Need Help Right Now?
          </h2>
          <p className="text-gray-800 mb-8">
            Call RTI Auto Locksmith directly. We cover{' '}
            <Link href="/auto-locksmith-wigan" className="underline font-semibold">
              Wigan
            </Link>{' '}
            and the surrounding area 24 hours a day. No call-out fee, no holding music, no
            automated systems — just a real person who will be with you as quickly as possible.
          </p>
          <a
            href="tel:+44XXXXXXXXXX"
            className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold text-xl px-10 py-5 rounded-lg transition-colors"
          >
            &#128222; Call RTI Auto Locksmith
          </a>
          <p className="mt-4 text-sm text-gray-700">
            Available 24/7/365 &mdash; including bank holidays
          </p>
        </div>
      </section>
    </>
  )
}

function ServiceCard({
  title,
  description,
  href,
  linkText,
}: {
  title: string
  description: string
  href: string
  linkText: string
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-yellow-400 transition-colors">
      <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <Link href={href} className="text-yellow-600 font-semibold text-sm hover:text-yellow-700">
        {linkText} &rarr;
      </Link>
    </div>
  )
}
