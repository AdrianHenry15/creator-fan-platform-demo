"use client"

import { Gift, Plus, ChevronRight } from "lucide-react"
import { useModalStore } from "@/stores/modal-store"
import { useAdminRewardsStore } from "@/stores/admin/admin-rewards-store"

export default function AdminRewardsPage() {
  const openModal = useModalStore((s) => s.open)
  const { rewards } = useAdminRewardsStore()

  return (
    <div className="space-y-6">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Rewards</h1>
          <p className="text-sm text-gray-400">
            Unlockable perks tied to engagement
          </p>
        </div>

        <button
          onClick={() => openModal("create-reward")}
          className="
            flex items-center gap-2 px-3 py-2 text-sm
            bg-pink-500 text-black rounded
            hover:bg-pink-400 transition
          ">
          <Plus size={14} />
          New Reward
        </button>
      </header>

      {/* Empty State */}
      {rewards.length === 0 ? (
        <div className="border border-dashed border-gray-700 p-6 text-center text-sm text-gray-400">
          No rewards yet. Create one to start incentivizing fans.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rewards.map((r) => (
            <div
              key={r.id}
              onClick={() => openModal("reward-details", r)}
              className="
                group cursor-pointer
                border border-gray-800 bg-gray-950 p-4 rounded
                hover:bg-gray-900 hover:border-pink-500
                transition
              ">
              {/* Title + Status */}
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <Gift size={14} className="text-pink-400" />
                  <h3 className="font-semibold">{r.title}</h3>
                </div>

                <span
                  className={`
                    text-xs px-2 py-0.5 rounded border
                    ${
                      r.active
                        ? "border-green-500 text-green-400"
                        : "border-gray-600 text-gray-500"
                    }
                  `}>
                  {r.active ? "Active" : "Inactive"}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-400 line-clamp-2">
                {r.description}
              </p>

              {/* Unlock Condition */}
              <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                <span>Unlock: {r.unlockCondition}</span>

                <ChevronRight
                  size={14}
                  className="
                    opacity-0 group-hover:opacity-100
                    transition text-pink-400
                  "
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
