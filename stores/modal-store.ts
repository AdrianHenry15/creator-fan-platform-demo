/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand"

export type ModalType =
  | "create-achievement"
  | "create-reward"
  | "reward-details"
  | "create-drop"
  | "create-exclusive"
  | null

type ModalState = {
  type: ModalType
  payload?: any
  open: (type: ModalType, payload?: any) => void
  close: () => void
}

export const useModalStore = create<ModalState>((set) => ({
  type: null,
  payload: undefined,
  open: (type, payload) => set({ type, payload }),
  close: () => set({ type: null, payload: undefined }),
}))
