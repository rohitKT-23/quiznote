import { GeistMono, GeistSans } from "@/assets/font"
import "./globals.css"

export const metadata = {
  title: "Quiznote | Powered by Google Gemini",
  description:
    "Generate quizzes from your notes using the AI-powered quiz generator"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} ${GeistMono.variable} bg-sunny pattern text-zinc-800`}
      >
        {children}
      </body>
    </html>
  )
}
