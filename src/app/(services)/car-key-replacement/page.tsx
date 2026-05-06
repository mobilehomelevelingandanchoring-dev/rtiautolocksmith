import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo/metadata'
import { buildServiceSchema } from '@/lib/schema/localBusiness'
import FAQSchema from '@/components/seo/FAQSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = buildMetadata({
  title: 'Car Key Replacement Wigan | RTI Auto Locksmith',
  description:
    'Need a new car key near Wigan? RTI supplies and programmes replacement keys for all makes. Same-day service available. Call RTI.',
  path: '/car-key-replacement',
})

const serviceSchema = buildServiceSchema({
  name: 'Car Key Replacement',
  description:
    'Mobile car key replacement service covering Wigan and surrounding areas. Keys cut and programmed on-site for all UK car makes. Same-day service available.',
  url: 'https://rtiautolocksmith.com/car-key-replacement',
})

const faqs = [
  {
    question: 'How does car key replacement work on-site?',
    answer:
      'Once we arrive, we first identify the exact key type your car uses — whether that is a basic cut key, a transponder key with an immobiliser chip, a remote flip key, or a full proximity smart key. We then cut the key blank to match your lock using a code or by decoding the existing barrel if accessible, and programme the transponder chip to the car\'s ECU using diagnostic equipment. The whole process typically takes 30 minutes to an hour depending on the make and key type.',
  },
  {
    question: 'Can you replace a car key if I only have one left?',
    answer:
      'Yes, and this is one of the most common reasons people call us — they have one working key and want a spare before they lose that too. If you have a working key, we can programme an additional key alongside it in most cases. This is generally the quickest and most cost-effective route. We recommend having at least two working keys for any car.',
  },
  {
    question: 'What if I need a replacement for a car with push-button start?',
    answer:
      'Push-button start vehicles use a proximity key (sometimes called a smart key or keycard). We can supply and programme these for most makes including BMW, Audi, Mercedes, Volkswagen, and Renault. These keys contain both a transponder chip and a remote function, and the programming process uses our Autel IM608 to access the car\'s body control system. These are more expensive than transponder keys but the process is the same — on-site, no dealer needed.',
  },
  {
    question: 'Do you carry key blanks for all car makes?',
    answer:
      'We carry a range of blanks for the most common makes and can source others quickly. For the majority of Ford, Vauxhall, Volkswagen, Renault, Toyota, Nissan, and BMW models, we can complete the job in a single visit. For less common makes or older vehicles where the blank is harder to source, we will let you know before attending rather than arriving unprepared.',
  },
  {
    question: 'Can you replace a key if the car has been in for electrical work recently?',
    answer:
      'Yes, though it is worth mentioning this when you call. Some ECU updates or electrical work can affect the key data stored in the car\'s immobiliser. In most cases this does not cause problems, but for certain vehicles — particularly some BMW and VAG group cars after a software update — we may need to take an extra step to verify the key data before programming. Knowing in advance means we can prepare the right approach.',
  },
  {
    question: 'How long does car key replacement take?',
    answer:
      'A basic transponder key replacement for a Ford or Vauxhall typically takes 30 to 45 minutes on-site. A remote key for a VW or Toyota is similar. A full smart key replacement for a BMW or Audi can take 45 to 90 minutes depending on the security system. We will give you an accurate estimate when you describe the car and key type over the phone.',
  },
]

const breadcrumbs = [
  { name: 'Home', url: 'https://rtiautolocksmith.com' },
  { name: 'Car Key Replacement', url: 'https://rtiautolocksmith.com/car-key-replacement' },
]

