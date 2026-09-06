import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Aqua Loop - AI-Powered Smart Water Treatment",
  description: "AI-powered smart water treatment optimization and circular water management platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
