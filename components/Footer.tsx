// import { Github, Linkedin, Twitter } from "lucide-react"
import { SiGithub, SiLinkedin } from "react-icons/si"
import { FaTwitter } from "react-icons/fa"
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        <div className="flex space-x-4 mb-4">
          <a
            href="https://github.com/sauravk58"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            {/* <Github className="h-6 w-6" /> */}
            <SiGithub className="h-8 w-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/77sauravkumar/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            {/* <Linkedin className="h-6 w-6" /> */}
            <SiLinkedin className="h-8 w-8" />
          </a>
          <a
            href="https://twitter.com/sauravk58"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            {/* <Twitter className="h-6 w-6" /> */}
            <FaTwitter className="h-8 w-8" />
          </a>
        </div>
        <p className="text-sm text-gray-500">© 2025 Saurav Kumar. All rights reserved.</p>
      </div>
    </footer>
  )
}

