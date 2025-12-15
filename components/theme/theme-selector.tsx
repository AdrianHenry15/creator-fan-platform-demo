"use client"

import { Palette } from "lucide-react"
import { useThemeStore, Theme } from "@/stores/theme-store"

const themes: {
  id: Theme
  label: string
}[] = [
  { id: "dark", label: "Dark" },
  { id: "neon", label: "Neon" },
  { id: "retro", label: "Retro" },
]

export default function ThemeSelector() {
  const { theme, setTheme } = useThemeStore()

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 px-3 text-xs uppercase tracking-wide text-gray-400">
        <Palette size={12} />
        Theme
      </div>

      <div className="px-2 space-y-1">
        {themes.map((t) => (
          <button
            key={t.id}
            onClick={() => setTheme(t.id)}
            className={`
              w-full flex items-center justify-between
              px-3 py-2 text-xs
              border
              ${
                theme === t.id
                  ? "border-green-500 text-green-400 bg-gray-900"
                  : "border-gray-800 text-gray-400 hover:bg-gray-900"
              }
            `}>
            {t.label}
            {theme === t.id && "✓"}
          </button>
        ))}
      </div>
    </div>
  )
}
