import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo/metadata'
import { buildServiceSchema } from '@/lib/schema/localBusiness'
import FAQSchema from '@/components/seo/FAQSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = buildMetadata({
  title: 'Lost Car Keys? Wigan Auto Locksmith | RTI',
  description:
    'Lost your car keys near Wigan? RTI Auto Locksmith can cut, programme and supply a new key on-site. Available 24 hours a day.',
  path: '/lost-car-keys',
})

const serviceSchema = buildServiceSchema({
  name: 'Lost Car Keys Service',
  description:
    'Specialist lost car key service covering Wigan and surrounding areas. New keys cut and programmed on-site with no original required in most cases.',
  url: 'https://rtiautolocksmith.com/lost-car-keys',
})

const faqs = [
  {
    question: 'Can a locksmith make a car key if I have lost all my keys?',
    answer:
      'Yes, in the majority of cases. The method depends on the car. For most UK vehicles we can either read the key data from the car\'s ECU via the OBD port, or — for vehicles where OBD access is restricted — read the EEPROM chip from the immobiliser or transponder control module. From this data we generate a new key, cut the blade, and programme it to the car. You do not need the original key for us to do this.',
  },
  {
    question: 'Does it cost more to replace a key with no original present?',
    answer:
      'Usually yes, because the process takes longer. When an original key is available, we can use it as a reference during programming — this reduces the steps involved. Without any key, we have to access the car\'s security data through alternative means, which takes more time. We will quote a clear price before attending so there are no surprises.',
  },
  {
    question: 'How do you get into the car if there are no keys at all?',
    answer:
      'We use specialist Lishi picks to gain mechanical entry first — the same process as a standard car lockout. Once inside, we connect to the OBD port or access the ECU to retrieve the transponder data. The car is then accessible and we complete the key generation on-site.',
  },
  {
    question: 'What if I lost my keys somewhere and they might be found and used to steal my car?',
    answer:
      'This is an important consideration. If your keys were lost in a location where someone could identify the car they belong to — your home address is on documents in the glovebox, for example — you should consider having the car\'s immobiliser security cleared and all keys re-coded. This means existing keys are rendered useless. We can do this as part of the lost key replacement service. Let us know your concern when you call.',
  },
  {
    question: 'Can you replace a lost smart key for a newer car?',
    answer:
      'Yes. Smart keys (proximity keys used for push-button start cars) are more complex and more expensive to replace than standard transponder keys, but we can handle most makes including BMW, Audi, Mercedes, Volkswagen, Renault, and Toyota. We use the Autel IM608 for these, which covers the programming protocols for the vast majority of current UK vehicles.',
  },
  {
    question: 'How long does lost key replacement take when there is no original?',
    answer:
      'A lost key replacement without any original typically takes 60 to 120 minutes on-site. This includes entry, diagnostic connection, data retrieval or EEPROM reading, key generation, blade cutting, and programming verification. Simpler systems (Ford, Vauxhall, Renault common models) are at the faster end. BMW, Audi, and newer VAG group vehicles with advanced security take longer.',
  },
  {
    question: 'Should I contact my car insurance before calling a locksmith about lost keys?',
    answer:
      'It is worth checking your policy — some comprehensive car insurance policies include cover for lost keys or contribute towards the cost. Call your insurer first if you are not in a hurry. If you need access to your vehicle urgently or cannot reach your insurer, call us and we will get you sorted — you can claim afterwards with our invoice as evidence.',
  },
]

const breadcrumbs = [
  { name: 'Home', url: 'https://rtiautolocksmith.com' },
  { name: 'Lost Car Keys', url: 'https://rtiautolocksmith.com/lost-car-keys' },
]

