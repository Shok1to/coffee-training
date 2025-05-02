import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

// Course data
const courses = [
  {
    id: 1,
    title: "Barista Training for Café & Restaurant",
    description:
      "Master the essential skills every barista needs to know, from espresso extraction to milk steaming and basic latte art. This course provides a solid foundation for anyone looking to start a career as a barista or improve their home coffee game.",
    image: "/course-barista.png",
    price: 599,
  },
  {
    id: 2,
    title: "Latte Art Fun Workshop",
    description:
      "Create beautiful designs that will impress your customers. This course focuses exclusively on the art of milk texturing and pouring to create stunning latte art designs including hearts, rosettas, tulips, and more complex patterns.",
    image: "/course-latte-art.jpg",
    price: 399,
  },
  {
    id: 3,
    title: "Coffee Roasting",
    description:
      "Learn the art and science of roasting the perfect bean. This comprehensive course covers everything from green coffee selection to roast profiling and development. You'll understand how to bring out the best flavors in different coffee varieties.",
    image: "/course-roasting.jpg",
    price: 799,
  },
]

// Dynamic route: /courses/[id]
export const dynamic = "force-static"

export default async function CoursePage({
  params,
}: {
  params: { id: string }
}) {
  const course = courses.find((c) => c.id === Number(params.id))

  if (!course) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-950 px-4 text-white">
        <h1 className="mb-4 text-3xl font-bold">Course Not Found</h1>
        <p className="mb-8 text-gray-400">
          The course you're looking for doesn't exist.
        </p>
        <Link href="/#courses">
          <Button className="flex items-center gap-2 bg-amber-400 text-gray-900 hover:bg-amber-500">
            <ArrowLeft className="h-4 w-4" />
            Back to Courses
          </Button>
        </Link>
      </div>
    )
  }

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
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl font-bold uppercase tracking-wider text-white md:text-5xl">
              {course.title}
            </h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="mb-8 flex items-center gap-2">
            <Link href="/#courses" className="text-amber-400 hover:underline">
              Courses
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-gray-400">{course.title}</span>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="mb-6 text-3xl font-bold text-white">
                Course Overview
              </h2>
              <div className="space-y-4 text-gray-400">
                <p>{course.description}</p>
                <p>
                  This comprehensive course is designed to give you all the
                  skills and knowledge you need to excel in this area of coffee
                  craft. Whether you're a beginner or looking to refine your
                  existing skills, this course offers valuable insights and
                  hands-on practice.
                </p>
                <p>
                  Our experienced instructors will guide you through each step
                  of the process, providing personalized feedback and ensuring
                  you master every technique.
                </p>
              </div>

              <h3 className="mb-4 mt-8 text-2xl font-bold text-white">
                What You'll Learn
              </h3>
              <ul className="mb-8 list-inside list-disc space-y-2 text-gray-400">
                <li>
                  Understanding the fundamentals and theory behind{" "}
                  {course.title.toLowerCase()}
                </li>
                <li>Hands-on practice with professional equipment</li>
                <li>Advanced techniques used by industry professionals</li>
                <li>Troubleshooting common issues and challenges</li>
                <li>How to continue developing your skills after the course</li>
              </ul>

              <h3 className="mb-4 text-2xl font-bold text-white">
                Course Details
              </h3>
              <div className="mb-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-gray-900 p-4">
                  <h4 className="mb-2 font-bold text-amber-400">Duration</h4>
                  <p className="text-gray-400">4 weeks (16 hours total)</p>
                </div>
                <div className="rounded-lg bg-gray-900 p-4">
                  <h4 className="mb-2 font-bold text-amber-400">Skill Level</h4>
                  <p className="text-gray-400">Beginner to Intermediate</p>
                </div>
                <div className="rounded-lg bg-gray-900 p-4">
                  <h4 className="mb-2 font-bold text-amber-400">Class Size</h4>
                  <p className="text-gray-400">Maximum 8 students</p>
                </div>
                <div className="rounded-lg bg-gray-900 p-4">
                  <h4 className="mb-2 font-bold text-amber-400">Materials</h4>
                  <p className="text-gray-400">All equipment provided</p>
                </div>
              </div>
            </div>

            <div>
              <div className="sticky top-8 rounded-lg bg-gray-900 p-6 shadow-lg">
                <h3 className="mb-4 text-2xl font-bold text-white">
                  Course Enrollment
                </h3>
                <div className="mb-6 flex items-center justify-between border-b border-gray-800 pb-4">
                  <span className="text-gray-400">Course Price:</span>
                  <span className="text-2xl font-bold text-amber-400">
                    ${course.price}
                  </span>
                </div>
                <div className="mb-6 space-y-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    ✅ Professional certification
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    ✅ Small class sizes
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    ✅ Hands-on practice
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    ✅ Expert instructors
                  </div>
                </div>
                <Button className="w-full bg-amber-400 text-gray-900 hover:bg-amber-500">
                  Enroll Now
                </Button>
                <p className="mt-4 text-center text-sm text-gray-500">
                  Next class starts on May 15, 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-black py-8 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-500">
            © 2025 ShokoLatte. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

// Generate static paths for all course IDs
export async function generateStaticParams() {
  return courses.map((course) => ({
    id: course.id.toString(),
  }))
}
