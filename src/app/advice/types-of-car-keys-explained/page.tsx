import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo/metadata'
import FAQSchema from '@/components/seo/FAQSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = buildMetadata({
  title: 'Types of Car Keys Explained | RTI Guide',
  description:
    'Not sure what type of car key you have? RTI explains every key type — from basic blades to proximity smart keys — in plain English.',
  path: '/advice/types-of-car-keys-explained',
  type: 'article',
})

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Types of Car Keys Explained: From Basic Blades to Smart Keys',
  description:
    'A plain-English guide to every type of car key used in UK vehicles — basic cut keys, transponder keys, remote flip keys, proximity smart keys, and keycards.',
  url: 'https://rtiautolocksmith.com/advice/types-of-car-keys-explained',
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
    question: 'What is a transponder key?',
    answer:
      'A transponder key is a car key with a small microchip embedded in the plastic head. When you insert the key and turn it, the car\'s immobiliser system sends a radio signal to the chip. The chip responds with a unique code. If the code matches what the immobiliser expects, the engine is allowed to start. If not, the immobiliser cuts fuel or ignition and the engine will not run. Transponder keys have been standard on UK cars since the mid to late 1990s.',
  },
  {
    question: 'What is the difference between a remote key and a smart key?',
    answer:
      'A remote key (often a flip key) has a physical blade for the ignition and separate remote buttons for locking and unlocking. You still insert it to start the car. A smart key (proximity key) has no blade you insert — instead, it stays in your pocket or bag. The car detects the key\'s presence via radio frequency and allows entry and start via a button. Smart keys are more complex and significantly more expensive to replace.',
  },
  {
    question: 'How do I know what type of key my car has?',
    answer:
      'The simplest way is to look at the key itself. If it is a plain metal key with no plastic head or buttons, it is a basic cut key. If it has a plastic head but no buttons, it is likely a transponder key. If it has buttons on the head or a fold-out blade, it is a remote or flip key. If you start your car with a push button and never insert a key, you have a smart key or keycard system. If unsure, your vehicle handbook will confirm the key type.',
  },
  {
    question: 'Why does the type of key affect the replacement cost?',
    answer:
      'Each key type requires different components and different amounts of work to replace. A basic cut key needs only a blank and a key cutting machine — a few minutes of work. A transponder key needs a blank with the correct chip type, plus programming to the car\'s immobiliser. A smart key contains a transponder, a remote transmitter, and sometimes a battery-backed processor — the blank is more expensive and the programming is more complex. The more technology inside the key, the more it costs to replace.',
  },
  {
    question: 'Can any locksmith replace a smart key?',
    answer:
      'Not all locksmiths carry the equipment needed for smart key programming. Smart key replacement requires a professional programmer like the Autel IM608 that can access the car\'s body control system and write the key\'s proximity pairing data. RTI Auto Locksmith carries this equipment and handles smart key replacement for most UK makes including BMW, Audi, Volkswagen, Mercedes, Renault, and Toyota.',
  },
  {
    question: 'What is a Renault keycard?',
    answer:
      'The Renault keycard is a flat, credit-card-sized device used in Renault Megane (from 2002), Laguna, Vel Satis, and some Espace models. It is inserted into a slot on the dashboard rather than a traditional ignition barrel. The card contains a transponder chip and a remote function. Keycard replacement is one of the more complex jobs in the locksmith trade — older Megane and Laguna systems require EEPROM reading or PIN extraction to programme a replacement. RTI handles these.',
  },
]

const breadcrumbs = [
  { name: 'Home', url: 'https://rtiautolocksmith.com' },
  { name: 'Advice', url: 'https://rtiautolocksmith.com/advice/types-of-car-keys-explained' },
  { name: 'Types of Car Keys Explained', url: 'https://rtiautolocksmith.com/advice/types-of-car-keys-explained' },
]

