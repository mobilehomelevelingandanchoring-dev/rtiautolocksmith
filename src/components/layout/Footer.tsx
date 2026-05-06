import Link from 'next/link'
import Image from 'next/image'

const PHONE_DISPLAY = '07309 903 243'
const PHONE_HREF    = 'tel:+447309903243'
const WA_HREF       = 'https://wa.me/447309903243'
const EMAIL_DISPLAY = 'rtiautolocksmith@gmail.com'
const EMAIL_HREF    = 'mailto:rtiautolocksmith@gmail.com'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">

      {/* ── Pre-footer CTA band ───────────────────────────────────────────── */}
      <div className="bg-yellow-400 py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-gray-900 text-lg leading-tight">
              Need an auto locksmith right now?
            </p>
            <p className="text-gray-700 text-sm">
              24/7 &mdash; no call-out fee &mdash; typically on-site within 30&ndash;45 minutes
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={PHONE_HREF}
              className="inline-flex flex-col items-center justify-center bg-gray-900 hover:bg-gray-800 text-white font-bold px-6 py-3 rounded-lg transition-colors leading-tight"
            >
              <span className="text-xs font-medium text-gray-300">&#128222; Call Now — 24/7</span>
              <span className="text-xl tracking-wide">{PHONE_DISPLAY}</span>
            </a>
            <a
              href={WA_HREF}
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              &#128172; WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ── Main footer grid ──────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* NAP block — exact match to Google Business Profile */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/images/rti-auto-locksmith-logo-wigan.jpg"
                alt="RTI Auto Locksmith Wigan logo"
                width={52}
                height={52}
                className="rounded-full object-cover shrink-0"
              />
              <span className="font-bold text-xl text-white leading-tight">
                <span className="text-yellow-400">RTI</span> Auto Locksmith
              </span>
            </div>

            <address className="not-italic space-y-1 text-sm">
              {/* Business name */}
              <p className="font-semibold text-white">RTI Auto Locksmith</p>

              {/* Street address */}
              <p>4A Loch Street</p>
              <p>Wigan, WN5 0AN</p>
              <p>United Kingdom</p>

              {/* Phone */}
              <p className="pt-3">
                <a
                  href={PHONE_HREF}
                  className="text-yellow-400 font-bold text-lg hover:text-yellow-300 transition-colors tracking-wide"
                  aria-label={`Call RTI Auto Locksmith on ${PHONE_DISPLAY}`}
                >
                  {PHONE_DISPLAY}
                </a>
              </p>
              <p className="text-xs text-gray-400">&#128222; Tap to call &mdash; answered 24/7</p>

              {/* WhatsApp */}
              <p className="pt-1">
                <a
                  href={WA_HREF}
                  className="text-green-400 hover:text-green-300 transition-colors font-medium"
                >
                  &#128172; WhatsApp Us
                </a>
              </p>

              {/* Email */}
              <p className="pt-1">
                <a
                  href={EMAIL_HREF}
                  className="text-gray-400 hover:text-yellow-400 transition-colors break-all"
                >
                  &#9993; {EMAIL_DISPLAY}
                </a>
              </p>

              <p className="text-gray-400 text-xs pt-2">
                Available 24/7/365 &mdash; including bank holidays
              </p>
            </address>

            {/* Trust signals */}
            <div className="mt-5 space-y-1.5 text-xs text-gray-400">
              <p className="flex items-center gap-2">
                <span className="text-yellow-400">&#9889;</span> 30&ndash;45 min response
              </p>
              <p className="flex items-center gap-2">
                <span className="text-yellow-400">&#128274;</span> All UK car makes
              </p>
              <p className="flex items-center gap-2">
                <span className="text-yellow-400">&#10003;</span> No call-out fee
              </p>
              <p className="flex items-center gap-2">
                <span className="text-yellow-400">&#128737;</span> Fully insured
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                ['Car Lockout Service',       '/car-lockout-service'],
                ['Car Key Replacement',       '/car-key-replacement'],
                ['Lost Car Keys',             '/lost-car-keys'],
                ['Car Key Programming',       '/car-key-programming'],
                ['Emergency Auto Locksmith',  '/emergency-auto-locksmith'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-yellow-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Areas Covered
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                ['Auto Locksmith Wigan',        '/auto-locksmith-wigan'],
                ['Auto Locksmith Chorley',       '/auto-locksmith-chorley'],
                ['Auto Locksmith Leyland',       '/auto-locksmith-leyland'],
                ['Auto Locksmith St Helens',     '/auto-locksmith-st-helens'],
                ['Auto Locksmith Skelmersdale',  '/auto-locksmith-skelmersdale'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-yellow-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Advice + Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Helpful Guides
            </h3>
            <ul className="space-y-2 text-sm mb-6">
              {[
                ['Locked Out? What To Do',  '/advice/what-to-do-locked-out-of-car'],
                ['Key Replacement Cost UK', '/advice/car-key-replacement-cost-uk'],
                ['Key Without Original?',   '/advice/can-locksmith-make-key-without-original'],
                ['Types of Car Keys',       '/advice/types-of-car-keys-explained'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-yellow-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about"   className="hover:text-yellow-400 transition-colors">About RTI</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ────────────────────────────────────────────────────── */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            &copy; {currentYear} RTI Auto Locksmith. 4A Loch Street, Wigan, WN5 0AN.
            Mobile auto locksmith covering Wigan, Chorley, Leyland, St Helens &amp; Skelmersdale.
          </p>
          <div className="flex items-center gap-1 text-yellow-400">
            {'★★★★★'.split('').map((star, i) => (
              <span key={i} className="text-sm">{star}</span>
            ))}
            <span className="text-gray-400 ml-1">4.9 / 5 (87 reviews)</span>
          </div>
        </div>
      </div>

    </footer>
  )
}
