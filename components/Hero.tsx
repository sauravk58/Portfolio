"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, Mail } from "lucide-react"
import { SiGithub, SiLinkedin } from "react-icons/si"
import { FaTwitter } from "react-icons/fa"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden">
      <Card className="w-full max-w-5xl mx-auto bg-gray-800/50 border-gray-700 backdrop-blur-md overflow-hidden shadow-2xl relative z-10">
        <div className="flex flex-col md:flex-row items-center p-8 relative z-20">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full animate-spin-slow"></div>
              <Image
                src="/profile.jpg?height=400&width=500"
                alt="Profile Picture"
                width={500}
                height={400}
                className="rounded-full border-4 border-gray-800 shadow-lg relative z-10 p-1 bg-gray-900"
              />
            </div>
          </div>
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              Saurav Kumar
            </h1>
            <motion.p
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="inline-block">Full</span> <span className="inline-block">Stack</span>{" "}
              <span className="inline-block">Developer</span>
            </motion.p>
            <p className="text-gray-400">
              Passionate about creating elegant, efficient, and user-friendly web applications. Experienced in MERN
              stack and always eager to learn new technologies.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <div className="flex space-x-4 mb-4 w-full">
                <Button variant="outline" size="icon" className="rounded-full bg-gray-700 hover:bg-gray-600" asChild>
                  <a
                    href="https://github.com/sauravk58"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault()
                      window.open("https://github.com/sauravk58", "_blank", "noopener,noreferrer")
                    }}
                  >
                    <SiGithub className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full bg-gray-700 hover:bg-gray-600" asChild>
                  <a
                    href="https://www.linkedin.com/in/77sauravkumar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault()
                      window.open("https://www.linkedin.com/in/77sauravkumar/", "_blank", "noopener,noreferrer")
                    }}
                  >
                    <SiLinkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full bg-gray-700 hover:bg-gray-600" asChild>
                  <a
                    href="https://twitter.com/sauravk58"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault()
                      window.open("https://twitter.com/sauravk58", "_blank", "noopener,noreferrer")
                    }}
                  >
                    <FaTwitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                </Button>
              </div>
              <div className="flex space-x-4 w-full">
                <Button
                  className="rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 flex-grow"
                  asChild
                >
                  <a
                    href="https://drive.google.com/file/d/17kK30mIwxcQe8xnrhBCLFxRW4uXa1MqW/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Resume
                  </a>
                </Button>
                <Button
                  className="rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 flex-grow"
                  onClick={scrollToContact}
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  )
}

