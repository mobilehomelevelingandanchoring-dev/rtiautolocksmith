import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo/metadata'
import { buildServiceSchema, buildBreadcrumbSchema } from '@/lib/schema/localBusiness'
import FAQSchema from '@/components/seo/FAQSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata: Metadata = buildMetadata({
  title: 'Car Lockout Service Wigan | RTI Auto Locksmith',
  description:
    'Locked out of your car in Wigan? RTI Auto Locksmith gets you back in fast — no damage, all car makes, available 24/7. Call now.',
  path: '/car-lockout-service',
})

const serviceSchema = buildServiceSchema({
  name: 'Car Lockout Service',
  description:
    'Professional car lockout service covering Wigan and surrounding areas. Fast entry for all UK car makes using specialist tools. No damage, 24/7 availability.',
  url: 'https://rtiautolocksmith.com/car-lockout-service',
})

const faqs = [
  {
    question: 'How do you get into a locked car without a key?',
    answer:
      'The method depends on the car. For most modern vehicles, we use specialist Lishi 2-in-1 picks and decoders — tools designed for specific lock types. For example, a Ford Focus uses a different pick to a Vauxhall Astra or a Volkswagen Golf. The tool is inserted into the lock cylinder, allowing us to manipulate the lock open without damaging the mechanism or the door trim. For some vehicles, we use an air wedge and long-reach tool to operate the interior handle. We always choose the safest method for your specific make and model.',
  },
  {
    question: 'Will you damage my car to get in?',
    answer:
      'Rarely, if ever. Our whole approach is built around non-destructive entry. We use tools and techniques specifically designed for automotive locks, which means we can gain entry in most cases without leaving any mark on your car. There are rare situations — badly damaged locks, unusual security features on certain high-end vehicles — where some minor work is unavoidable, but we will always explain this before we start and will only proceed with your agreement.',
  },
  {
    question: 'How long does a car lockout take to resolve?',
    answer:
      'Most car lockout jobs take between 5 and 25 minutes once we are with the vehicle. A standard door lock on a Ford Fiesta or Vauxhall Corsa typically takes 5 to 10 minutes. High-security locks on BMW, Audi, and newer Volkswagen models can take a bit longer — usually 15 to 25 minutes. We will never rush a job in a way that risks damaging your car.',
  },
  {
    question: 'My key fob battery has died and the car will not unlock. Can you help?',
    answer:
      'Yes. A dead key fob battery is one of the most common reasons people find themselves locked out. In most cases, the physical key blade inside the fob can operate the door lock directly — this is worth trying first. If that does not work, or if the physical key slot is hidden or has seized, we can still gain entry using our tools and then arrange a replacement fob or battery if needed.',
  },
  {
    question: 'I have locked my keys inside the car. Can you see them through the window?',
    answer:
      'It does not make a significant difference to us whether the keys are visible or not. We gain entry through the lock mechanism, not through the window, so we do not need to see where the keys are. Once you are back in, your keys will obviously be where you left them — usually on the seat, in the footwell, or in the boot.',
  },
  {
    question: 'Do you cover car lockouts in Wigan at night?',
    answer:
      'Yes. We operate 24 hours a day, 7 days a week, every day of the year — including bank holidays and Christmas. A lockout does not care what time it is, and neither does our service. Night callouts are charged at the same rate as daytime — we do not apply unsociable hours surcharges.',
  },
  {
    question: 'What should I do while I wait for the locksmith to arrive?',
    answer:
      'Stay with your vehicle if it is safe to do so and the location is well-lit. Let us know your exact location when you call — a postcode or a nearby landmark helps. Do not attempt to force entry yourself, as this almost always causes damage that is more expensive to repair than the locksmith callout. If you are in an area that feels unsafe, move to a busier spot nearby and let us know.',
  },
]

const breadcrumbs = [
  { name: 'Home', url: 'https://rtiautolocksmith.com' },
  { name: 'Car Lockout Service', url: 'https://rtiautolocksmith.com/car-lockout-service' },
]

