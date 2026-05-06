// Mobile-only fixed bottom bar — always visible, never dismissible.
// Showing the actual number before the tap increases call conversions
// by removing the uncertainty of "who am I actually calling?".

const PHONE_DISPLAY = '07309 903 243'
const PHONE_HREF    = 'tel:+447309903243'
const WA_HREF       = 'https://wa.me/447309903243'

export default function StickyCallBar() {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t-2 border-yellow-400"
      role="complementary"
      aria-label="Emergency call bar"
    >
      {/* Two-button layout: Call (primary) + WhatsApp (secondary) */}
      <div className="flex items-stretch">

        {/* Call button — takes 65% width, shows number */}
        <a
          href={PHONE_HREF}
          className="flex-1 flex flex-col items-center justify-center gap-0 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-3 transition-colors"
          aria-label={`Call RTI Auto Locksmith — ${PHONE_DISPLAY}`}
        >
          <span className="text-xs font-medium leading-tight">
            <span className="text-red-600">&#9679;</span> Locked Out? Call RTI
          </span>
          <span className="text-lg tracking-wide leading-tight">{PHONE_DISPLAY}</span>
          <span className="text-xs text-gray-700 leading-tight">24/7 &mdash; No call-out fee</span>
        </a>

        {/* WhatsApp button — secondary, takes 35% width */}
        <a
          href={WA_HREF}
          className="flex flex-col items-center justify-center gap-0.5 bg-green-600 hover:bg-green-500 text-white font-bold px-4 py-3 transition-colors min-w-[90px]"
          aria-label="WhatsApp RTI Auto Locksmith"
        >
          <span className="text-lg leading-none">&#128172;</span>
          <span className="text-xs font-semibold leading-tight">WhatsApp</span>
        </a>

      </div>
    </div>
  )
}