export default function LostCarKeysPage() {
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
            <span className="text-gray-200">Lost Car Keys</span>
          </nav>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-6">
            Lost Your Car Keys Near Wigan?{' '}
            <span className="text-yellow-400">We Can Make You a New One On-Site.</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl">
            RTI Auto Locksmith generates replacement car keys even with no original present.
            Entry, key cutting, and programming — all done at your location. Available 24/7.
            No call-out fee.
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
            <strong>If you have lost all your car keys</strong>, RTI can gain entry to your car
            and generate a new key from scratch — without the original. We use EEPROM reading or
            OBD programming depending on the make and model, and we can complete the whole job
            on-site in most cases. Serving Wigan, Chorley, Leyland, St Helens, and Skelmersdale.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How We Replace Lost Car Keys Without the Original
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              Losing all copies of your car key is stressful — but it is a problem we deal with
              regularly, and in most cases it is fully solvable on-site without a dealer or a
              recovery truck.
            </p>
            <p>
              The process starts with gaining entry to the car. We use specialist Lishi picks for
              the appropriate lock type — HU66 for VW/Audi group cars, different tools for Ford,
              Vauxhall, Toyota, and BMW. Once inside, we access the vehicle's OBD port to connect
              our Autel IM608 diagnostic programmer. For most vehicles, this allows us to read the
              transponder security data and generate a new matching chip.
            </p>
            <p>
              For some vehicles — certain Renaults, older BMWs, and a handful of VAG group models
              — the security data cannot be retrieved via OBD. In these cases we need to read the
              EEPROM chip directly from the immobiliser module or body control unit. This requires
              removing and soldering or clip-reading the chip, extracting the security PIN or
              transponder data, and using that to programme a new key. It adds time and complexity,
              but it still happens on-site in most cases.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            One from Chorley: Renault Megane, No Keys
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              A couple called from a car park in Adlington near Chorley — they had been on a walk
              and somewhere along the route, their only Renault Megane key had fallen out of a
              pocket. They could not retrace it. The car was locked, and the Megane is one of the
              more complex lost-key scenarios because of how Renault structured the UCH (body
              control unit) security on that generation.
            </p>
            <p>
              I arrived, picked the door, and connected via OBD to read the UCH PIN code. The
              Megane&apos;s system requires this PIN before any key programming can happen — it is
              a Renault security measure. Once extracted, I used the VVDI2 to generate a new key
              chip from the PIN, cut the blade to the door barrel profile, and verified start.
              Total time on-site: around 90 minutes. Not a quick job, but it saved them the
              expense of a main dealer booking and a recovery lorry.
            </p>
            <p>
              For advice on whether a locksmith can always make a key without the original, our
              guide on{' '}
              <Link href="/advice/can-locksmith-make-key-without-original" className="text-yellow-600 underline hover:text-yellow-700">
                whether a locksmith can make a key without the original
              </Link>{' '}
              explains the situations where it is and is not possible.
            </p>
          </div>
        </section>

        <section className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Also From RTI</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/car-key-replacement" className="text-yellow-600 hover:text-yellow-700 font-medium">
                Our replacement car key service &rarr;
              </Link>{' '}
              <span className="text-gray-600">— have one key but need another cut and programmed</span>
            </li>
            <li>
              <Link href="/car-key-programming" className="text-yellow-600 hover:text-yellow-700 font-medium">
                Our key programming service &rarr;
              </Link>{' '}
              <span className="text-gray-600">— key cut but not recognised by the car</span>
            </li>
            <li>
              <Link href="/auto-locksmith-chorley" className="text-yellow-600 hover:text-yellow-700 font-medium">
                Our Chorley coverage &rarr;
              </Link>
            </li>
          </ul>
        </section>
      </article>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Lost Car Key Questions Answered
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
            Lost Your Car Keys Near Wigan?
          </h2>
          <p className="text-gray-800 mb-8">
            Call RTI and tell us the make, model, and year of your car. We will explain the
            process, give you a clear price, and be on our way.
          </p>
          <a
            href="tel:+44XXXXXXXXXX"
            className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold text-xl px-10 py-5 rounded-lg transition-colors"
          >
            &#128222; Call RTI Auto Locksmith
          </a>
          <p className="mt-4 text-sm text-gray-700">Available 24/7 &mdash; no call-out fee</p>
        </div>
      </section>
    </>
  )
}
