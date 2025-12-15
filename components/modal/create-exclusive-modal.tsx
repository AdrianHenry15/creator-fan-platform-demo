"use client"

import { useState } from "react"
import BaseModal from "./base-modal"
import { useAdminExclusivesStore } from "@/stores/admin/admin-exclusives-store"

export default function CreateExclusiveModal({
  onClose,
}: {
  onClose: () => void
}) {
  const create = useAdminExclusivesStore((s) => s.create)

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [accessLevel, setAccessLevel] = useState("Members Only")

  const isDisabled = !title.trim()

  return (
    <BaseModal
      title="New Exclusive Content"
      onClose={onClose}
      footer={
        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="btn-secondary px-4 py-2">
            Cancel
          </button>
          <button
            disabled={isDisabled}
            onClick={() => {
              create({
                title: title.trim(),
                description: description.trim(),
                accessLevel: accessLevel.trim(),
                active: true,
              })
              onClose()
            }}
            className={`btn-primary px-4 py-2 ${
              isDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}>
            Create Exclusive
          </button>
        </div>
      }>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-400">
            Content Title
          </label>
          <input
            className="modal-input"
            placeholder="e.g. Behind the Scenes Video"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-400">
            Description
          </label>
          <textarea
            className="modal-input h-24 resize-none"
            placeholder="Describe the exclusive content"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-400">
            Access Level
          </label>
          <input
            className="modal-input"
            placeholder="e.g. Tier 2 Members"
            value={accessLevel}
            onChange={(e) => setAccessLevel(e.target.value)}
          />
        </div>
      </div>
    </BaseModal>
  )
}
