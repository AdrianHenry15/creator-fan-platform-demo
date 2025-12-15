import { create } from "zustand"

export type AdminAchievement = {
  id: string
  title: string
  description: string
  xpReward: number
  active: boolean
}

type AdminAchievementsState = {
  achievements: AdminAchievement[]
  create: (a: Omit<AdminAchievement, "id">) => void
}

export const useAdminAchievementsStore = create<AdminAchievementsState>(
  (set) => ({
    achievements: [
      {
        id: "first-play",
        title: "First Listen",
        description: "Played your first track",
        xpReward: 50,
        active: true,
      },
    ],

    create: (achievement) =>
      set((state) => ({
        achievements: [
          ...state.achievements,
          {
            ...achievement,
            id: crypto.randomUUID(),
          },
        ],
      })),
  })
)
