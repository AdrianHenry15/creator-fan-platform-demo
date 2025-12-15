"use client"

import { useProgressionStore } from "@/stores/progression-store"
import { Trophy, Lock } from "lucide-react"

export default function AchievementsPage() {
  const { achievements } = useProgressionStore()

  const unlocked = achievements.filter((a) => a.unlocked)

  return (
    <div className="space-y-8">
      {/* Header */}
      <header className="space-y-1">
        <h1 className="text-3xl font-bold">Achievements</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Earn achievements by supporting the artist and engaging with content
        </p>
      </header>

      {/* Progress Summary */}
      <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Achievements Unlocked
            </p>
            <p className="text-2xl font-semibold">
              {unlocked.length} / {achievements.length}
            </p>
          </div>

          <Trophy className="text-yellow-500" size={32} />
        </div>
      </section>

      {/* Achievement Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement) => {
          const isUnlocked = achievement.unlocked

          return (
            <div
              key={achievement.id}
              className={`
                relative rounded-xl border p-5
                transition
                ${
                  isUnlocked
                    ? "border-green-500 bg-green-50 dark:bg-green-950"
                    : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950"
                }
              `}>
              {/* Icon */}
              <div
                className={`
                  mb-3 inline-flex items-center justify-center
                  w-10 h-10 rounded-full
                  ${
                    isUnlocked
                      ? "bg-green-600 text-white"
                      : "bg-gray-200 dark:bg-gray-800 text-gray-500"
                  }
                `}>
                {isUnlocked ? <Trophy size={18} /> : <Lock size={18} />}
              </div>

              {/* Title */}
              <h3
                className={`
                  font-semibold
                  ${
                    isUnlocked
                      ? "text-gray-900 dark:text-gray-100"
                      : "text-gray-500"
                  }
                `}>
                {achievement.title}
              </h3>

              {/* Description */}
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {achievement.description}
              </p>

              {/* Status */}
              <div className="mt-4 text-xs font-medium uppercase tracking-wide">
                {isUnlocked ? (
                  <span className="text-green-600 dark:text-green-400">
                    Unlocked
                  </span>
                ) : (
                  <span className="text-gray-400">Locked</span>
                )}
              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}
