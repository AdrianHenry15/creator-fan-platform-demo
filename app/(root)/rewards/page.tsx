"use client"

import { demoRewards } from "@/lib/mock-data"
import { useProgressionStore } from "@/stores/progression-store"
import { Gift, Lock, CheckCircle } from "lucide-react"

export default function RewardsPage() {
  const { achievements } = useProgressionStore()

  const isUnlocked = (achievementId: string) =>
    achievements.find((a) => a.id === achievementId)?.unlocked

  return (
    <div className="space-y-8">
      {/* Header */}
      <header className="space-y-1">
        <h1 className="text-3xl font-bold">Rewards</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Unlock content, perks, and merch by supporting the artist
        </p>
      </header>

      {/* Rewards Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {demoRewards.map((reward) => {
          const unlocked = isUnlocked(reward.requiresAchievement)

          return (
            <div
              key={reward.id}
              className={`
                relative rounded-xl border p-6 transition
                ${
                  unlocked
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-950"
                    : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950"
                }
              `}>
              {/* Icon */}
              <div
                className={`
                  mb-4 inline-flex items-center justify-center
                  w-12 h-12 rounded-full
                  ${
                    unlocked
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 dark:bg-gray-800 text-gray-500"
                  }
                `}>
                {unlocked ? <CheckCircle size={20} /> : <Lock size={20} />}
              </div>

              {/* Title */}
              <h3
                className={`
                  font-semibold text-lg
                  ${
                    unlocked
                      ? "text-gray-900 dark:text-gray-100"
                      : "text-gray-500"
                  }
                `}>
                {reward.title}
              </h3>

              {/* Description */}
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {reward.description}
              </p>

              {/* Requirement */}
              <div className="mt-4 text-xs uppercase tracking-wide font-medium">
                {unlocked ? (
                  <span className="text-blue-600 dark:text-blue-400">
                    Unlocked
                  </span>
                ) : (
                  <span className="text-gray-400">Requires achievement</span>
                )}
              </div>
            </div>
          )
        })}
      </section>

      {/* Call to Action */}
      <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Gift size={24} />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Support the artist to unlock more rewards and exclusive content.
          </p>
        </div>

        <button
          className="
            rounded-lg px-6 py-2 text-sm font-medium
            bg-black text-white hover:bg-gray-800
            dark:bg-white dark:text-black dark:hover:bg-gray-200
            transition
          ">
          Support the Artist
        </button>
      </section>
    </div>
  )
}
