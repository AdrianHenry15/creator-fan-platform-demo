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

  return (
    <BaseModal
      title="New Reward"
      onClose={onClose}
      footer={
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="btn-secondary">
            Cancel
          </button>
          <button
            onClick={() => {
              create({
                title,
                description,
                unlockCondition: condition,
                active: true,
              })
              onClose()
            }}
            className="btn-primary">
            Create Reward
          </button>
        </div>
      }>
      <input
        className="modal-input"
        placeholder="Reward title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="modal-input"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        className="modal-input"
        placeholder="Unlock condition"
        value={condition}
        onChange={(e) => setCondition(e.target.value)}
      />
    </BaseModal>
  )
}
