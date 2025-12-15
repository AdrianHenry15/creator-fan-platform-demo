"use client"

import { useProgressionStore } from "@/stores/progression-store"
import ActivityGrid from "./components/activity-grid"
import MusicLibraryPreview from "./components/music-library-preview"

export default function DashboardPage() {
  const { xp, achievements } = useProgressionStore()

  // Simple demo leveling logic
  const level = Math.floor(xp / 100) + 1
  const xpIntoLevel = xp % 100
  const xpPercent = Math.min((xpIntoLevel / 100) * 100, 100)

  return (
    <div className="space-y-8">
      {/* Header */}
      <header className="space-y-1">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Your fan journey and progression overview
        </p>
      </header>

      {/* XP + Level Card */}
      <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Fan Level
            </p>
            <p className="text-2xl font-semibold">Level {level}</p>
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-500 dark:text-gray-400">Total XP</p>
            <p className="text-xl font-medium">{xp} XP</p>
          </div>
        </div>

        <div>
          <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
            <div
              className="h-full bg-blue-600 dark:bg-blue-500 transition-all"
              style={{ width: `${xpPercent}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            {100 - xpIntoLevel} XP to next level
          </p>
        </div>
      </section>

      {/* Activity Grid */}
      <ActivityGrid />

      {/* Music Library Preview */}
      <MusicLibraryPreview />

      {/* Recent Achievements Preview */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Recent Achievements</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.slice(0, 2).map((a) => (
            <div
              key={a.id}
              className={`
                rounded-lg border p-4
                ${
                  a.unlocked
                    ? "border-pink-500 bg-pink-50 dark:bg-pink-950"
                    : "border-gray-200 dark:border-gray-800"
                }
              `}>
              <p className="font-medium">{a.title}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {a.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
