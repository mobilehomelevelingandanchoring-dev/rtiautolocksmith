import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo/metadata'
import { buildBreadcrumbSchema } from '@/lib/schema/localBusiness'
import FAQSchema from '@/components/seo/FAQSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = buildMetadata({
  title: 'Car Key Replacement Cost UK 2025 | RTI Guide',
  description:
    'How much does car key replacement cost in the UK? RTI explains real prices, what affects cost, and how to avoid being overcharged.',
  path: '/advice/car-key-replacement-cost-uk',
  type: 'article',
})

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Car Key Replacement Cost UK: What You Should Expect to Pay in 2025',
  description:
    'A detailed guide to car key replacement costs in the UK, covering key types, programming costs, dealer vs locksmith pricing, and what affects the final price.',
  url: 'https://rtiautolocksmith.com/advice/car-key-replacement-cost-uk',
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
    question: 'How much does a basic car key replacement cost in the UK?',
    answer:
      'A basic cut key (no chip, no remote) typically costs between £15 and £50 depending on the car make and whether the blank is readily available. These are less common on modern vehicles but are still found on older cars and some commercial vehicles. A locksmith can usually supply and cut these on-site for significantly less than a main dealer.',
  },
  {
    question: 'How much does a transponder key replacement cost?',
    answer:
      'A replacement transponder key — which includes an immobiliser chip that must be programmed to the car — typically costs between £80 and £250 depending on the make and model. The total includes the blank, the cutting, and the programming. Ford, Vauxhall, and Renault keys tend to be at the lower end. BMW, Audi, and Mercedes keys sit at the higher end due to more complex security systems.',
  },
  {
    question: 'How much does a replacement key fob or remote cost?',
    answer:
      'A replacement remote flip key or keyfob (with a transponder and remote locking function) typically costs between £100 and £350. The wide range reflects differences between manufacturers. A Vauxhall Corsa remote key will cost considerably less than a full proximity key for a BMW 5 Series. The programming requirement — which determines how long the job takes — also affects the price.',
  },
  {
    question: 'How much does a smart key or proximity key replacement cost?',
    answer:
      'Smart keys (keyless entry and push-button start) are the most expensive key type to replace. Expect to pay between £200 and £600 depending on the manufacturer. Some luxury vehicles (Range Rover, Mercedes S-Class, high-spec Audi) can cost more. A locksmith with the right equipment — such as the Autel IM608 — can often do this job on-site at a significantly lower cost than a franchised dealer.',
  },
  {
    question: 'Is a locksmith cheaper than a dealer for car key replacement?',
    answer:
      'Almost always, yes. Main dealers carry high overheads and often outsource the technical programming work themselves. A mobile locksmith has lower costs and passes that saving on to you. For a typical transponder key replacement on a Ford or Vauxhall, a dealer might charge £200 to £350. A mobile locksmith is likely to do the same job — on your driveway — for £100 to £200. The saving on more complex keys is even greater.',
  },
  {
    question: 'Why does car key replacement cost vary so much?',
    answer:
      'Several factors affect price: the type of key (basic, transponder, remote, smart), the car make and model (parts cost more for premium brands), whether the original key is present (coding from scratch takes longer), and whether EEPROM reading is required (accessing the car\'s ECU data directly). A locksmith will need to assess the specific job before giving a firm quote.',
  },
]

const breadcrumbs = [
  { name: 'Home', url: 'https://rtiautolocksmith.com' },
  { name: 'Advice', url: 'https://rtiautolocksmith.com/advice' },
  {
    name: 'Car Key Replacement Cost UK',
    url: 'https://rtiautolocksmith.com/advice/car-key-replacement-cost-uk',
  },
]

const priceTable = [
  { type: 'Basic cut key (no chip)', range: '£15 – £50', notes: 'Older cars, some commercial vehicles' },
  { type: 'Transponder key', range: '£80 – £250', notes: 'Most cars 2000 onwards — chip + cut + programme' },
  { type: 'Remote flip key / keyfob', range: '£100 – £350', notes: 'Cut + transponder + remote function' },
  { type: 'Smart / proximity key', range: '£200 – £600', notes: 'Keyless entry, push-button start' },
  { type: 'Dealer replacement (for comparison)', range: '£200 – £800+', notes: 'All types — significant markup typical' },
]

