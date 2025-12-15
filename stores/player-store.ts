import { create } from "zustand"

export type Track = {
  id: string
  title: string
  audioUrl: string
  duration: string
  imageUrl?: string
}

type PlayerState = {
  currentTrack: Track | null
  isPlaying: boolean
  playTrack: (track: Track) => void
  play: () => void
  pause: () => void
}

export const usePlayerStore = create<PlayerState>((set) => ({
  currentTrack: null,
  isPlaying: false,

  playTrack: (track) =>
    set({
      currentTrack: track,
      isPlaying: true,
    }),

  play: () => set({ isPlaying: true }),
  pause: () => set({ isPlaying: false }),
}))
