export default function CTABanner() {
  return (
    <aside
      className="mt-16 w-full max-w-2xl bg-indigo-600 rounded-2xl p-8 text-center text-white"
      aria-label="Call to action"
    >
      <p className="text-lg font-semibold">
        Need a full accessibility audit?
      </p>
      <p className="mt-1 text-indigo-200 text-sm">
        Our team reviews your entire product against WCAG 2.1 and delivers a prioritised fix list.
      </p>
      <a
        href="https://prolific.studio/contact"
        className="mt-5 inline-block bg-white text-indigo-600 font-semibold px-6 py-2.5
          rounded-full text-sm hover:bg-indigo-50 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        Start a Conversation &rarr;
      </a>
    </aside>
  )
}
