import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  return (
    <section id="experience" className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transform -rotate-1 rounded-3xl"></div>
      <Card className="relative bg-gray-800/90 border-gray-700 backdrop-blur-md overflow-hidden shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            Experience
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-8">
            <li className="relative pl-6 pb-8 border-l-2 border-gray-700">
              <div className="absolute left-[-5px] top-0 w-3 h-3 bg-pink-500 rounded-full"></div>
              <h3 className="font-semibold text-xl text-gray-200">Senior Developer - Tech Corp</h3>
              <p className="text-sm text-gray-400 mb-2">2020 - Present</p>
              <p className="text-gray-300 mb-4">Led development of scalable web applications using MERN stack.</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-gray-700 text-gray-200">
                  React
                </Badge>
                <Badge variant="secondary" className="bg-gray-700 text-gray-200">
                  Node.js
                </Badge>
                <Badge variant="secondary" className="bg-gray-700 text-gray-200">
                  MongoDB
                </Badge>
                <Badge variant="secondary" className="bg-gray-700 text-gray-200">
                  Express
                </Badge>
              </div>
            </li>
            <li className="relative pl-6 border-l-2 border-gray-700">
              <div className="absolute left-[-5px] top-0 w-3 h-3 bg-purple-500 rounded-full"></div>
              <h3 className="font-semibold text-xl text-gray-200">Full Stack Developer - Web Solutions Inc</h3>
              <p className="text-sm text-gray-400 mb-2">2018 - 2020</p>
              <p className="text-gray-300 mb-4">Developed and maintained client websites and internal tools.</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-gray-700 text-gray-200">
                  JavaScript
                </Badge>
                <Badge variant="secondary" className="bg-gray-700 text-gray-200">
                  PHP
                </Badge>
                <Badge variant="secondary" className="bg-gray-700 text-gray-200">
                  MySQL
                </Badge>
                <Badge variant="secondary" className="bg-gray-700 text-gray-200">
                  Laravel
                </Badge>
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}

