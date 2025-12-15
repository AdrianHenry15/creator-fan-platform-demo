"use client"

import { useEffect } from "react"
import { useThemeStore } from "@/stores/theme-store"

export default function ThemeBootstrap() {
  const { theme } = useThemeStore()

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])

  return null
}
