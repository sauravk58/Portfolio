import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = {
  "Programming Languages": [
    { name: "C", level: 80 },
    { name: "C++", level: 90 },
    { name: "Java", level: 85 },
    { name: "JavaScript (ES6+)", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Python", level: 90 },
    { name: "SQL", level: 85 },
    { name: "HTML/CSS", level: 95 },
  ],
  "Frameworks and Libraries": [
    { name: "React.js (v18+)", level: 95 },
    { name: "Next.js 15", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Express", level: 85 },
    { name: "Tailwind CSS", level: 95 },
    { name: "RESTful APIs", level: 90 },
  ],
  "Databases / Development Tools": [
    { name: "MongoDB", level: 85 },
    { name: "Supabase", level: 80 },
    { name: "MySQL", level: 85 },
    { name: "Git", level: 90 },
    { name: "GitHub", level: 90 },
    { name: "Postman", level: 85 },
    { name: "Figma", level: 80 },
    { name: "VS Code", level: 90 },
    { name: "Linux", level: 80 },
  ],
  "Generative AI and Developer Tools": [
    { name: "ChatGPT API", level: 85 },
    { name: "GitHub Copilot", level: 85 },
    { name: "Vercel v0", level: 80 },
    { name: "Claude", level: 75 },
    { name: "Cursor", level: 75 },
  ],
  Coursework: [
    { name: "Data Structures and Algorithms (DSA)", level: 90 },
    { name: "Object-Oriented Programming (OOP)", level: 90 },
    { name: "Verilog HDL", level: 70 },
  ],
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 px-4 sm:px-6 lg:px-8">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transform rotate-1 rounded-3xl"></div>

      <Card className="relative bg-gray-800/90 border-gray-700 backdrop-blur-md overflow-hidden shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            Skills
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, categorySkills]) => (
              <Card
                key={category}
                className="bg-gray-900/50 border-gray-700 hover:border-pink-500 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-200">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <Badge
                        key={skill.name}
                        variant="secondary"
                        className="bg-gray-700 text-gray-200 hover:bg-gray-600 transition-colors duration-200"
                      >
                        {skill.name}
                        <span className="ml-1 text-xs opacity-70">({skill.level}%)</span>
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
