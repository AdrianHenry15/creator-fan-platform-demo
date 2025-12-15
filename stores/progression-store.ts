import { create } from "zustand"

type Achievement = {
  id: string
  title: string
  description: string
  unlocked: boolean
}

type ProgressionState = {
  xp: number
  achievements: Achievement[]
  addXP: (amount: number) => void
  unlock: (id: string) => void
}

export const useProgressionStore = create<ProgressionState>((set) => ({
  xp: 120,
  achievements: [
    {
      id: "first-play",
      title: "First Listen",
      description: "Played your first track",
      unlocked: true,
    },
    {
      id: "supporter",
      title: "Supporter",
      description: "Donated to the artist",
      unlocked: false,
    },
  ],
  addXP: (amount) => set((state) => ({ xp: state.xp + amount })),
  unlock: (id) =>
    set((state) => ({
      achievements: state.achievements.map((a) =>
        a.id === id ? { ...a, unlocked: true } : a
      ),
    })),
}))
