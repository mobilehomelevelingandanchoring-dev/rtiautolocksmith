export default function StickyCallBar() {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t-2 border-yellow-400"
      role="complementary"
      aria-label="Emergency call bar"
    >
      <div className="flex items-center justify-between px-4 py-3 gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-white font-bold text-sm truncate">
            <span className="text-red-400">&#9679;</span> Locked Out? Call RTI Now
          </p>
          <p className="text-gray-400 text-xs">24/7 &mdash; No call-out fee</p>
        </div>
        <a
          href="tel:+44XXXXXXXXXX"
          className="flex-shrink-0 inline-flex items-center gap-1.5 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold text-sm px-4 py-2.5 rounded-lg transition-colors"
        >
          &#128222; Call Now
        </a>
      </div>
    </div>
  )
}
