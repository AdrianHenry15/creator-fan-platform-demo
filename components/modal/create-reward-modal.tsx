"use client"

import { useState } from "react"
import BaseModal from "./base-modal"
import { useAdminRewardsStore } from "@/stores/admin/admin-rewards-store"

export default function CreateRewardModal({
  onClose,
}: {
  onClose: () => void
}) {
  const create = useAdminRewardsStore((s) => s.create)

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [condition, setCondition] = useState("Unlock achievement")

  const isDisabled = !title.trim()

  return (
    <BaseModal
      title="New Reward"
      onClose={onClose}
      footer={
        <div className="flex justify-end gap-3 border-t pt-4">
          <button onClick={onClose} className="btn-secondary px-4 py-2">
            Cancel
          </button>

          <button
            disabled={isDisabled}
            onClick={() => {
              create({
                title: title.trim(),
                description: description.trim(),
                unlockCondition: condition.trim(),
                active: true,
              })
              onClose()
            }}
            className={`btn-primary px-4 py-2 ${
              isDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}>
            Create Reward
          </button>
        </div>
      }>
      <div className="flex flex-col gap-4">
        {/* Title */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Reward Title
          </label>
          <input
            className="modal-input"
            placeholder="e.g. Early Access Pass"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            className="modal-input resize-none h-24"
            placeholder="What does the user receive?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Unlock Condition */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Unlock Condition
          </label>
          <input
            className="modal-input"
            placeholder="e.g. Complete 5 achievements"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
          />
        </div>
      </div>
    </BaseModal>
  )
}
