import { usePlayerStore } from "@/stores/player-store"
import { useProgressionStore } from "@/stores/progression-store"
import { DollarSign, Music, Trophy } from "lucide-react"

const ActivityGrid = () => {
  const { achievements } = useProgressionStore()
  const { currentTrack } = usePlayerStore()

  // Simple demo leveling logic
  const unlockedCount = achievements.filter((a) => a.unlocked).length

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Now Playing */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-5 space-y-3">
        <div className="flex items-center gap-2 text-sm font-medium">
          <Music size={16} />
          Now Playing
        </div>

        {currentTrack ? (
          <div>
            <p className="font-medium truncate">{currentTrack.title}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {currentTrack.duration ?? "—"}
            </p>
          </div>
        ) : (
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            No track playing
          </p>
        )}
      </div>

      {/* Achievements */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-5 space-y-3">
        <div className="flex items-center gap-2 text-sm font-medium">
          <Trophy size={16} />
          Achievements
        </div>

        <p className="text-2xl font-semibold">
          {unlockedCount} / {achievements.length}
        </p>

        <p className="text-xs text-gray-500 dark:text-gray-400">Unlocked</p>
      </div>

      {/* Support */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-5 space-y-3">
        <div className="flex items-center gap-2 text-sm font-medium">
          <DollarSign size={16} />
          Support the Artist
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400">
          Donations unlock XP, rewards, and exclusive content.
        </p>

        <button
          className="
        w-full rounded-lg py-2 text-sm font-medium
        bg-black text-white hover:bg-gray-800
        dark:bg-white dark:text-black dark:hover:bg-gray-200
        transition
      ">
          Make a Donation
        </button>
      </div>
    </section>
  )
}

export default ActivityGrid
