import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function GalleryPage() {
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
            <div className="flex flex-col"></div>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <div className="relative h-[40vh] w-full">
          <img
            src="/latte-art-moment.png"
            alt="Latte Art"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl font-bold uppercase tracking-wider text-white md:text-5xl">
              STUDENT GALLERY
            </h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="mb-8 flex items-center gap-2">
            <Link href="/" className="text-amber-400 hover:underline">
              Home
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-gray-400">Gallery</span>
          </div>

          <div className="mb-12 max-w-3xl">
            <p className="text-gray-400">
              From first pours to beautiful designs, our students grow their
              skills one cup at a time. Take a look at the amazing art created
              during our hands-on workshops.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="mb-6 text-2xl font-bold text-white">Latte Art</h3>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {latteArtImages.map((image, index) => (
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

const latteArtImages = [
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
    src: "/gallery/latte-art-3.png",
    alt: "Heart Latte Art",
    student: "Sarah J.",
  },
  {
    src: "/gallery/latte-art-4.png",
    alt: "Swan Latte Art",
    student: "David L.",
  },
  {
    src: "/gallery/latte-art-5.png",
    alt: "Phoenix Latte Art",
    student: "Jessica T.",
  },
  {
    src: "/latte-art-moment.png",
    alt: "Multi-layer Latte Art",
    student: "Alex K.",
  },
  {
    src: "/latte-artisan.png",
    alt: "Intricate Rosetta",
    student: "Olivia P.",
  },
  {
    src: "/latte-art-pour.png",
    alt: "Perfect Pour",
    student: "James W.",
  },
]

const trainingImages = [
  {
    src: "/gallery/barista-training-1.jpg",
    alt: "Espresso Training Session",
    description: "Students learning proper tamping technique",
  },
  {
    src: "/gallery/barista-training-2.jpg",
    alt: "Milk Steaming Class",
    description: "Practicing milk texturing for latte art",
  },
  {
    src: "/gallery/barista-training-3.jpg",
    alt: "Coffee Cupping Session",
    description: "Evaluating coffee flavors and aromas",
  },
  {
    src: "/barista-training-session.png",
    alt: "Hands-on Brewing Workshop",
    description: "Learning various manual brewing methods",
  },
  {
    src: "/barista-pouring.png",
    alt: "Pour-Over Demonstration",
    description: "Instructor demonstrating precise pour-over technique",
  },
  {
    src: "/barista-hero.jpg",
    alt: "Advanced Barista Training",
    description: "Professional workflow and efficiency training",
  },
]

const successStories = [
  {
    name: "Emma Rodriguez",
    avatar: "/serene-latina.png",
    course: "Latte Art Mastery",
    quote:
      "The Latte Art course was incredible! I went from barely being able to steam milk to creating beautiful designs. Now I'm working at my first barista job thanks to these skills.",
    achievement: "Won 3rd place in the Regional Latte Art Championship",
  },
  {
    name: "Michael Chen",
    avatar: "/thoughtful-gaze.png",
    course: "Coffee Roasting",
    quote:
      "After completing the roasting course, I started my own small-batch roasting business. The knowledge I gained about bean selection and roast profiles was invaluable.",
    achievement:
      "Founded 'Chen's Micro Roastery' now supplying to 5 local cafés",
  },
  {
    name: "Sarah Johnson",
    avatar: "/restaurant.jpeg",
    course: "Barista Fundamentals",
    quote:
      "The training I received at Barista Blueprint completely transformed my coffee skills. The hands-on approach and expert instruction gave me the confidence to excel.",
    achievement:
      "Promoted to Head Barista at Café Noir within 3 months of completing the course",
  },
]
