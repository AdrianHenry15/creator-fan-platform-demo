"use client"

import { usePlayerStore } from "@/stores/player-store"
import { useEffect, useRef } from "react"

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const { currentTrack, isPlaying, pause } = usePlayerStore()

  // Handle track changes
  useEffect(() => {
    if (!audioRef.current || !currentTrack) return

    const audio = audioRef.current
    audio.src = currentTrack.audioUrl
    audio.play()

    return () => {
      audio.pause()
    }
  }, [currentTrack])

  // Handle play / pause toggle
  useEffect(() => {
    if (!audioRef.current) return

    const audio = audioRef.current
    if (isPlaying) {
      audio.play()
    } else {
      audio.pause()
    }
  }, [isPlaying])

  if (!currentTrack) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 flex justify-between items-center">
      <span>{currentTrack.title}</span>
      <button onClick={pause} className="px-4 py-1 bg-white text-black rounded">
        Pause
      </button>
      <audio ref={audioRef} />
    </div>
  )
}
