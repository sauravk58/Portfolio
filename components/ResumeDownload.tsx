import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function ResumeDownload() {
  return (
    <section className="text-center">
      <Button className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition-all duration-300">
        <Download className="mr-2 h-4 w-4" /> Download Resume
      </Button>
    </section>
  )
}

