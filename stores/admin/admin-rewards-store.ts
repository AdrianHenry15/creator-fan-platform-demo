import { create } from "zustand"

export type AdminReward = {
  id: string
  title: string
  description: string
  unlockCondition: string
  active: boolean
}

type AdminRewardsState = {
  rewards: AdminReward[]
  create: (r: Omit<AdminReward, "id">) => void
}

export const useAdminRewardsStore = create<AdminRewardsState>((set) => ({
  rewards: [
    {
      id: "reward-early-track",
      title: "Early Track Access",
      description: "Listen to new releases 24 hours before the public.",
      unlockCondition: "Reach Level 3",
      active: true,
    },
    {
      id: "reward-exclusive-track",
      title: "Exclusive Track",
      description: "Unlock a track available only to core supporters.",
      unlockCondition: "Unlock 'Supporter' achievement",
      active: true,
    },
    {
      id: "reward-discord",
      title: "Private Community Access",
      description: "Gain access to the private Discord or fan chat.",
      unlockCondition: "Become a member",
      active: true,
    },
    {
      id: "reward-shoutout",
      title: "Creator Shoutout",
      description: "Get a personal shoutout from the artist.",
      unlockCondition: "Top supporter status",
      active: true,
    },
    {
      id: "reward-merch",
      title: "Merch Discount",
      description: "Receive a discount code for the merch store.",
      unlockCondition: "Donate $25+ total",
      active: true,
    },
    {
      id: "reward-voting",
      title: "Creative Input",
      description: "Vote on upcoming tracks, visuals, or merch.",
      unlockCondition: "Reach Level 5",
      active: true,
    },
  ],

  create: (reward) =>
    set((state) => ({
      rewards: [
        ...state.rewards,
        {
          ...reward,
          id: crypto.randomUUID(),
        },
      ],
    })),
}))
