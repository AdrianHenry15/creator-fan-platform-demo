"use client"

import { useProgressionStore } from "@/stores/progression-store"
import { Crown, Check, Lock } from "lucide-react"

type MembershipTier = {
  id: string
  name: string
  price: string
  description: string
  perks: string[]
  achievementId: string
}

const tiers: MembershipTier[] = [
  {
    id: "free",
    name: "Free Fan",
    price: "$0",
    description: "Listen, explore, and start progressing.",
    perks: [
      "Access to public tracks",
      "Earn XP from listening",
      "View achievements",
    ],
    achievementId: "first-play",
  },
  {
    id: "supporter",
    name: "Supporter",
    price: "$10 / month",
    description: "Support the artist and unlock exclusive content.",
    perks: [
      "Unlock exclusive tracks",
      "Access rewards & drops",
      "Bonus XP from donations",
      "Supporter badge",
    ],
    achievementId: "supporter",
  },
]

export default function MembersPage() {
  const { achievements } = useProgressionStore()

  const hasAchievement = (id: string) =>
    achievements.find((a) => a.id === id)?.unlocked

  return (
    <div className="space-y-8 max-w-5xl">
      {/* ===================== */}
      {/* Header */}
      {/* ===================== */}
      <header className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Memberships</h1>
        <p className="text-gray-400 text-sm">
          Join tiers to permanently unlock content and progression bonuses
        </p>
      </header>

      {/* ===================== */}
      {/* Tier Grid */}
      {/* ===================== */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tiers.map((tier) => {
          const unlocked = hasAchievement(tier.achievementId)

          return (
            <div
              key={tier.id}
              className={`
                relative border border-gray-800 bg-gray-950 p-6
                flex flex-col justify-between
                ${unlocked ? "border-pink-500" : "hover:border-gray-600"}
              `}>
              {/* Tier Header */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">{tier.name}</h2>

                  {unlocked ? (
                    <span className="flex items-center gap-1 text-pink-400 text-sm">
                      <Check size={14} />
                      Active
                    </span>
                  ) : tier.id === "supporter" ? (
                    <Crown size={18} className="text-yellow-400" />
                  ) : null}
                </div>

                <p className="text-sm text-gray-400">{tier.description}</p>

                <p className="text-2xl font-bold">{tier.price}</p>
              </div>

              {/* Perks */}
              <ul className="mt-4 space-y-2 text-sm">
                {tier.perks.map((perk) => (
                  <li
                    key={perk}
                    className="flex items-start gap-2 text-gray-300">
                    <Check size={14} className="text-pink-400 mt-0.5" />
                    {perk}
                  </li>
                ))}
              </ul>

              {/* Action */}
              <div className="mt-6">
                {unlocked ? (
                  <button
                    disabled
                    className="
                      w-full py-2 text-sm font-medium
                      border border-pink-500 text-pink-400
                      cursor-default
                    ">
                    Membership Active
                  </button>
                ) : tier.id === "supporter" ? (
                  <button
                    className="
                      w-full py-2 text-sm font-medium
                      border border-pink-500 text-pink-400
                      hover:bg-pink-500 hover:text-black
                      transition
                    ">
                    Join Supporter
                  </button>
                ) : (
                  <button
                    disabled
                    className="
                      w-full py-2 text-sm font-medium
                      border border-gray-700 text-gray-500
                      cursor-not-allowed
                    ">
                    Current Tier
                  </button>
                )}
              </div>

              {/* Lock Overlay (Optional) */}
              {!unlocked && tier.id === "supporter" && (
                <div className="absolute top-3 right-3 text-gray-500">
                  <Lock size={14} />
                </div>
              )}
            </div>
          )
        })}
      </section>

      {/* ===================== */}
      {/* Info Panel */}
      {/* ===================== */}
      <section className="border border-gray-800 bg-gray-950 p-6 space-y-2">
        <h3 className="text-lg font-semibold">Why memberships matter</h3>
        <p className="text-sm text-gray-400">
          Memberships provide ongoing support to the artist and permanently
          unlock content, rewards, and progression bonuses.
        </p>
      </section>
    </div>
  )
}
