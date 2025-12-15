import ModalRoot from "@/components/modal"
import "./globals.css"
import type { Metadata } from "next"
import ThemeBootstrap from "@/components/theme/theme-bootstrap"
import AudioPlayer from "@/components/audio-player"

export const metadata: Metadata = {
  title: "Creator Fan Platform",
  description: "Demo platform for artists and fans",
  icons: {
    icon: "/images/Klasey-1.png",
    shortcut: "/images/Klasey-1.png",
    apple: "/images/Klasey-1.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-gray-100 antialiased">
        <AudioPlayer />
        {children}
        <ThemeBootstrap />
        <ModalRoot />
      </body>
    </html>
  )
}
