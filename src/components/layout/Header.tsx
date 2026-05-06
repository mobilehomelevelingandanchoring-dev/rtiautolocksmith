'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  {
    label: 'Services',
    children: [
      { label: 'Car Lockout Service', href: '/car-lockout-service' },
      { label: 'Car Key Replacement', href: '/car-key-replacement' },
      { label: 'Lost Car Keys', href: '/lost-car-keys' },
      { label: 'Car Key Programming', href: '/car-key-programming' },
      { label: 'Emergency Locksmith', href: '/emergency-auto-locksmith' },
    ],
  },
  {
    label: 'Areas',
    children: [
      { label: 'Wigan', href: '/auto-locksmith-wigan' },
      { label: 'Chorley', href: '/auto-locksmith-chorley' },
      { label: 'Leyland', href: '/auto-locksmith-leyland' },
      { label: 'St Helens', href: '/auto-locksmith-st-helens' },
      { label: 'Skelmersdale', href: '/auto-locksmith-skelmersdale' },
    ],
  },
  {
    label: 'Advice',
    children: [
      { label: 'Locked Out of Your Car?', href: '/advice/what-to-do-locked-out-of-car' },
      { label: 'Key Replacement Cost', href: '/advice/car-key-replacement-cost-uk' },
      { label: 'Key Without Original?', href: '/advice/can-locksmith-make-key-without-original' },
      { label: 'Types of Car Keys', href: '/advice/types-of-car-keys-explained' },
    ],
  },
  { label: 'About', href: '/about' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-lg text-gray-900 hover:text-yellow-600 transition-colors"
            aria-label="RTI Auto Locksmith — Home"
          >
            <span className="text-yellow-500">RTI</span> Auto Locksmith
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
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
                    {item.label}
                    <span className="text-xs">&#9660;</span>
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

          {/* Desktop CTA */}
          <a
            href="tel:+44XXXXXXXXXX"
            className="hidden md:inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold text-sm px-4 py-2.5 rounded-lg transition-colors"
          >
            &#128222; Call Now &mdash; 24/7
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-yellow-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
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

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-4">
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
                      className="block text-sm text-gray-700 py-1 hover:text-yellow-600"
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
          <div className="pt-2 border-t border-gray-100">
            <a
              href="tel:+44XXXXXXXXXX"
              className="flex items-center justify-center gap-2 bg-yellow-400 text-gray-900 font-bold text-base py-3 rounded-lg"
            >
              &#128222; Call RTI — 24/7
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
