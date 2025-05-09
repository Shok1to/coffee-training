export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-950 text-center px-4">
      <img
        src="/shokolatte.png"
        alt="Shokolatte Logo"
        className="mb-2 h-45 md:h-61"
      />
      <h1 className="mt-0 mb-4 text-4xl font-bold text-amber-400">
        Thank You!
      </h1>
      <p className="mb-8 max-w-md text-gray-300">
        Your message has been sent. We’ll be in touch soon!
      </p>
      <a
        href="/"
        className="rounded bg-amber-400 px-6 py-2 font-semibold text-gray-900 hover:bg-amber-500"
      >
        Back to Home
      </a>
    </div>
  )
}