const keyTypes = [
  {
    name: 'Basic Cut Key',
    era: 'Pre-1995 vehicles / some commercial vehicles',
    description:
      'A plain metal key with no electronics. Cut to a specific profile that matches the lock barrels in the door and ignition. No immobiliser chip, no remote function. The simplest and cheapest key type to replace.',
    examples: 'Older Ford Escort, classic Mini, many pre-1995 Vauxhalls, some commercial vehicle ignitions.',
    replaceTime: '5–15 minutes',
    complexity: 'Simple',
    colour: 'bg-green-50 border-green-200',
    badge: 'bg-green-100 text-green-800',
  },
  {
    name: 'Transponder Key',
    era: 'Mid-1990s to present (very common)',
    description:
      'Looks like a basic key but has a small transponder chip embedded in the plastic head — usually not visible. The chip communicates with the car\'s immobiliser. Without the correct chip signal, the car will not start even if the blade turns perfectly. Must be both cut to profile and programmed to the specific car.',
    examples: 'Ford Focus (pre-2011 generation), Vauxhall Astra G/H, Toyota Yaris (first gen), Nissan Micra K12, Renault Clio II.',
    replaceTime: '30–60 minutes',
    complexity: 'Moderate',
    colour: 'bg-blue-50 border-blue-200',
    badge: 'bg-blue-100 text-blue-800',
  },
  {
    name: 'Remote Key (with separate fob)',
    era: 'Late 1990s to mid-2000s',
    description:
      'A transponder key where the remote locking function is handled by a separate fob on the keyring rather than being built into the key head. The key itself handles the ignition; the fob handles locking and unlocking remotely. The two can be lost or damaged independently.',
    examples: 'Many Ford and Vauxhall models from this era where the remote is a separate item on the ring.',
    replaceTime: '30–60 minutes (key) + 15–30 minutes (fob sync)',
    complexity: 'Moderate',
    colour: 'bg-blue-50 border-blue-200',
    badge: 'bg-blue-100 text-blue-800',
  },
  {
    name: 'Remote Flip Key (Folding Key)',
    era: '2000s to present',
    description:
      'A key where the blade folds into the handle (like a penknife) when not in use. The handle contains the remote locking buttons and a transponder chip. Pressing a button extends the blade. The remote and transponder are integrated into one unit. Very common across VW group, BMW, Renault, and many others.',
    examples: 'VW Golf (from Mk5 onwards), Audi A3/A4, BMW 3 Series (E90 era), Renault Megane III, Vauxhall Insignia.',
    replaceTime: '45–75 minutes',
    complexity: 'Moderate–Complex',
    colour: 'bg-yellow-50 border-yellow-200',
    badge: 'bg-yellow-100 text-yellow-800',
  },
  {
    name: 'Smart Key / Proximity Key',
    era: '2010s to present',
    description:
      'No blade inserted into an ignition. The key stays in your pocket — the car detects its proximity via low-frequency radio. Doors unlock as you approach and lock as you walk away. Starting the car uses a push button on the dashboard. The key contains a transponder, a remote transmitter, and sometimes an emergency blade hidden inside for manual lock use.',
    examples: 'BMW 1/3/5 Series (from 2012+), Audi Q3/Q5 (keyless go option), VW Tiguan, Ford Kuga (newer), Toyota RAV4 hybrid, Nissan Qashqai (2021+).',
    replaceTime: '60–120 minutes',
    complexity: 'Complex',
    colour: 'bg-orange-50 border-orange-200',
    badge: 'bg-orange-100 text-orange-800',
  },
  {
    name: 'Keycard (Renault)',
    era: '2002–2015 (Megane/Laguna)',
    description:
      'A flat, credit-card-sized device unique to Renault. Inserted into a slot on the dashboard rather than a traditional ignition barrel. Contains a transponder chip and remote function. Famously difficult to replace — older Megane (2002–2008) and Laguna systems require extracting a PIN from the UCH (body control unit) before any new card can be programmed.',
    examples: 'Renault Megane Mk2 (2002–2008), Laguna Mk2, Vel Satis, Espace IV.',
    replaceTime: '60–120 minutes',
    complexity: 'Complex',
    colour: 'bg-purple-50 border-purple-200',
    badge: 'bg-purple-100 text-purple-800',
  },
]

