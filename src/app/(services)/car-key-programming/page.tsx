import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo/metadata'
import { buildServiceSchema } from '@/lib/schema/localBusiness'
import FAQSchema from '@/components/seo/FAQSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = buildMetadata({
  title: 'Car Key Programming Wigan | RTI Auto Locksmith',
  description:
    'RTI Auto Locksmith programmes car keys and remotes for all UK car makes in Wigan. Fast, affordable, fully mobile service.',
  path: '/car-key-programming',
})

const serviceSchema = buildServiceSchema({
  name: 'Car Key Programming',
  description:
    'Mobile car key programming service covering Wigan and surrounding areas. Transponder keys, remote keys, and smart keys programmed on-site using Autel IM608 and VVDI2.',
  url: 'https://rtiautolocksmith.com/car-key-programming',
})

const faqs = [
  {
    question: 'Why does a car key need programming?',
    answer:
      'Modern car keys contain a transponder chip — a small radio-frequency device that communicates with the car\'s immobiliser system. When you turn the key or press the start button, the car reads the chip. If the chip is not recognised — because it has not been programmed, has lost its pairing, or is the wrong type — the immobiliser prevents the engine from starting. Programming writes the correct security data to the chip so the car recognises it.',
  },
  {
    question: 'Can you programme a key that was bought online or from a third party?',
    answer:
      'Sometimes, but with important caveats. Aftermarket keys bought online vary widely in quality and compatibility. Some are well-made and programme perfectly. Others use inferior chip boards that the car\'s ECU rejects, or the blade profiles are cut slightly off and the key will not turn. We will attempt to programme a key you supply, but we cannot guarantee success with unknown aftermarket blanks. A key we source and supply ourselves is always tested and compatible.',
  },
  {
    question: 'My car starts but the remote locking has stopped working. Can you fix this?',
    answer:
      'Yes. Remote function and transponder function are separate. It is common for one to stop working while the other is fine. Remote issues are usually caused by the fob losing synchronisation with the car\'s receiver — this can happen after a battery change, certain electrical work, or simply over time on some vehicles. We can re-synchronise the remote on-site in most cases.',
  },
  {
    question: 'What is EEPROM programming and when is it needed?',
    answer:
      'EEPROM (Electrically Erasable Programmable Read-Only Memory) is a type of chip used to store security data in some vehicle ECUs and immobiliser modules. When OBD programming is not possible — because the vehicle\'s security system restricts it — we need to read the EEPROM chip directly by connecting to it physically, either by removing the module or using a clip reader. The data extracted tells us the security code needed to generate a matching transponder. It is more involved than OBD programming but achieves the same result.',
  },
  {
    question: 'How many keys can be programmed to a car at one time?',
    answer:
      'Most vehicles support between two and ten programmed keys simultaneously. When a new key is programmed, existing keys generally remain active. In some cases — particularly older Ford and Vauxhall systems — programming a new key can cause the car to erase all existing keys from memory, meaning all keys need to be present and re-programmed in one session. We will advise you on this when you describe your vehicle.',
  },
  {
    question: 'Do you carry programming equipment for BMW and Audi?',
    answer:
      'Yes. BMW and Audi (VAG group) are among the most common makes requiring specialist programming equipment. We use the VVDI2 (Xhorse) for key generation and the Autel IM608 for diagnostic access on these platforms. BMW from the E-series onwards and Audi from the B6/B7 generation are handled routinely. Newer models with advanced security may require additional steps.',
  },
]

const breadcrumbs = [
  { name: 'Home', url: 'https://rtiautolocksmith.com' },
  { name: 'Car Key Programming', url: 'https://rtiautolocksmith.com/car-key-programming' },
]

