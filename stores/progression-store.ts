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
    // 🎧 Listening
    {
      id: "first-play",
      title: "First Listen",
      description: "Played your first track",
      unlocked: true,
    },
    {
      id: "repeat-listener",
      title: "Repeat Listener",
      description: "Listened to 5 tracks",
      unlocked: false,
    },
    {
      id: "deep-dive",
      title: "Deep Dive",
      description: "Listened for 30 minutes",
      unlocked: false,
    },

    // ❤️ Engagement
    {
      id: "profile-visitor",
      title: "In the Loop",
      description: "Visited the artist profile",
      unlocked: true,
    },
    {
      id: "commenter",
      title: "Voice Heard",
      description: "Left a comment on a post",
      unlocked: false,
    },

    // 💸 Support
    {
      id: "supporter",
      title: "Supporter",
      description: "Donated to the artist",
      unlocked: false,
    },
    {
      id: "member",
      title: "Inner Circle",
      description: "Became a member",
      unlocked: false,
    },
    {
      id: "top-supporter",
      title: "Patron",
      description: "Supported the artist multiple times",
      unlocked: false,
    },

    // 🏆 Loyalty
    {
      id: "day-one",
      title: "Day One",
      description: "Followed the artist early",
      unlocked: false,
    },
    {
      id: "regular",
      title: "Regular",
      description: "Returned 7 days in a row",
      unlocked: false,
    },

    // 🎁 Special / Event
    {
      id: "drop-claimed",
      title: "Drop Claimed",
      description: "Unlocked exclusive content",
      unlocked: false,
    },
    {
      id: "beta-tester",
      title: "Beta Tester",
      description: "Participated in an early release",
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
