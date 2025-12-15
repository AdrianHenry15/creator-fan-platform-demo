import { create } from "zustand"

export type Track = {
  id: string
  title: string
  audioUrl: string
  duration: string
  imageUrl: string
}

type PlayerState = {
  currentTrack: Track | null
  isPlaying: boolean
  play: (track: Track) => void
  pause: () => void
}

export const usePlayerStore = create<PlayerState>((set) => ({
  currentTrack: null,
  isPlaying: false,
  play: (track) => set({ currentTrack: track, isPlaying: true }),
  pause: () => set({ isPlaying: false }),
}))
