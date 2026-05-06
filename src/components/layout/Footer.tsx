import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Business info / NAP */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="font-bold text-xl text-white">
                <span className="text-yellow-400">RTI</span> Auto Locksmith
              </span>
            </div>
            <div className="space-y-2 text-sm">
              <p className="font-semibold text-white">RTI Auto Locksmith</p>
              <p>Mobile auto locksmith</p>
              <p>Wigan, Greater Manchester</p>
              <p className="mt-3">
                <a
                  href="tel:+44XXXXXXXXXX"
                  className="text-yellow-400 font-bold hover:text-yellow-300 transition-colors"
                >
                  +44 XXXX XXX XXX
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/44XXXXXXXXXX"
                  className="text-green-400 hover:text-green-300 transition-colors"
                >
                  WhatsApp Us
                </a>
              </p>
              <p className="text-gray-400 text-xs mt-3">
                Available 24/7/365 &mdash; including bank holidays
              </p>
            </div>

            {/* Trust badges */}
            <div className="mt-6 space-y-2 text-xs text-gray-400">
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
              <li>
                <Link href="/car-lockout-service" className="hover:text-yellow-400 transition-colors">
                  Car Lockout Service
                </Link>
              </li>
              <li>
                <Link href="/car-key-replacement" className="hover:text-yellow-400 transition-colors">
                  Car Key Replacement
                </Link>
              </li>
              <li>
                <Link href="/lost-car-keys" className="hover:text-yellow-400 transition-colors">
                  Lost Car Keys
                </Link>
              </li>
              <li>
                <Link href="/car-key-programming" className="hover:text-yellow-400 transition-colors">
                  Car Key Programming
                </Link>
              </li>
              <li>
                <Link href="/emergency-auto-locksmith" className="hover:text-yellow-400 transition-colors">
                  Emergency Auto Locksmith
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Areas Covered
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/auto-locksmith-wigan" className="hover:text-yellow-400 transition-colors">
                  Auto Locksmith Wigan
                </Link>
              </li>
              <li>
                <Link href="/auto-locksmith-chorley" className="hover:text-yellow-400 transition-colors">
                  Auto Locksmith Chorley
                </Link>
              </li>
              <li>
                <Link href="/auto-locksmith-leyland" className="hover:text-yellow-400 transition-colors">
                  Auto Locksmith Leyland
                </Link>
              </li>
              <li>
                <Link href="/auto-locksmith-st-helens" className="hover:text-yellow-400 transition-colors">
                  Auto Locksmith St Helens
                </Link>
              </li>
              <li>
                <Link href="/auto-locksmith-skelmersdale" className="hover:text-yellow-400 transition-colors">
                  Auto Locksmith Skelmersdale
                </Link>
              </li>
            </ul>
          </div>

          {/* Advice + Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Helpful Guides
            </h3>
            <ul className="space-y-2 text-sm mb-6">
              <li>
                <Link
                  href="/advice/what-to-do-locked-out-of-car"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Locked Out? What To Do
                </Link>
              </li>
              <li>
                <Link
                  href="/advice/car-key-replacement-cost-uk"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Key Replacement Cost UK
                </Link>
              </li>
              <li>
                <Link
                  href="/advice/can-locksmith-make-key-without-original"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Key Without Original?
                </Link>
              </li>
              <li>
                <Link
                  href="/advice/types-of-car-keys-explained"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Types of Car Keys
                </Link>
              </li>
            </ul>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-yellow-400 transition-colors">
                  About RTI
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            &copy; {currentYear} RTI Auto Locksmith. Mobile auto locksmith covering Wigan,
            Chorley, Leyland, St Helens, and Skelmersdale.
          </p>
          <div className="flex items-center gap-1 text-yellow-400">
            {'★★★★★'.split('').map((star, i) => (
              <span key={i} className="text-sm">{star}</span>
            ))}
            <span className="text-gray-400 ml-1">4.9/5 (87 reviews)</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
