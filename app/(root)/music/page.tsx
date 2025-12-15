"use client"

import Image from "next/image"
import { demoTracks } from "@/lib/mock-data"
import { usePlayerStore } from "@/stores/player-store"
import { useProgressionStore } from "@/stores/progression-store"
import { Play, Pause, Lock } from "lucide-react"
import Link from "next/link"

export default function MusicPage() {
  const { playTrack, pause, currentTrack, isPlaying } = usePlayerStore()
  const { achievements } = useProgressionStore()

  const supporterUnlocked = achievements.find(
    (a) => a.id === "supporter"
  )?.unlocked

  return (
    <div className="space-y-8 max-w-5xl">
      {/* ===================== */}
      {/* Header */}
      {/* ===================== */}
      <header className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Music</h1>
        <p className="text-gray-400 text-sm">
          Play tracks, unlock drops, and earn progression
        </p>
      </header>

      {/* ===================== */}
      {/* Track Grid */}
      {/* ===================== */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {demoTracks.map((track, index) => {
          const isActive = currentTrack?.id === track.id && isPlaying

          // Demo rule: lock last track unless supporter
          const locked = !supporterUnlocked && index === demoTracks.length - 1

          return (
            <div
              key={track.id}
              className={`
                relative border border-gray-800 bg-gray-950
                transition
                ${locked ? "opacity-60" : "hover:border-pink-500"}
              `}>
              {/* Cover Art */}
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={track.imageUrl || ""}
                  alt={track.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index === 0}
                />

                {locked && (
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                    <div className="flex items-center gap-2 text-sm text-gray-200">
                      <Lock size={16} />
                      Supporter Required
                    </div>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-4 space-y-3">
                <div className="space-y-1">
                  <p className="font-medium truncate">{track.title}</p>
                  <p className="text-xs text-gray-400">{track.duration}</p>
                </div>

                {/* Controls */}
                <button
                  disabled={locked}
                  onClick={() => {
                    if (isActive) {
                      pause()
                    } else {
                      playTrack(track)
                    }
                  }}
                  className={`
    w-full flex items-center justify-center gap-2
    px-3 py-2 text-sm font-medium
    border transition
    ${
      locked
        ? "border-gray-700 text-gray-500 cursor-not-allowed"
        : isActive
        ? "bg-pink-600 border-pink-600 text-black"
        : "border-gray-700 hover:border-pink-500 hover:text-pink-400"
    }
  `}>
                  {isActive ? <Pause size={14} /> : <Play size={14} />}
                  {isActive ? "Pause" : "Play"}
                </button>
              </div>
            </div>
          )
        })}
      </section>

      {/* ===================== */}
      {/* Unlock CTA */}
      {/* ===================== */}
      {!supporterUnlocked && (
        <section className="border border-gray-800 bg-gray-950 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="font-medium text-pink-400">
              Locked content available
            </p>
            <p className="text-sm text-gray-400">
              Support the artist to unlock exclusive tracks and drops.
            </p>
          </div>

          <Link
            href="/donate"
            className="
              inline-flex items-center justify-center
              px-5 py-2 text-sm font-medium
              border border-pink-500 text-pink-400
              hover:bg-pink-500 hover:text-black
              transition
            ">
            Unlock Content
          </Link>
        </section>
      )}
    </div>
  )
}
