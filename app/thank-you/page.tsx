export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-950 px-4 text-center text-white">
      <img
        src="/Shokolatte-small.png"
        alt="Shokolatte Logo"
        className="w-[200px] mt-6 drop-shadow-md"
      />

      <h1 className="mb-4 text-4xl font-bold text-amber-400">Thank You!</h1>
      <p className="mb-8 max-w-md text-gray-300">
        Your message has been sent. We’ll be in touch soon!
      </p>

      <img
        src="/latte-art-pouring.jpg"
        alt="Latte Art"
        className="mb-8 w-full max-w-md rounded-lg shadow-lg"
      />

      <a
        href="/"
        className="rounded bg-amber-400 px-6 py-2 font-semibold text-gray-900 hover:bg-amber-500"
      >
        Back to Home
      </a>
    </div>
  )
}
