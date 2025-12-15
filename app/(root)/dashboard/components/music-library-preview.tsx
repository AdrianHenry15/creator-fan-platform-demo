import { demoTracks } from "@/lib/mock-data"
import { usePlayerStore } from "@/stores/player-store"

const MusicLibraryPreview = () => {
  const { currentTrack, playTrack } = usePlayerStore()

  // Simple demo leveling logic
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Music</h2>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {demoTracks.length} tracks
        </span>
      </div>

      <div className="space-y-2">
        {demoTracks.map((track) => (
          <div
            key={track.id}
            className={`
          flex items-center justify-between gap-3
          rounded-lg border p-3
          bg-white dark:bg-gray-950
          border-gray-200 dark:border-gray-800
          ${
            currentTrack?.id === track.id
              ? "border-pink-500 bg-pink-50 dark:bg-pink-950"
              : ""
          }
        `}>
            <div className="min-w-0">
              <p className="font-medium truncate">{track.title}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {track.duration ?? "—"}
              </p>
            </div>

            <button
              onClick={() => playTrack(track)}
              className="
            shrink-0 rounded-md px-3 py-1 text-xs font-medium
            border border-gray-300 dark:border-gray-700
            hover:bg-gray-100 dark:hover:bg-gray-800
            transition
          ">
              {currentTrack?.id === track.id ? "Playing" : "Play"}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MusicLibraryPreview
