'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const PHONE_DISPLAY = '07309 903 243'
const PHONE_HREF    = 'tel:+447309903243'
const WA_HREF       = 'https://wa.me/447309903243'

const navLinks = [
  {
    label: 'Services',
    children: [
      { label: 'Car Lockout Service',  href: '/car-lockout-service' },
      { label: 'Car Key Replacement',  href: '/car-key-replacement' },
      { label: 'Lost Car Keys',        href: '/lost-car-keys' },
      { label: 'Car Key Programming',  href: '/car-key-programming' },
      { label: 'Emergency Locksmith',  href: '/emergency-auto-locksmith' },
    ],
  },
  {
    label: 'Areas',
    children: [
      { label: 'Wigan',        href: '/auto-locksmith-wigan' },
      { label: 'Chorley',      href: '/auto-locksmith-chorley' },
      { label: 'Leyland',      href: '/auto-locksmith-leyland' },
      { label: 'St Helens',    href: '/auto-locksmith-st-helens' },
      { label: 'Skelmersdale', href: '/auto-locksmith-skelmersdale' },
    ],
  },
  {
    label: 'Advice',
    children: [
      { label: 'Locked Out of Your Car?',  href: '/advice/what-to-do-locked-out-of-car' },
      { label: 'Key Replacement Cost',     href: '/advice/car-key-replacement-cost-uk' },
      { label: 'Key Without Original?',    href: '/advice/can-locksmith-make-key-without-original' },
      { label: 'Types of Car Keys',        href: '/advice/types-of-car-keys-explained' },
    ],
  },
  { label: 'About',   href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen]     = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">

      {/* Urgency bar — desktop only */}
      <div className="hidden md:block bg-gray-900 text-center py-1.5">
        <span className="text-gray-400 text-xs">Available&nbsp;</span>
        <span className="text-yellow-400 text-xs font-semibold">24 hours a day, 7 days a week</span>
        <span className="text-gray-400 text-xs"> &mdash; No call-out fee &mdash; All UK car makes</span>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 flex items-center"
            aria-label="RTI Auto Locksmith — Home"
          >
            <Image
              src="/images/rti-auto-locksmith-logo-wigan.jpg"
              alt="RTI Auto Locksmith Wigan — Mobile Car Keys & Lockout Service"
              width={56}
              height={56}
              className="rounded-full object-cover"
              priority
            />
            <span className="ml-2 font-bold text-base text-gray-900 leading-tight hidden sm:block">
              <span className="text-yellow-500">RTI</span> Auto Locksmith
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-5" aria-label="Main navigation">
            {navLinks.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className="text-gray-700 hover:text-yellow-600 font-medium text-sm flex items-center gap-1 transition-colors"
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup="true"
                  >
                    {item.label} <span className="text-xs">&#9660;</span>
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-52 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="text-gray-700 hover:text-yellow-600 font-medium text-sm transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA — number visible before the tap */}
          <a
            href={PHONE_HREF}
            className="hidden md:inline-flex flex-col items-center justify-center bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-5 py-2 rounded-lg transition-colors leading-tight group"
            aria-label={`Call RTI Auto Locksmith on ${PHONE_DISPLAY}`}
          >
            <span className="text-xs font-medium text-gray-700">&#128222; Call Now — 24/7</span>
            <span className="text-base tracking-wide">{PHONE_DISPLAY}</span>
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-yellow-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-4">

          {/* Primary CTA — top of menu, number visible */}
          <a
            href={PHONE_HREF}
            className="flex flex-col items-center justify-center gap-0.5 bg-yellow-400 text-gray-900 font-bold py-4 rounded-xl"
            onClick={() => setMobileOpen(false)}
          >
            <span className="text-sm">&#128222; Call RTI Now — 24/7</span>
            <span className="text-2xl tracking-wide">{PHONE_DISPLAY}</span>
          </a>

          {/* Nav links */}
          {navLinks.map((item) =>
            item.children ? (
              <div key={item.label}>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  {item.label}
                </p>
                <div className="space-y-1 pl-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block text-sm text-gray-700 py-1.5 hover:text-yellow-600"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className="block text-sm font-medium text-gray-700 hover:text-yellow-600"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}

          {/* WhatsApp secondary */}
          <a
            href={WA_HREF}
            className="flex items-center justify-center gap-2 border-2 border-green-500 text-green-700 font-semibold text-sm py-3 rounded-xl"
            onClick={() => setMobileOpen(false)}
          >
            &#128172; WhatsApp Us Instead
          </a>
        </div>
      )}
    </header>
  )
}
