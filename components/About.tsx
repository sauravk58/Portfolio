import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transform rotate-1 rounded-3xl"></div>
      <Card className="relative bg-gray-800/90 border-gray-700 backdrop-blur-md overflow-hidden shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            About Me
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 leading-relaxed mb-4">
          I’m Saurav Kumar, a final-year B.Tech student at IIIT Nagpur, with a strong focus on full-stack development. 
            Over the past year, I’ve built multiple real-time and scalable web applications, handling both frontend logic and backend architecture. 
            I am actively seeking an internship opportunity in SDE, Full Stack, MERN, Frontend, or Backend development, where I can contribute my skills and grow through impactful work.

          </p>
          {/* <p className="text-gray-300 leading-relaxed mb-4">
            I'm a passionate full-stack developer with a keen eye for detail and a love for clean, efficient code.
            
          </p> */}
          <p className="text-gray-300 leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
            sharing my knowledge through tech blogs and community meetups. I believe in the power of technology to make
            a positive impact, and I'm always excited to take on new challenges that push the boundaries of what's
            possible.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}

