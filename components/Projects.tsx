"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import { SiGithub } from "react-icons/si"
import { FaExternalLinkAlt } from "react-icons/fa"
import Image from "next/image"

const projects = [
  {
    title: "Hirrd (Job Portal)",
    description:
      "A responsive job portal enabling users to post, search, and apply for jobs with advanced filters. Integrated Clerk for secure user authentication and Supabase for real-time database management. Designed with Shadcn UI for a modern and user-friendly interface.",
    image: "/hirrd.png?height=200&width=300",
    techStack: ["React.js", "Tailwind CSS", "Supabase", "Clerk Authentication", "Shadcn UI"],
    github: "https://github.com/sauravk58/hirrd",
    demo:null,
  },
  {
    title: "Welth (AI-Finance Platform)",
    description:
      "A full-stack AI-powered finance platform with React 19 and Next.js 15. Integrated Clerk for authentication, Supabase for real-time data, Prisma for database modeling, and Inngest with Arcjet for automation and security.",
    image: "/wealth.png?height=200&width=300",
    techStack: [
      "React 19",
      "Next.js 15",
      "Tailwind CSS",
      "Supabase",
      "Prisma",
      "Clerk Authentication",
      "Inngest",
      "Arcjet",
      "Shadcn UI",
    ],
    github: "https://github.com/sauravk58/welth",
    demo: "https://welth-platform.vercel.app/",
  },
  {
    title: "Carepulse (Healthcare Patient Management)",
    description:
      "A healthcare patient management platform with seamless registration, appointment scheduling, and admin tools. Integrated Twilio for SMS notifications, Appwrite for file storage, and Sentry for performance monitoring.",
    image: "/carepulse.png?height=200&width=300",
    techStack: ["Next.js", "Appwrite", "TypeScript", "TailwindCSS", "ShadCN", "Twilio"],
    github: "https://github.com/sauravk58/carepulse",
    demo: "https://carepulses.vercel.app/",
  },
]

export default function Projects() {
  const [showAll, setShowAll] = useState(false)

  const visibleProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section id="projects" className="relative py-16 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transform rotate-1 rounded-3xl"></div>
      <Card className="relative bg-gray-800/90 border-gray-700 backdrop-blur-md overflow-hidden shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            Projects
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-700 backdrop-blur-md overflow-hidden group hover:shadow-lg transition-all duration-300"
              >
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-200">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-gray-700 text-gray-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="rounded-full bg-gray-700 hover:bg-gray-600" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.preventDefault()
                          window.open(project.github, "_blank", "noopener,noreferrer")
                        }}
                      >
                        <SiGithub className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    {project.demo && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full bg-gray-700 hover:bg-gray-600"
                        asChild
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            e.preventDefault()
                            window.open(project.demo, "_blank", "noopener,noreferrer")
                          }}
                        >
                          <FaExternalLinkAlt className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {projects.length > 3 && (
            <div className="mt-8 text-center">
              <Button
                onClick={() => setShowAll(!showAll)}
                variant="outline"
                className="rounded-full bg-gray-700 hover:bg-gray-600 text-gray-200"
              >
                {showAll ? (
                  <>
                    <ChevronUp className="w-4 h-4 mr-2" />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4 mr-2" />
                    Show More
                  </>
                )}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  )
}

