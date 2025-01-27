import Hero from "@/components/Hero"
import About from "@/components/About"
// import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Achievements from "@/components/Achievements"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <div className="relative">
      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>
        <div className="max-w-6xl mx-auto px-4 py-16 space-y-32">
          <section id="about">
            <About />
          </section>
          {/* <section id="experience">
            <Experience />
          </section> */}
          <section id="projects">
            <Projects />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="achievements">
            <Achievements />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </main>
    </div>
  )
}

