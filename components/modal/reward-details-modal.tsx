"use client"

import BaseModal from "./base-modal"
import { AdminReward } from "@/stores/admin/admin-rewards-store"
import { Gift, Lock } from "lucide-react"

export default function RewardDetailsModal({
  reward,
  onClose,
}: {
  reward: AdminReward
  onClose: () => void
}) {
  return (
    <BaseModal
      title="Reward Details"
      onClose={onClose}
      footer={
        <div className="flex justify-end">
          <button onClick={onClose} className="btn-primary">
            Close
          </button>
        </div>
      }>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-pink-500/10">
            <Gift size={18} className="text-pink-400" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Reward</p>
            <p className="text-lg font-semibold">{reward.title}</p>
          </div>
        </div>

        <p className="text-sm text-gray-300">{reward.description}</p>

        <div className="border border-gray-800 rounded-lg p-3 bg-black/30">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Lock size={12} />
            Unlock Condition
          </div>
          <p className="mt-1 text-sm font-medium">{reward.unlockCondition}</p>
        </div>

        <div className="text-xs text-gray-500">
          Status:{" "}
          <span className={reward.active ? "text-green-400" : "text-gray-500"}>
            {reward.active ? "Active" : "Inactive"}
          </span>
        </div>
      </div>
    </BaseModal>
  )
}
