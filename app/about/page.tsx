import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-950 text-gray-200">
      <header className="bg-black py-6">
        <div className="container mx-auto px-4">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/Shokolatte-small.png"
              alt="Shokolatte Logo"
              className="w-[200px] mt-6 drop-shadow-md"
            />
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <div className="relative h-[40vh] w-full">
          <img
            src="/dark-coffee-bean-pile.png"
            alt="Coffee Beans"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl font-bold uppercase tracking-wider text-white md:text-5xl">
              ABOUT US
            </h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="mb-8 flex items-center gap-2">
            <Link href="/" className="text-amber-400 hover:underline">
              Home
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-gray-400">About Us</span>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white">Our Story</h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  Barista Blueprint was founded in 2015 by Maria Alvarez, a
                  passionate coffee professional with over 15 years of
                  experience in the specialty coffee industry. After working as
                  a barista, café manager, and coffee consultant, Maria
                  recognized a gap in the market for high-quality, hands-on
                  coffee training.
                </p>
                <p>
                  What began as small workshops for local café staff quickly
                  grew into a comprehensive training center offering courses for
                  everyone from home enthusiasts to professional baristas and
                  café owners.
                </p>
                <p>
                  Today, Barista Blueprint has trained over 2,000 students from
                  around the world, helping them develop their skills and
                  passion for exceptional coffee. Our alumni have gone on to win
                  barista competitions, open successful cafés, and transform the
                  coffee culture in their communities.
                </p>
                <p>
                  We believe that great coffee is a craft that combines science,
                  art, and passion. Our courses are designed to give you the
                  knowledge and practical skills needed to master this craft,
                  whether you're making coffee at home or pursuing a career in
                  the industry.
                </p>
              </div>

              <h3 className="mb-4 mt-8 text-2xl font-bold text-white">
                Our Mission
              </h3>
              <p className="mb-8 text-gray-400">
                Our mission is to elevate coffee culture through education,
                making specialty coffee more accessible and enjoyable for
                everyone. We're committed to sharing knowledge, fostering
                community, and promoting sustainable practices throughout the
                coffee supply chain.
              </p>

              <h3 className="mb-4 text-2xl font-bold text-white">Our Values</h3>
              <ul className="mb-8 list-inside list-disc space-y-2 text-gray-400">
                <li>Excellence in everything we do</li>
                <li>Continuous learning and improvement</li>
                <li>Respect for coffee producers and the environment</li>
                <li>Inclusivity and accessibility in coffee education</li>
                <li>Community and connection through shared passion</li>
              </ul>
            </div>

            <div className="space-y-8">
              <img
                src="/instructor.png"
                alt="Maria Alvarez, Founder"
                className="w-full rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Link href="/#training">
              <Button className="bg-amber-400 text-gray-900 hover:bg-amber-500">
                Explore Our Courses
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-black py-8 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-500">
            © 2025 Shokolatte. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
