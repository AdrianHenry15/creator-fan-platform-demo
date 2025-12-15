import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Creator Fan Platform – Demo",
  description:
    "Demo platform for artists to own fans, music, and monetization.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-gray-100 antialiased">
        {children}
      </body>
    </html>
  )
}