export default function CarKeyProgrammingPage() {
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
            <span className="text-gray-200">Car Key Programming</span>
          </nav>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-6">
            Car Key Programming Near Wigan —{' '}
            <span className="text-yellow-400">On-Site, All Makes Covered</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl">
            RTI programmes transponder keys, remote keys, and smart keys for all UK car makes.
            We come to you — no dealer booking, no waiting weeks for an appointment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+44XXXXXXXXXX"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              &#128222; Call for a Quote
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
            <strong>RTI programmes car keys and remotes on-site</strong> for all UK makes using
            the VVDI2 (Xhorse) and Autel IM608 — professional-grade equipment used by main
            dealers. Whether your key starts the car but the remote does not work, your
            transponder has lost its pairing, or you need a new key programmed from scratch, we
            cover it. Wigan and surrounding areas, 24/7.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Programming Methods We Use
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                method: 'OBD Programming',
                desc: 'The most common method. We connect to the car\'s OBD port (usually under the dashboard) and use the Autel IM608 to communicate with the immobiliser or BCM directly. Fast, clean, no dismantling required. Covers most Ford, Vauxhall, Toyota, Nissan, Renault (where OBD is accessible), and many BMW and Audi models.',
              },
              {
                method: 'EEPROM Reading',
                desc: 'For vehicles where OBD access is restricted by the security system. We access the EEPROM chip in the immobiliser module directly, read the security PIN or transponder data, and use this to programme a new key. More time-consuming but achieves the same result. Common on older Renault, early BMW, and certain Vauxhall platforms.',
              },
              {
                method: 'Remote Synchronisation',
                desc: 'For cases where the key starts the car but the remote locking function has stopped working. The remote transmitter needs to be re-synced to the car\'s receiver. On most vehicles this can be done via OBD or through a button sequence without dismantling anything.',
              },
              {
                method: 'Key Learning / All-Keys-Lost',
                desc: 'When there are no working keys at all, we perform an all-keys-lost procedure. This erases the car\'s existing key memory and writes a fresh key from the security data we retrieve. All new keys are then programmed in this session.',
              },
            ].map(({ method, desc }) => (
              <div key={method} className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">{method}</h3>
                <p className="text-gray-700 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Equipment We Use
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              Our primary diagnostic programmer is the <strong>Autel IM608</strong> — a
              professional all-makes key programmer that covers the vast majority of UK vehicles.
              It handles OBD-based key learning, transponder data reading, remote programming, and
              pin code retrieval for most European, Japanese, and Korean makes.
            </p>
            <p>
              For key generation — particularly for VW/Audi group, BMW, and systems requiring
              transponder emulation — we use the <strong>VVDI2 (Xhorse)</strong>. This is
              specialist equipment designed specifically for automotive key generation and is the
              same platform used by many dealer-authorised locksmiths. It generates OEM-equivalent
              transponder chips for the most common key types including ID46, ID48, ID4D, PCF7935,
              and many others.
            </p>
            <p>
              For EEPROM work, we use a clip reader and programmer that allows us to read chip
              data without desoldering in many cases — keeping the process clean and reducing risk
              to the vehicle's electronics.
            </p>
          </div>
        </section>

        <section className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Related Services</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/car-key-replacement" className="text-yellow-600 hover:text-yellow-700 font-medium">
                Car key replacement &rarr;
              </Link>{' '}
              <span className="text-gray-600">— need a new key cut as well as programmed</span>
            </li>
            <li>
              <Link href="/emergency-auto-locksmith" className="text-yellow-600 hover:text-yellow-700 font-medium">
                Emergency locksmith service &rarr;
              </Link>{' '}
              <span className="text-gray-600">— urgent programming needed right now</span>
            </li>
            <li>
              <Link href="/advice/types-of-car-keys-explained" className="text-yellow-600 hover:text-yellow-700 font-medium">
                Types of car keys explained &rarr;
              </Link>{' '}
              <span className="text-gray-600">— not sure what type of key you have?</span>
            </li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            All services available{' '}
            <Link href="/auto-locksmith-wigan" className="text-yellow-600 underline hover:text-yellow-700">
              covering Wigan and nearby areas
            </Link>
            .
          </p>
        </section>
      </article>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Car Key Programming Questions Answered
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
            Need a Key Programmed Near Wigan?
          </h2>
          <p className="text-gray-800 mb-8">
            Call RTI. Give us the make, model, and year and we will confirm we can do the job
            and quote a clear price before attending.
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
