import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transform rotate-1 rounded-3xl"></div>
      <Card className="relative bg-gray-800/90 border-gray-700 backdrop-blur-md overflow-hidden shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            Contact Me
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-pink-500" />
                <a
                  href="mailto:sauravkushwaha666@gmail.com"
                  className="text-gray-200 hover:text-pink-500 transition-colors"
                >
                  sauravkushwaha666@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-pink-500" />
                <a href="tel:+917016073237" className="text-gray-200 hover:text-pink-500 transition-colors">
                  +91 7016073237
                </a>
              </div>
              <p className="text-gray-400">
                Feel free to reach out to me directly via email or phone. I'll get back to you as soon as possible.
              </p>
            </div>
            <form className="space-y-4">
              <Input
                name="name"
                placeholder="Your Name"
                className="bg-gray-900 border-gray-700 text-gray-200"
                required
              />
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                className="bg-gray-900 border-gray-700 text-gray-200"
                required
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                className="bg-gray-900 border-gray-700 text-gray-200 min-h-[120px]"
                required
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

