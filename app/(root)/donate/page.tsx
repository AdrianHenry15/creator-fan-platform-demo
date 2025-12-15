"use client"

import { useState } from "react"
import { useProgressionStore } from "@/stores/progression-store"
import { Heart, Sparkles, Trophy } from "lucide-react"

const donationOptions = [5, 10, 25]

export default function DonatePage() {
  const { addXP, unlock, achievements } = useProgressionStore()
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [hasDonated, setHasDonated] = useState(false)

  const supporterUnlocked = achievements.find(
    (a) => a.id === "supporter"
  )?.unlocked

  const handleDonate = () => {
    if (!selectedAmount) return

    // Demo logic
    addXP(selectedAmount * 10)

    if (!supporterUnlocked) {
      unlock("supporter")
    }

    setHasDonated(true)
  }

  return (
    <div className="space-y-8 max-w-3xl">
      {/* Header */}
      <header className="space-y-1">
        <h1 className="text-3xl font-bold">Support the Artist</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Donations earn XP, unlock achievements, and grant access to rewards.
        </p>
      </header>

      {/* Donation Card */}
      <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 space-y-6">
        {/* Amount Selector */}
        <div>
          <p className="text-sm font-medium mb-2">Choose an amount</p>

          <div className="flex gap-3 flex-wrap">
            {donationOptions.map((amount) => (
              <button
                key={amount}
                onClick={() => setSelectedAmount(amount)}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition
                  ${
                    selectedAmount === amount
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }
                `}>
                ${amount}
              </button>
            ))}
          </div>
        </div>

        {/* Donation Button */}
        <button
          onClick={handleDonate}
          disabled={!selectedAmount}
          className="
            w-full flex items-center justify-center gap-2
            rounded-lg py-3 text-sm font-medium
            bg-black text-white hover:bg-gray-800
            dark:bg-white dark:text-black dark:hover:bg-gray-200
            disabled:opacity-50 disabled:cursor-not-allowed
            transition
          ">
          <Heart size={16} />
          Donate & Earn XP
        </button>
      </section>

      {/* Rewards Feedback */}
      {hasDonated && (
        <section className="rounded-xl border border-pink-500 bg-pink-50 dark:bg-pink-950 p-6 space-y-4">
          <div className="flex items-center gap-2 font-medium">
            <Sparkles size={18} />
            Thank you for supporting the artist!
          </div>

          <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
            <li>+ XP added to your profile</li>
            {!supporterUnlocked && (
              <li className="flex items-center gap-2">
                <Trophy size={14} />
                Achievement unlocked: <strong>Supporter</strong>
              </li>
            )}
          </ul>
        </section>
      )}

      {/* Info Panel */}
      <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 space-y-2">
        <h2 className="text-lg font-semibold">Why support?</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Supporting the artist directly helps fund new music, unlocks exclusive
          content, and progresses your fan level.
        </p>
      </section>
    </div>
  )
}
