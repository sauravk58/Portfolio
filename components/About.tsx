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
          I am currently a 3rd-year undergraduate student at IIIT Nagpur, passionate about competitive programming and problem-solving. I have solid experience with data structures and algorithms in C++ and have also explored various aspects of web development. 
          With expertise in the MERN stack, I enjoy tackling complex problems and turning innovative ideas into reality. My
          journey in tech has been driven by curiosity and a constant desire to learn and grow.

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

