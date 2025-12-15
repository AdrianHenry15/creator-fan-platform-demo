"use client"

import { useEffect, useRef, useState } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import Image from "next/image"
import { usePlayerStore } from "@/stores/player-store"

function formatTime(seconds: number) {
  if (!seconds || Number.isNaN(seconds)) return "0:00"
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, "0")}`
}

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const { currentTrack, isPlaying, play, pause } = usePlayerStore()

  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.8)
  const [showVolume, setShowVolume] = useState(false)
  const [isScrubbing, setIsScrubbing] = useState(false)

  /* ===================== */
  /* Load Track */
  /* ===================== */
  useEffect(() => {
    if (!audioRef.current || !currentTrack) return

    const audio = audioRef.current
    audio.src = currentTrack.audioUrl
    audio.currentTime = 0
    audio.volume = volume

    audio.play().catch(() => {})

    return () => {
      audio.pause()
    }
  }, [currentTrack, volume])

  /* ===================== */
  /* Play / Pause */
  /* ===================== */
  useEffect(() => {
    if (!audioRef.current) return
    const audio = audioRef.current

    if (isPlaying) {
      audio.play().catch(() => {})
    } else {
      audio.pause()
    }
  }, [isPlaying])

  /* ===================== */
  /* Progress */
  /* ===================== */
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const update = () => {
      if (!isScrubbing) {
        setProgress(audio.currentTime)
        setDuration(audio.duration || 0)
      }
    }

    audio.addEventListener("timeupdate", update)
    audio.addEventListener("loadedmetadata", update)

    return () => {
      audio.removeEventListener("timeupdate", update)
      audio.removeEventListener("loadedmetadata", update)
    }
  }, [isScrubbing])

  /* ===================== */
  /* Volume */
  /* ===================== */
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  if (!currentTrack) return null

  return (
    <div
      className="
        fixed bottom-4 left-1/2 -translate-x-1/2 z-50
        w-[95%] max-w-4xl
        rounded-2xl
        border border-gray-800
        bg-gray-950/95 backdrop-blur
        shadow-2xl
        px-4 py-4
      ">
      {/* Player Row */}
      <div className="mt-2 flex items-center justify-between gap-4">
        {/* Track Info */}
        <div className="flex items-center gap-3 min-w-0">
          {/* Optional Cover Art */}
          {currentTrack.imageUrl && (
            <div className="relative h-12 w-12 overflow-hidden rounded-lg border border-gray-800">
              <Image
                src={currentTrack.imageUrl}
                alt={currentTrack.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="min-w-0">
            <p className="text-sm font-medium truncate">{currentTrack.title}</p>
            <p className="text-xs text-gray-400">Now Playing</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          {/* Play / Pause */}
          <button
            onClick={isPlaying ? pause : play}
            className="
              h-11 w-11 rounded-full
              bg-pink-500 text-black
              flex items-center justify-center
              hover:bg-pink-400 transition
            ">
            {isPlaying ? (
              <Pause size={20} />
            ) : (
              <Play size={20} className="ml-0.5" />
            )}
          </button>

          {/* Volume */}
          <div className="relative">
            <button
              onClick={() => setShowVolume((v) => !v)}
              className="text-gray-300 hover:text-white transition">
              {volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>

            {showVolume && (
              <div
                className="
                  absolute bottom-12 right-0
                  w-32 p-3
                  rounded-lg
                  border border-gray-800
                  bg-gray-950
                ">
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-full accent-pink-500"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Progress */}
      <input
        type="range"
        min={0}
        max={duration || 0}
        step={0.01}
        value={progress}
        onMouseDown={() => setIsScrubbing(true)}
        onTouchStart={() => setIsScrubbing(true)}
        onChange={(e) => setProgress(Number(e.target.value))}
        onMouseUp={(e) => {
          const time = Number(e.currentTarget.value)
          if (audioRef.current) audioRef.current.currentTime = time
          setIsScrubbing(false)
        }}
        onTouchEnd={(e) => {
          const time = Number(e.currentTarget.value)
          if (audioRef.current) audioRef.current.currentTime = time
          setIsScrubbing(false)
        }}
        className="w-full accent-pink-500 cursor-pointer mt-2"
      />

      {/* Time Labels */}
      <div className="mt-1 flex justify-between text-xs text-gray-400">
        <span>{formatTime(progress)}</span>
        <span>-{formatTime(duration - progress)}</span>
      </div>
      <audio ref={audioRef} />
    </div>
  )
}
