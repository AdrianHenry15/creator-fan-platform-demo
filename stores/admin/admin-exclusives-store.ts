import { create } from "zustand"

export type AdminExclusive = {
  id: string
  title: string
  description: string
  accessLevel: string
  active: boolean
}

type AdminExclusivesState = {
  exclusives: AdminExclusive[]
  create: (e: Omit<AdminExclusive, "id">) => void
}

export const useAdminExclusivesStore = create<AdminExclusivesState>((set) => ({
  exclusives: [
    {
      id: "exclusive-unreleased-track",
      title: "Unreleased Track",
      description:
        "Listen to an unreleased track before it’s available anywhere else.",
      accessLevel: "Members Only",
      active: true,
    },
    {
      id: "exclusive-studio-session",
      title: "Behind-the-Scenes Studio Session",
      description: "Exclusive behind-the-scenes content from the studio.",
      accessLevel: "Level 4+ Fans",
      active: true,
    },
    {
      id: "exclusive-livestream",
      title: "Private Livestream",
      description: "Access to a private livestream with the artist.",
      accessLevel: "Tier 2 Members",
      active: true,
    },
    {
      id: "exclusive-early-merch",
      title: "Early Merch Access",
      description: "Shop new merch drops before the public release.",
      accessLevel: "Supporters",
      active: true,
    },
    {
      id: "exclusive-qa",
      title: "Fan Q&A Session",
      description: "Submit questions and join an exclusive Q&A.",
      accessLevel: "Top Supporters",
      active: true,
    },
    {
      id: "exclusive-demo-download",
      title: "Demo Pack Download",
      description: "Download demos, stems, or sample packs from the artist.",
      accessLevel: "Creators / Superfans",
      active: true,
    },
  ],

  create: (exclusive) =>
    set((state) => ({
      exclusives: [
        ...state.exclusives,
        {
          ...exclusive,
          id: crypto.randomUUID(),
        },
      ],
    })),
}))
