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
            {/* Software Engineering Intern */}
            <li className="relative pl-6 pb-8 border-l-2 border-gray-700">
              <div className="absolute left-[-5px] top-0 w-3 h-3 bg-pink-500 rounded-full"></div>
              <h3 className="font-semibold text-xl text-gray-200">
                Software Engineering Intern (Founder&apos;s Office) - GoBasera
              </h3>
              <p className="text-sm text-gray-400 mb-2">Nov 2025 - Present · Remote</p>
              <ul className="list-disc ml-5 text-gray-300 mb-4 space-y-2">
                <li>
                  Collaborated directly with the <strong>Founder’s Office</strong> to design and develop GoBasera’s
                  society management SaaS platform using{" "}
                  <strong>React, NestJS, and PostgreSQL</strong>, focusing on scalability and user experience.
                </li>
                <li>
                  Implemented <strong>role-based authentication</strong> (Firebase OTP, password login),{" "}
                  <strong>online payment integration</strong> (Razorpay/UPI), and multi-step registration flows,
                  contributing to core product functionality.
                </li>
                <li>
                  Built and deployed full-stack features with <strong>CI/CD pipelines</strong> on GCP, ensuring smooth
                  delivery and <strong>high code quality</strong> in an agile, startup-style environment.
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-gray-700 text-gray-200">React</Badge>
                <Badge className="bg-gray-700 text-gray-200">NestJS</Badge>
                <Badge className="bg-gray-700 text-gray-200">PostgreSQL</Badge>
                <Badge className="bg-gray-700 text-gray-200">GCP</Badge>
                <Badge className="bg-gray-700 text-gray-200">Firebase</Badge>
                <Badge className="bg-gray-700 text-gray-200">Razorpay</Badge>
              </div>
            </li>

            {/* Frontend Developer - Freelance */}
            <li className="relative pl-6 border-l-2 border-gray-700">
              <div className="absolute left-[-5px] top-0 w-3 h-3 bg-purple-500 rounded-full"></div>
              <h3 className="font-semibold text-xl text-gray-200">
                Frontend Developer | Freelance - Outlier
              </h3>
              <p className="text-sm text-gray-400 mb-2">May 2025 - Present · Remote</p>
              <ul className="list-disc ml-5 text-gray-300 mb-4 space-y-2">
                <li>
                  Built and optimized responsive web applications using{" "}
                  <strong>React.js, TypeScript, Next.js, Tailwind CSS,</strong> and core{" "}
                  <strong>HTML/CSS/JavaScript</strong>.
                </li>
                <li>
                  Completed 8+ tasks focused on enhancing <strong>LLM (Large Language Model)</strong> performance through
                  UI improvements and <strong>structured prompt design</strong>.
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-gray-700 text-gray-200">React.js</Badge>
                <Badge className="bg-gray-700 text-gray-200">TypeScript</Badge>
                <Badge className="bg-gray-700 text-gray-200">Next.js</Badge>
                <Badge className="bg-gray-700 text-gray-200">Tailwind CSS</Badge>
                <Badge className="bg-gray-700 text-gray-200">HTML</Badge>
                <Badge className="bg-gray-700 text-gray-200">JavaScript</Badge>
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}