export default function TypesOfCarKeysPage() {
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
            <span className="text-gray-200">Types of Car Keys Explained</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
            Types of Car Keys Explained —{' '}
            <span className="text-yellow-400">From Basic Blades to Smart Keys</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Not sure what type of key your car uses — or why it matters for replacement cost
            and timing? This guide covers every key type found in UK vehicles, in plain English.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 border-l-4 border-yellow-400 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
            <strong>There are six main types of car key</strong> used in UK vehicles: basic cut
            keys (no chip), transponder keys (chip in the head), remote keys (separate fob),
            flip/folding remote keys, smart proximity keys, and Renault keycards. The type of
            key your car uses affects how long replacement takes and how much it costs. This guide
            explains each one.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">The Six Key Types</h2>
        <div className="space-y-6">
          {keyTypes.map((key) => (
            <div key={key.name} className={`rounded-lg border-2 p-6 ${key.colour}`}>
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <h3 className="text-xl font-bold text-gray-900">{key.name}</h3>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${key.badge}`}>
                  {key.complexity}
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-3 italic">{key.era}</p>
              <p className="text-gray-700 mb-4">{key.description}</p>
              <div className="grid sm:grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="font-semibold text-gray-800">Common examples: </span>
                  <span className="text-gray-600">{key.examples}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Typical replacement time: </span>
                  <span className="text-gray-600">{key.replaceTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Does the Key Type Matter for Replacement?
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              The key type determines three things: the equipment needed, the time required, and
              the cost. A basic cut key needs only a blank and a cutting machine — the job is
              measured in minutes. A smart proximity key needs a compatible key blank (more
              expensive), a professional programmer with access to the car&apos;s body control
              system, and significantly more time.
            </p>
            <p>
              When you call RTI, the first thing we ask is the make, model, and year of your car.
              From that, we can identify the key type and give you an accurate quote and time
              estimate before we attend. There are no &quot;we&apos;ll see when we get there&quot;
              pricing approaches — we confirm cost and timing upfront.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How to Identify Your Key Type
          </h2>
          <div className="text-gray-700 space-y-3">
            <p>Not sure what type of key you have? Work through this:</p>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>Plain metal key, no plastic head, no buttons?</strong> — Basic cut key.
                Pre-1995 or commercial vehicle.
              </li>
              <li>
                <strong>Plastic head, no buttons, blade always exposed?</strong> — Transponder
                key. Very common on cars from the late 1990s to mid 2000s.
              </li>
              <li>
                <strong>Plastic head with remote lock/unlock buttons?</strong> — Remote transponder
                key. Sometimes the remote is a separate item on the ring.
              </li>
              <li>
                <strong>Blade folds into the handle, buttons on the side?</strong> — Remote flip
                (folding) key. Common on VW group, BMW, Renault from the mid 2000s.
              </li>
              <li>
                <strong>No blade at all, or blade hidden inside the case?</strong> — Smart
                proximity key. Car starts with a push button. 2010s and newer.
              </li>
              <li>
                <strong>Flat, credit-card shaped device?</strong> — Renault keycard. Megane Mk2,
                Laguna Mk2, or similar.
              </li>
            </ol>
          </div>
        </section>

        <section className="mt-12 bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Also From RTI</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/car-key-programming" className="text-yellow-600 hover:text-yellow-700 font-medium">
                Our key programming service &rarr;
              </Link>{' '}
              <span className="text-gray-600">— we programme all key types using Autel IM608 and VVDI2</span>
            </li>
            <li>
              <Link href="/car-key-replacement" className="text-yellow-600 hover:text-yellow-700 font-medium">
                Our car key replacement service &rarr;
              </Link>{' '}
              <span className="text-gray-600">— supply and programme a new key on-site</span>
            </li>
            <li>
              <Link href="/advice/car-key-replacement-cost-uk" className="text-yellow-600 hover:text-yellow-700 font-medium">
                Car key replacement costs in the UK &rarr;
              </Link>{' '}
              <span className="text-gray-600">— what each key type costs to replace</span>
            </li>
          </ul>
        </section>
      </article>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Car Key Questions Answered
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
            Need a Key Replaced Near Wigan?
          </h2>
          <p className="text-gray-800 mb-8">
            Tell us the make, model, and year and we will identify the key type, confirm we can
            help, and quote a clear price. Available 24/7 across Wigan and surrounding areas.
          </p>
          <a
            href="tel:+447309903243"
            className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold text-xl px-10 py-5 rounded-lg transition-colors"
          >
            &#128222; Call RTI Auto Locksmith
          </a>
          <p className="mt-4 text-sm text-gray-700">No call-out fee &mdash; honest pricing upfront</p>
        </div>
      </section>
    </>
  )
}