export default function CarKeyReplacementCostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-yellow-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/advice/what-to-do-locked-out-of-car" className="hover:text-yellow-400">Advice</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">Car Key Replacement Cost UK</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
            Car Key Replacement Cost in the UK:{' '}
            <span className="text-yellow-400">What You Should Expect to Pay in 2025</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Confused by wildly different quotes? This guide explains what car key replacement
            actually costs in the UK, what drives the price up or down, and how to avoid being
            overcharged.
          </p>
        </div>
      </section>

      {/* Direct Answer Block */}
      <section className="bg-yellow-50 border-l-4 border-yellow-400 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
            <strong>Car key replacement in the UK costs between £50 and £600</strong>, depending
            on the key type and car make. A basic transponder key for a Ford or Vauxhall is
            typically £80&ndash;£200 from a mobile locksmith. A smart key for a BMW or Audi can
            reach £300&ndash;£600. Main dealers typically charge 40&ndash;60% more for the same
            work. A mobile locksmith will usually complete the job on your driveway for significantly
            less.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">

        {/* Price Table */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            UK Car Key Replacement Price Guide (2025)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left p-3 font-semibold">Key Type</th>
                  <th className="text-left p-3 font-semibold">Typical Price (Locksmith)</th>
                  <th className="text-left p-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {priceTable.map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-3 font-medium text-gray-900 border-b border-gray-200">{row.type}</td>
                    <td className="p-3 text-yellow-700 font-semibold border-b border-gray-200">{row.range}</td>
                    <td className="p-3 text-gray-600 border-b border-gray-200">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Prices are indicative for mobile locksmith services in the North West of England. Final
            price depends on vehicle, key type, and whether the original key is present.
          </p>
        </section>

        {/* What affects cost */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Affects the Cost of a Replacement Car Key?
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              The single biggest factor is the key type. A basic blade key with no electronics is
              cheap to cut and requires no programming. A proximity smart key — the kind used in
              push-button start cars — is expensive because the blank costs more, the programming
              takes longer, and the security system is harder to access.
            </p>
            <p>
              The car make matters too. Ford, Vauxhall, and Renault keys use relatively
              well-documented systems that most good locksmiths can programme efficiently. BMW,
              Audi, Mercedes, and Land Rover use proprietary systems that require specific
              diagnostic tools and, in some cases, direct access to the car's ECU data. That
              additional complexity is reflected in the cost.
            </p>
            <p>
              Whether you have an original key present also makes a difference. If you have a
              working key, we can programme a spare alongside it — this is typically the fastest
              and cheapest route. If you have no keys at all (a full lost key situation), we need
              to access the vehicle's EEPROM data or use a dedicated OBD sequence to generate a
              new key from scratch. This takes longer and costs more.
            </p>
            <p>
              For context: on a Renault Megane where all keys are lost, I would need to read the
              UCH module — the body control unit — to extract the PIN code before programming can
              start. That involves additional steps and time compared to a straightforward
              spare-key cut. The Autel IM608 automates a lot of this process, but there is still
              more work involved.
            </p>
          </div>
        </section>

        {/* Locksmith vs dealer */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Locksmith vs Dealer: Is There a Real Difference in Quality?
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              The short answer is no — not for the key itself. A properly programmed key from a
              qualified mobile locksmith works identically to one from a main dealer. In many
              cases, the locksmith is using the same blank key (from the same supply chain) and
              the same programming protocols.
            </p>
            <p>
              What you pay for at a dealer is their brand name and the infrastructure around it.
              You wait in a waiting room, there is a service manager involved, and the job gets
              passed to someone in the back — who might be a contracted locksmith anyway. None of
              that adds value to the key in your hand.
            </p>
            <p>
              A mobile locksmith comes to your driveway, does the job in front of you, and you pay
              for the work — not the overhead. For our{' '}
              <Link href="/car-key-replacement" className="text-yellow-600 underline hover:text-yellow-700">
                car key replacement service
              </Link>{' '}
              across Wigan, we always quote before starting and the price does not change once we
              are there.
            </p>
          </div>
        </section>

        {/* What to watch out for */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How to Avoid Being Overcharged for a Replacement Key
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              The most common way people get overcharged is by searching online in a panic, calling
              the first number they see (often a national intermediary), and getting a low initial
              quote that rises sharply once the locksmith arrives. "Programming" fees, "security
              verification" fees, and various other add-ons appear at the roadside.
            </p>
            <p>
              A reputable locksmith will give you a firm quote over the phone once you tell them
              the make, model, year of the car, and the key type you need. If they refuse to give
              a price before arriving, that is a red flag.
            </p>
            <p>
              RTI Auto Locksmith provides a clear quote before we attend. No surprises. If the job
              turns out to be more complex than described — which sometimes happens with older
              vehicles where the EEPROM data is harder to access — we will tell you before we
              start and explain why.
            </p>
          </div>
        </section>

        {/* Advice on what next */}
        <section className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Related Guides from RTI</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/advice/can-locksmith-make-key-without-original" className="text-yellow-600 hover:text-yellow-700 font-medium">
                Can a locksmith make a key without the original? &rarr;
              </Link>
            </li>
            <li>
              <Link href="/advice/types-of-car-keys-explained" className="text-yellow-600 hover:text-yellow-700 font-medium">
                Types of car keys explained &rarr;
              </Link>
            </li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            If you need a replacement key now, call RTI or read about our{' '}
            <Link href="/car-key-replacement" className="text-yellow-600 underline hover:text-yellow-700">
              car key replacement service
            </Link>{' '}
            and our{' '}
            <Link href="/car-key-programming" className="text-yellow-600 underline hover:text-yellow-700">
              key programming service
            </Link>
            .
          </p>
        </section>

      </article>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Car Key Cost Questions Answered
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
            Need a Replacement Key Near Wigan?
          </h2>
          <p className="text-gray-800 mb-8">
            Call RTI Auto Locksmith for a clear, honest quote. We cover{' '}
            <Link href="/auto-locksmith-wigan" className="underline font-semibold">
              Wigan
            </Link>{' '}
            and surrounding areas. Same-day service available. No hidden fees.
          </p>
          <a
            href="tel:+447309903243"
            className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold text-xl px-10 py-5 rounded-lg transition-colors"
          >
            &#128222; Call RTI for a Quote
          </a>
          <p className="mt-4 text-sm text-gray-700">
            Available 24/7 &mdash; including bank holidays
          </p>
        </div>
      </section>
    </>
  )
}
