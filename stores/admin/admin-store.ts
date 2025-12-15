import { create } from "zustand"

type AdminState = {
  isAdmin: boolean
  isExiting: boolean
  login: (email: string, password: string) => boolean
  logout: () => void
  finishExit: () => void
}

export const useAdminStore = create<AdminState>((set) => ({
  isAdmin: false,
  isExiting: false,

  login: (email, password) => {
    if (email === "creator@demo.com" && password === "demo123") {
      set({ isAdmin: true, isExiting: false })
      return true
    }
    return false
  },

  logout: () =>
    set({
      isAdmin: false,
      isExiting: true, // 👈 critical
    }),

  finishExit: () =>
    set({
      isExiting: false,
    }),
}))