export default function CarLockoutServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-yellow-400">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">Car Lockout Service</span>
          </nav>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-6">
            Locked Out of Your Car?{' '}
            <span className="text-yellow-400">We Will Have You Back In Fast.</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl">
            RTI Auto Locksmith provides professional car lockout entry across Wigan and the
            surrounding area. Typically on-site within 30&ndash;45 minutes. No damage. No call-out
            fee. Available any time, day or night.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+44XXXXXXXXXX"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              &#128222; Call Now &mdash; 24/7
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

      {/* Direct Answer Block */}
      <section className="bg-yellow-50 border-l-4 border-yellow-400 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
            <strong>If you are locked out of your car near Wigan</strong>, call RTI Auto Locksmith
            and we will be with you within 30&ndash;45 minutes. We use specialist Lishi picks and
            automotive entry tools to open your car cleanly, without causing damage. We cover all
            UK car makes including Ford, Vauxhall, VW, BMW, Audi, Toyota, and Renault — 24 hours a
            day, every day.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How We Open Locked Cars
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              The tools we use depend entirely on the car. Every manufacturer uses different lock
              types, and over the years the security has become increasingly sophisticated. For that
              reason, we carry a full set of Lishi 2-in-1 picks — specialist tools that are
              designed for specific lock profiles. The HU66 pick is used for VW and Audi group
              vehicles. The HU100 works on most BMW models. The TOY43 covers the Toyota range.
              Each one allows us to both pick the lock open and decode the cuts simultaneously.
            </p>
            <p>
              For vehicles where a direct lock pick is not the best approach — some newer cars
              with plastic door surrounds, for example — we use an air wedge entry system. This
              creates a small, controlled gap between the door and the frame, allowing a long-reach
              tool to operate the interior door handle or unlock button. Done correctly, this
              leaves no mark on the vehicle.
            </p>
            <p>
              What we do not do is use slim jims or coat hangers. These are outdated, blunt-force
              tools that damage window seals and wiring. Every method we use is designed to be
              clean, fast, and safe for your car.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            A Real Callout: Parked on the A49 Near Robin Park
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              One evening last year I got a call from a driver who had parked up near the retail
              park off the A49 in Wigan, done his shopping, and come back to find the key fob
              completely dead. The car was a 2019 Vauxhall Mokka. The fob battery had gone with
              no warning, and because the car had not been manually keyed in years, the barrel was
              a bit stiff.
            </p>
            <p>
              I pulled up about 30 minutes after the call. First I checked whether the physical
              key blade inside the fob would open the door — sometimes the barrel just needs a
              firm push and a bit of persuasion. In this case it did not budge. So I used the
              appropriate Lishi pick for the Vauxhall barrel, which manipulated it open in under
              five minutes. Once inside, we used the physical key in the ignition to start the
              car and drive home. Job done with no damage, no drama.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Cars We Cover for Lockout Entry
          </h2>
          <p className="text-gray-700 mb-4">
            We carry the tools and knowledge to gain entry to virtually any car on UK roads,
            including:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {[
              'Ford Focus', 'Ford Fiesta', 'Ford Transit', 'Ford Kuga',
              'Vauxhall Astra', 'Vauxhall Corsa', 'Vauxhall Mokka', 'Vauxhall Insignia',
              'VW Golf', 'VW Polo', 'VW Passat', 'VW Tiguan',
              'BMW 1 Series', 'BMW 3 Series', 'BMW 5 Series', 'BMW X5',
              'Audi A3', 'Audi A4', 'Audi Q3', 'Audi Q5',
              'Toyota Yaris', 'Toyota Corolla', 'Toyota RAV4', 'Nissan Qashqai',
              'Renault Clio', 'Renault Megane', 'Nissan Juke', 'Nissan Micra',
            ].map((car) => (
              <div key={car} className="text-sm text-gray-700 flex items-center gap-1">
                <span className="text-yellow-500 text-xs">&#10003;</span> {car}
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm">
            If your car is not listed, call us — we almost certainly cover it.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Happens After We Get You In?
          </h2>
          <div className="text-gray-700 space-y-4">
            <p>
              Once we have opened your car, the obvious next step is to make sure you have a
              working key to get home. If the issue was a dead fob battery, we can often supply a
              replacement CR2032 or equivalent on the spot. If the key itself is damaged or you
              have lost your only spare, we can discuss{' '}
              <Link href="/car-key-replacement" className="text-yellow-600 underline hover:text-yellow-700">
                car key replacement
              </Link>{' '}
              options — including cutting and programming a new key on-site there and then.
            </p>
            <p>
              If this was a genuine lockout — keys inside the car — and everything is in working
              order, we hand the car back, take payment, and leave you to get on with your day.
              Simple as that.
            </p>
            <p>
              For more detail on what to expect during a lockout and how to handle the situation
              safely, have a read of our guide on{' '}
              <Link href="/advice/what-to-do-locked-out-of-car" className="text-yellow-600 underline hover:text-yellow-700">
                what to do if you are locked out of your car
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Internal link block */}
        <section className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Related Services from RTI</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/emergency-auto-locksmith" className="text-yellow-600 hover:text-yellow-700 font-medium">
                Our emergency locksmith service &rarr;
              </Link>{' '}
              <span className="text-gray-600 text-sm">— for urgent, time-critical situations</span>
            </li>
            <li>
              <Link href="/car-key-replacement" className="text-yellow-600 hover:text-yellow-700 font-medium">
                Car key replacement &rarr;
              </Link>{' '}
              <span className="text-gray-600 text-sm">— if you need a new key cut after entry</span>
            </li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            All services are available across Wigan. See our{' '}
            <Link href="/auto-locksmith-wigan" className="text-yellow-600 underline hover:text-yellow-700">
              Wigan coverage area
            </Link>{' '}
            for more detail on the areas we reach.
          </p>
        </section>

      </article>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Car Lockout Questions Answered
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
            Locked Out Right Now?
          </h2>
          <p className="text-gray-800 mb-8">
            Do not wait. Call RTI Auto Locksmith and we will be on our way. We cover{' '}
            <Link href="/auto-locksmith-wigan" className="underline font-semibold">
              Wigan
            </Link>{' '}
            and surrounding areas 24/7 with no call-out fee. The sooner you call, the sooner
            you are back in your car.
          </p>
          <a
            href="tel:+44XXXXXXXXXX"
            className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold text-xl px-10 py-5 rounded-lg transition-colors"
          >
            &#128222; Call RTI Auto Locksmith
          </a>
          <p className="mt-4 text-sm text-gray-700">
            Answering 24/7 &mdash; including bank holidays
          </p>
        </div>
      </section>
    </>
  )
}
