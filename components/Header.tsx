"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Menu, X, Home } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 100 // Adjust this value as needed
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/80 backdrop-blur-md shadow-lg" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="relative w-8 h-8 rounded-full overflow-hidden">
            <Image src="/profile.jpg?height=32&width=32" alt="Profile Picture" layout="fill" objectFit="cover" />
          </div>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            Saurav Kumar
          </h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-1">
            <li>
              <Button
                variant="ghost"
                className={`text-white hover:text-pink-500 transition-colors ${
                  activeSection === "home" ? "bg-gray-700/50" : ""
                }`}
                onClick={() => scrollToSection("home")}
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className={`text-white hover:text-pink-500 transition-colors ${
                  activeSection === "about" ? "bg-gray-700/50" : ""
                }`}
                onClick={() => scrollToSection("about")}
              >
                About
              </Button>
            </li>
            {/* <li>
              <Button
                variant="ghost"
                className={`text-white hover:text-pink-500 transition-colors ${
                  activeSection === "experience" ? "bg-gray-700/50" : ""
                }`}
                onClick={() => scrollToSection("experience")}
              >
                Experience
              </Button>
            </li> */}
            <li>
              <Button
                variant="ghost"
                className={`text-white hover:text-pink-500 transition-colors ${
                  activeSection === "projects" ? "bg-gray-700/50" : ""
                }`}
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className={`text-white hover:text-pink-500 transition-colors ${
                  activeSection === "skills" ? "bg-gray-700/50" : ""
                }`}
                onClick={() => scrollToSection("skills")}
              >
                Skills
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className={`text-white hover:text-pink-500 transition-colors ${
                  activeSection === "achievements" ? "bg-gray-700/50" : ""
                }`}
                onClick={() => scrollToSection("achievements")}
              >
                Achievements
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className={`text-white hover:text-pink-500 transition-colors ${
                  activeSection === "contact" ? "bg-gray-700/50" : ""
                }`}
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </Button>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md">
          <nav className="px-4 py-2">
            <ul className="space-y-2">
              <li>
                <Button
                  variant="ghost"
                  className={`w-full text-left text-white hover:text-pink-500 transition-colors ${
                    activeSection === "home" ? "bg-gray-700/50" : ""
                  }`}
                  onClick={() => scrollToSection("home")}
                >
                  <Home className="w-4 h-4 mr-2 inline" />
                  Home
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className={`w-full text-left text-white hover:text-pink-500 transition-colors ${
                    activeSection === "about" ? "bg-gray-700/50" : ""
                  }`}
                  onClick={() => scrollToSection("about")}
                >
                  About
                </Button>
              </li>
              {/* <li>
                <Button
                  variant="ghost"
                  className={`w-full text-left text-white hover:text-pink-500 transition-colors ${
                    activeSection === "experience" ? "bg-gray-700/50" : ""
                  }`}
                  onClick={() => scrollToSection("experience")}
                >
                  Experience
                </Button>
              </li> */}
              <li>
                <Button
                  variant="ghost"
                  className={`w-full text-left text-white hover:text-pink-500 transition-colors ${
                    activeSection === "projects" ? "bg-gray-700/50" : ""
                  }`}
                  onClick={() => scrollToSection("projects")}
                >
                  Projects
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className={`w-full text-left text-white hover:text-pink-500 transition-colors ${
                    activeSection === "skills" ? "bg-gray-700/50" : ""
                  }`}
                  onClick={() => scrollToSection("skills")}
                >
                  Skills
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className={`w-full text-left text-white hover:text-pink-500 transition-colors ${
                    activeSection === "achievements" ? "bg-gray-700/50" : ""
                  }`}
                  onClick={() => scrollToSection("achievements")}
                >
                  Achievements
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className={`w-full text-left text-white hover:text-pink-500 transition-colors ${
                    activeSection === "contact" ? "bg-gray-700/50" : ""
                  }`}
                  onClick={() => scrollToSection("contact")}
                >
                  Contact
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

