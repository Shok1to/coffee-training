import Link from "next/link"
import { FaInstagram, FaYoutube } from "react-icons/fa"
import { SiTiktok } from "react-icons/si"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-950 text-gray-200">
      <header className="absolute top-0 z-50 w-full">
        <div className="flex items-center justify-between px-4 py-2">
          <Link href="/">
            <div className="-mt-3">
              {" "}
              {/* move only logo */}
              <img
                src="/Shokolatte-small.png"
                alt="Shokolatte Logo"
                className="h-[15rem] w-auto drop-shadow-md"
              />
            </div>
          </Link>

          <div className="mt-8">
            {" "}
            {/* move only nav */}
            <nav className="hidden md:flex md:gap-8">
              <Link
                href="#about"
                className="text-sm font-medium uppercase tracking-wider text-gray-300 transition-colors hover:text-amber-400"
              >
                About us
              </Link>
              <Link
                href="#training"
                className="text-sm font-medium uppercase tracking-wider text-gray-300 transition-colors hover:text-amber-400"
              >
                Training
              </Link>
              <Link
                href="#gallery"
                className="text-sm font-medium uppercase tracking-wider text-gray-300 transition-colors hover:text-amber-400"
              >
                Gallery
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-medium uppercase tracking-wider text-gray-300 transition-colors hover:text-amber-400"
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium uppercase tracking-wider text-gray-300 transition-colors hover:text-amber-400"
              >
                Contacts
              </Link>
            </nav>
          </div>
          <div className="hidden space-x-4 md:flex">
            <Link
              href="https://www.instagram.com/barista_blueprint"
              className="text-gray-300 transition-colors hover:text-amber-400"
            >
              <FaInstagram className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.tiktok.com/@barista_blueprint"
              className="text-gray-300 transition-colors hover:text-amber-400"
            >
              <SiTiktok className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-300 transition-colors hover:text-amber-400"
            >
              <FaYoutube className="h-5 w-5" />
            </Link>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="text-white md:hidden"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative flex min-h-screen items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img
              src="/latte-art-pouring.jpg"
              alt="Barista creating latte art"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
          <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-4 py-24 text-center md:py-32">
            <span className="mb-4 font-serif text-xl italic text-amber-400">
              Barista Blueprint
            </span>
            <h1 className="mb-8 text-5xl font-bold uppercase tracking-wider text-white md:text-7xl">
              SHOKOLATTE
            </h1>
            <div className="h-1 w-16 bg-amber-400"></div>
            <p className="mt-8 max-w-2xl text-lg text-gray-300">
              Coffee skills for everyone — baristas, coffee lovers, and
              dreamers.
            </p>
          </div>
        </section>

        <section id="training" className="bg-gray-900 py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <span className="font-serif text-xl italic text-amber-400">
                Modern techniques. Real-world skills.
              </span>
              <h2 className="mt-2 text-4xl font-bold uppercase tracking-wider text-white">
                Hands-On Coffee Training
              </h2>
              <div className="mx-auto mt-4 h-1 w-16 bg-amber-400"></div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="group overflow-hidden rounded-lg bg-gray-800 shadow-md transition-all hover:shadow-xl hover:shadow-amber-900/20"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:opacity-0"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-white">
                      {course.title}
                    </h3>
                    <p className="mb-4 text-gray-400">{course.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-amber-400">
                        ${course.price}
                      </span>
                      <Link href={`/courses/${course.id}`}>
                        <Button
                          variant="outline"
                          className="border-amber-400 text-amber-400 transition-colors hover:bg-amber-400 hover:text-gray-900"
                        >
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-gray-950 py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <span className="font-serif text-xl italic text-amber-400">
                  Who We Are
                </span>
                <h2 className="mt-2 text-4xl font-bold uppercase tracking-wider text-white">
                  ABOUT US
                </h2>
                <div className="mt-4 h-1 w-16 bg-amber-400"></div>
                <div className="mt-8 space-y-4 text-gray-400">
                  <p>
                    Shokolatte was founded by a passionate coffee professional
                    with nearly 10 years of hands-on experience in the specialty
                    coffee world.
                  </p>
                  <p>
                    My coffee journey began in 2016, when I met my mentor while
                    working as a barista. Without his guidance, I wouldn’t be
                    where I am today. I believe that who you learn from shapes
                    your skills and passion more than how long you've been
                    making coffee.
                  </p>
                  <p>
                    Over the years, I've worked as a café manager, a company
                    barista trainer, and have trained countless baristas. I also
                    traveled to New Zealand to train at La Marzocco, one of the
                    world’s leading espresso machine makers.
                  </p>
                  <p>
                    My mission is simple: to pass on real-world, hands-on skills
                    that help you grow with confidence — whether you're just
                    starting out or refining your craft.
                  </p>

                  <p>
                    Great coffee is built on passion, precision, and the right
                    guidance — and I’m excited to share that journey with you.
                  </p>
                </div>
                <Link href="/about">
                  <Button className="mt-8 bg-amber-400 text-gray-900 hover:bg-amber-500">
                    Read More
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="w-full md:w-[500px] mx-auto">
                  <img
                    src="/about-coffee-3.jpg"
                    alt="Espresso machine"
                    className="w-full rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="bg-gray-900 py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <span className="font-serif text-xl italic text-amber-400">
                No Experience Needed
              </span>
              <h2 className="mt-2 text-4xl font-bold uppercase tracking-wider text-white">
                Your Coffee Journey Starts Here
              </h2>
              <div className="mx-auto mt-4 h-1 w-16 bg-amber-400"></div>
              <p className="mx-auto mt-6 max-w-2xl text-gray-400">
                Whether you're picking up a milk pitcher for the first time or
                perfecting your pour, our workshops are a relaxed space to
                learn, laugh, and create amazing latte art.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-square overflow-hidden rounded-lg shadow-md transition-all hover:shadow-xl hover:shadow-amber-900/20"
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="absolute bottom-0 left-0 w-full p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-sm font-medium">{image.alt}</p>
                    {image.student && (
                      <p className="text-xs text-amber-400">
                        By {image.student}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/gallery">
                <Button className="bg-amber-400 text-gray-900 hover:bg-amber-500">
                  View Full Gallery
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-gray-950 py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <span className="font-serif text-xl italic text-amber-400">
                What People Say
              </span>
              <h2 className="mt-2 text-4xl font-bold uppercase tracking-wider">
                TESTIMONIALS
              </h2>
              <div className="mx-auto mt-4 h-1 w-16 bg-amber-400"></div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-gray-800 p-8 shadow-lg"
                >
                  <div className="mb-6 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-amber-400"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="mb-6 italic text-gray-300">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="flex items-center">
                    <div>
                      <h4 className="font-bold text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-amber-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gray-900 py-20">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <span className="font-serif text-xl italic text-amber-400">
                Get In Touch
              </span>
              <h2 className="mt-2 text-4xl font-bold uppercase tracking-wider text-white">
                CONTACT US
              </h2>
              <div className="mx-auto mt-4 h-1 w-16 bg-amber-400"></div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-2xl">
                <form className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-gray-300"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full rounded-md border border-gray-700 bg-gray-800 p-3 text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-300"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full rounded-md border border-gray-700 bg-gray-800 p-3 text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full rounded-md border border-gray-700 bg-gray-800 p-3 text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none"
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-gray-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full rounded-md border border-gray-700 bg-gray-800 p-3 text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-amber-400 text-gray-900 hover:bg-amber-500">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
            <div className="flex items-center gap-2">
              <img
                src="/Shokolatte-small.png"
                alt="Shokolatte Logo"
                className="w-[160px] mt-[-5px] drop-shadow-md"
              />
              <div className="flex flex-col">
                <div className="text-gray-300">
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:info@shokolatte.com"
                      className="text-yellow-400 hover:underline"
                    >
                      info@shokolatte.com
                    </a>
                  </p>
                  <p className="mt-4 text-sm text-gray-400 italic">
                    I currently offer barista training at partner cafes and
                    client locations. I’m also open to freelance web projects —
                    especially in the coffee space.
                  </p>
                  <p className="mt-2 text-sm text-gray-400 italic">
                    Let’s connect to talk training, collaboration, or your
                    website idea!
                  </p>
                </div>
              </div>
            </div>
            <div className="flex space-x-6">
              <Link
                href="https://www.instagram.com/barista_blueprint"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-amber-400"
              >
                <FaInstagram className="h-5 w-5" />
              </Link>

              <Link
                href="https://www.tiktok.com/@barista_blueprint"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-amber-400"
              >
                <SiTiktok className="h-5 w-5" />
              </Link>

              <Link
                href="#"
                className="text-gray-400 transition-colors hover:text-amber-400"
              >
                <FaYoutube className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>© 2025 Shokolatte. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const courses = [
  {
    id: 1,
    title: "Barista Training for Café & Restaurant",
    description:
      "Help your team serve better coffee—fast. This course covers all the basics your staff need to make coffee confidently and keep customers coming back.",
    image: "/restaurant.jpeg",
    price: 599,
  },
  {
    id: 2,
    title: "Latte Art Fun Workshop",
    description:
      "Love coffee? Come play with milk and espresso! This casual, hands-on workshop is perfect for anyone who wants to try latte art and have a great time, no skills required.",
    image: "/latteart.jpeg",
    price: 399,
  },
  {
    id: 3,
    title: "Coffee Roasting",
    description: "Learn the art and science of roasting the perfect bean",
    image: "/course-roasting.jpg",
    price: 799,
  },
]

const testimonials = [
  {
    name: "Sagun",
    role: "Café Owner",
    quote:
      "The training I received at Shokolatte completely transformed my coffee skills. The hands-on approach and expert instruction gave me the confidence to excel in my own café.",
  },
  {
    name: "Beatrice",
    role: "Home Enthusiast",
    quote:
      "After completing the barista fundamentals course, I can now make café-quality coffee at home. The techniques I learned have completely changed my morning routine.",
  },
  {
    name: "Nicole",
    role: "Aspiring Barista",
    quote:
      "The Latte Art course was incredible! I went from barely being able to steam milk to creating beautiful designs. Now I'm working at my first barista job thanks to these skills.",
  },
]

const galleryImages = [
  {
    src: "/gallery/latte-art-1.png",
    alt: "Tulip Latte Art",
    student: "Emma R.",
  },
  {
    src: "/gallery/latte-art-2.png",
    alt: "Rosetta Latte Art",
    student: "Michael C.",
  },
  {
    src: "/Victor.jpg",
    alt: "Tulip Latte Art",
    student: "Victor G.",
  },
  {
    src: "/Jasmine.jpeg",
    alt: "Swan Latte Art",
    student: "Jasmine P.",
  },
]
