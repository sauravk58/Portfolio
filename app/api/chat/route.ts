import { GoogleGenerativeAI } from "@google/generative-ai"
import { streamText } from "ai"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

export const runtime = "edge"

export async function POST(req: Request) {
  const { messages } = await req.json()
  const model = genAI.getGenerativeModel({ model: "gemini-pro" })

  const chat = model.startChat({
    history: messages.slice(0, -1).map((message: any) => ({
      role: message.role,
      parts: message.content,
    })),
    generationConfig: {
      maxOutputTokens: 100,
    },
  })

  const result = await chat.sendMessageStream(messages[messages.length - 1].content)

  return streamText(result)
}