export default function CarKeyReplacementPage() {
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
            <span className="text-gray-200">Car Key Replacement</span>
          </nav>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-6">
            Car Key Replacement Near Wigan —{' '}
            <span className="text-yellow-400">Cut and Programmed on Your Driveway</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl">
            RTI Auto Locksmith supplies and programmes replacement car keys on-site for all UK
            makes and models. No dealer trip. No towing. Same-day service available across
            Wigan and surrounding areas.
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
            <strong>RTI supplies and programmes replacement car keys on-site</strong> for all UK
            makes — Ford, Vauxhall, VW, BMW, Audi, Renault, Toyota, Nissan, and more. Whether you
            need a spare key, a replacement for a damaged key, or a brand new key after losing
            yours, we cut and programme it at your location. No call-out fee. Typically on-site
            within 30&ndash;45 minutes.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Car Key Replacement Actually Involves
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              A car key is not just a piece of metal. Since the mid-1990s, virtually all cars sold
              in the UK have incorporated an immobiliser chip inside the key — a transponder that
              must communicate with the car's ECU before the engine will start. Cutting the key
              blade to the right profile is the first step; programming the chip is the second,
              and arguably the more technical one.
            </p>
            <p>
              For Ford, Vauxhall, and most mainstream UK makes, we use the Autel IM508 or IM608
              to access the car's transponder data via the OBD port and programme a new key to
              match. For vehicles where OBD programming is restricted — some older BMW models,
              certain Renault Megane and Laguna systems, and a handful of others — we may need to
              read the EEPROM chip directly from the ECU or transponder control module. This
              takes longer but is still done on-site.
            </p>
            <p>
              Remote functions (locking and unlocking from a distance) are programmed separately
              from the transponder chip. On most modern vehicles, the VVDI2 handles remote
              generation and synchronisation automatically once the car&apos;s security code is
              accessed.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Key Types We Replace
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                type: 'Transponder Keys',
                desc: 'The most common type on UK roads. A physical key with a hidden chip in the head. Used on most Ford, Vauxhall, Renault, and Toyota models from the early 2000s onwards.',
              },
              {
                type: 'Remote Flip Keys',
                desc: 'A folding blade with built-in remote buttons for locking and unlocking. Common on VW, Audi, Seat, Skoda, and BMW models. Contains both a transponder and a remote transmitter.',
              },
              {
                type: 'Smart / Proximity Keys',
                desc: 'Keyless entry and push-button start. The key stays in your pocket. Used on newer BMW, Audi, Mercedes, Range Rover, and many mainstream makes. More complex and more expensive to replace.',
              },
              {
                type: 'Basic Cut Keys',
                desc: 'No chip, no remote. Older vehicles and some commercial vehicles. Straightforward cut from a blank — fastest and least expensive job we do.',
              },
            ].map(({ type, desc }) => (
              <div key={type} className="bg-gray-50 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">{type}</h3>
                <p className="text-gray-700 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            A Typical Key Replacement on a Wigan Driveway
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              A customer in Hindley called about a Volkswagen Golf — she had damaged her only key
              by dropping it and the casing had cracked, exposing the blade and chip board. The
              remote still worked intermittently, but the transponder was reading inconsistently
              and the car had started refusing to start on the first attempt.
            </p>
            <p>
              I arrived with a suitable VW flip key blank and the VVDI2. The first step was to
              cut the blade to match — I decoded the existing blade profile before it deteriorated
              further. Then I connected to the car via OBD to read the transponder data, generated
              a new chip, and programmed it to the immobiliser. Remote was generated from the
              same connection and synced. The whole job took about 50 minutes. She kept the old
              key shell as a backup for the garage door remote, which was attached to it.
            </p>
          </div>
        </section>

        <section className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Related from RTI</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/car-key-programming" className="text-yellow-600 hover:text-yellow-700 font-medium">
                Our key programming service &rarr;
              </Link>{' '}
              <span className="text-gray-600">— key cut elsewhere but not starting? We programme it</span>
            </li>
            <li>
              <Link href="/lost-car-keys" className="text-yellow-600 hover:text-yellow-700 font-medium">
                Our lost car key service &rarr;
              </Link>{' '}
              <span className="text-gray-600">— no original key present, starting from scratch</span>
            </li>
            <li>
              <Link href="/advice/car-key-replacement-cost-uk" className="text-yellow-600 hover:text-yellow-700 font-medium">
                Car key replacement costs explained &rarr;
              </Link>{' '}
              <span className="text-gray-600">— real UK prices by key type</span>
            </li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            All services available{' '}
            <Link href="/auto-locksmith-wigan" className="text-yellow-600 underline hover:text-yellow-700">
              across our Wigan coverage area
            </Link>
            .
          </p>
        </section>
      </article>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Car Key Replacement Questions Answered
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
            Need a Replacement Key Near Wigan?
          </h2>
          <p className="text-gray-800 mb-8">
            Tell us your car make, model, and year and we will give you a clear quote over the
            phone. No obligation. Same-day service available.
          </p>
          <a
            href="tel:+44XXXXXXXXXX"
            className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold text-xl px-10 py-5 rounded-lg transition-colors"
          >
            &#128222; Call RTI for a Quote
          </a>
          <p className="mt-4 text-sm text-gray-700">Available 24/7 &mdash; no call-out fee</p>
        </div>
      </section>
    </>
  )
}
