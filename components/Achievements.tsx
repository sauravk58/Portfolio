"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Star, BookOpen, Code, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const achievements = [
  {
    icon: Trophy,
    title: "Naukri Campus Young Turks",
    description: "-Achieved a rank of 28,850 out of 520,000 participants in the Naukri Campus Young Turks program.",
  },
  {
    icon: Code,
    title: "CodeKaze by Coding Ninjas",
    description:
      "-Participated in CodeKaze, gaining valuable experience in competitive coding and algorithmic problem-solving.",
  },
  {
    icon: Star,
    title: "Hackathon",
    description:(
      <>
        <div>- Secured 165th rank out of 18,720+ teams in Amazon ML Challenge 2024.</div>
        <div>- Competed in the Sparkathon Hackathon, powered by Walmart,& solving real-world challenges.</div>
      </>
    )
      ,
  },
  {
    icon: BookOpen,
    title: "Coding Platforms",
    description: "-Solved 300+ questions on LeetCode and 200+ on CodeChef. demonstrating strong problem-solving skills.",
  },
]

const certificates = [
  {
    title: "Codekaze",
    issuer: "Coding Ninjas",
    date: "2024",
    image: "/codekaze.png?height=100&width=200",
    link: "https://drive.google.com/file/d/1vArUmKnjXg3TKVxk1ygQj7bSCjMSrmLR/view?usp=drive_link",
  },
  {
    title: "Amazon ML Chanllenge",
    issuer: "Amazon",
    date: "2024",
    image: "/amazon-ml-challenge.png?height=100&width=200",
    link: "https://drive.google.com/file/d/1ubNLCEnMnQ9WAQJJgDyq3mf3O5MmtDTG/view?usp=drive_link",
  },
  {
    title: "Naukri Campus Young Turks",
    issuer: "Naukri Campus",
    date: "2024",
    image: "/naukri campus.png?height=100&width=200",
    link: "https://drive.google.com/file/d/1Km1iDzEBnj_d52XMhsnJdkUzw4UnCPit/view?usp=drive_link",
  },
  {
    title: "Sparkathon Hackathon",
    issuer: "Walmart",
    date: "2024",
    image: "/Sparkathon.jpg?height=100&width=200",
    link: "https://drive.google.com/file/d/1g0X8-jpBJEXTFoM89SnohBt9JYHk7032/view?usp=drive_link",
  },
]

export default function Achievements() {
  const [showAllCertificates, setShowAllCertificates] = useState(false)

  const visibleCertificates = showAllCertificates ? certificates : certificates.slice(0, 3)

  const handleCertificateClick = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="achievements" className="relative py-16 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transform rotate-1 rounded-3xl"></div>
      <Card className="relative bg-gray-800/90 border-gray-700 backdrop-blur-md overflow-hidden shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            Achievements & Certifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-700 hover:border-pink-500 transition-all duration-300"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <achievement.icon className="w-12 h-12 text-pink-500 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-200 mb-2">{achievement.title}</h3>
                    <p className="text-gray-400">{achievement.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-4">Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {visibleCertificates.map((cert, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-gray-700 hover:border-pink-500 transition-all duration-300 cursor-pointer"
                  onClick={() => handleCertificateClick(cert.link)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="relative w-16 h-16">
                        <Image
                          src={cert.image || "/placeholder.svg"}
                          alt={cert.title}
                          layout="fill"
                          objectFit="contain"
                          className="rounded"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-200">{cert.title}</h4>
                        <p className="text-sm text-gray-400">{cert.issuer}</p>
                        <p className="text-xs text-gray-500">{cert.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            {certificates.length > 3 && (
              <div className="mt-6 text-center">
                <Button
                  onClick={() => setShowAllCertificates(!showAllCertificates)}
                  variant="outline"
                  className="rounded-full bg-gray-700 hover:bg-gray-600 text-gray-200"
                >
                  {showAllCertificates ? (
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
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

