import { create } from "zustand"

export type Theme = "dark" | "neon" | "retro"

type ThemeState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme:
    (typeof window !== "undefined" &&
      (localStorage.getItem("theme") as Theme)) ||
    "dark",

  setTheme: (theme) => {
    localStorage.setItem("theme", theme)
    set({ theme })
    document.documentElement.setAttribute("data-theme", theme)
  },
}))
