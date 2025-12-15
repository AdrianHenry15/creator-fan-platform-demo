import { create } from "zustand"

export type AdminDrop = {
  id: string
  title: string
  description: string
  startDate: string
  endDate: string
  active: boolean
}

type AdminDropsState = {
  drops: AdminDrop[]
  create: (d: Omit<AdminDrop, "id">) => void
}

export const useAdminDropsStore = create<AdminDropsState>((set) => ({
  drops: [],

  create: (drop) =>
    set((state) => ({
      drops: [...state.drops, { ...drop, id: crypto.randomUUID() }],
    })),
}))
