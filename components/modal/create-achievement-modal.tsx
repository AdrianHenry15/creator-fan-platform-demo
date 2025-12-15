"use client"

import { useState } from "react"
import BaseModal from "./base-modal"
import { useAdminAchievementsStore } from "@/stores/admin/admin-achievements-store"

export default function CreateAchievementModal({
  onClose,
}: {
  onClose: () => void
}) {
  const create = useAdminAchievementsStore((s) => s.create)

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [xpReward, setXpReward] = useState(50)

  return (
    <BaseModal
      title="New Achievement"
      onClose={onClose}
      footer={
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-3 py-2 text-xs border border-gray-700 rounded">
            Cancel
          </button>
          <button
            onClick={() => {
              create({
                title,
                description,
                xpReward,
                active: true,
              })
              onClose()
            }}
            className="px-3 py-2 text-xs bg-pink-500 text-black rounded">
            Create
          </button>
        </div>
      }>
      <input
        className="w-full bg-black border border-gray-700 px-3 py-2 text-sm rounded"
        placeholder="Achievement title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full bg-black border border-gray-700 px-3 py-2 text-sm rounded"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="number"
        className="w-full bg-black border border-gray-700 px-3 py-2 text-sm rounded"
        value={xpReward}
        onChange={(e) => setXpReward(Number(e.target.value))}
      />
    </BaseModal>
  )
}
