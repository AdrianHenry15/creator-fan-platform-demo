"use client"

import Image from "next/image"
import { demoTracks } from "@/lib/mock-data"
import { usePlayerStore } from "@/stores/player-store"
import { Play, Pause } from "lucide-react"

export default function TrackList() {
  const { play, pause, currentTrack, isPlaying } = usePlayerStore()

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
      <ul className="divide-y divide-gray-200 dark:divide-gray-800">
        {demoTracks.map((track, index) => {
          const isActive = currentTrack?.id === track.id && isPlaying

          return (
            <li
              key={track.id}
              className="
                flex items-center gap-3
                px-3 py-3
                sm:px-4
                transition-colors
                hover:bg-gray-50 dark:hover:bg-gray-900
              ">
              {/* Cover Art */}
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-md overflow-hidden">
                <Image
                  src={track.imageUrl}
                  alt={track.title}
                  fill
                  sizes="(max-width: 640px) 48px, 56px"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>

              {/* Track Info */}
              <div className="flex-1 min-w-0">
                <p
                  className={`truncate text-sm sm:text-base font-medium
                    ${
                      isActive
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-900 dark:text-gray-100"
                    }
                  `}>
                  {track.title}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {track.duration}
                </p>
              </div>

              {/* Play / Pause Button */}
              <button
                onClick={() => (isActive ? pause() : play(track))}
                className={`flex items-center justify-center shrink-0 w-10 h-10 sm:w-9 sm:h-9 rounded-full transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isActive
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-900 text-white hover:bg-gray-700 dark:bg-gray-100 dark:text-black dark:hover:bg-gray-300"
                }`}
                aria-label={isActive ? "Pause track" : "Play track"}>
                {isActive ? <Pause size={16} /> : <Play size={16} />}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
