"use client"

import { useAdminExclusivesStore } from "@/stores/admin/admin-exclusives-store"
import { useState } from "react"

export default function CreateExclusiveModal({
  onClose,
}: {
  onClose: () => void
}) {
  const create = useAdminExclusivesStore((s) => s.create)

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [accessLevel, setAccessLevel] = useState("Members Only")

  return (
    <div className="w-full max-w-md bg-gray-950 border border-gray-800 p-6 space-y-4">
      <h2 className="text-lg font-semibold">New Exclusive Content</h2>

      <input
        className="w-full bg-black border border-gray-700 px-3 py-2 text-sm"
        placeholder="Content title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full bg-black border border-gray-700 px-3 py-2 text-sm"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        className="w-full bg-black border border-gray-700 px-3 py-2 text-sm"
        placeholder="Access level (e.g. Tier 2 Members)"
        value={accessLevel}
        onChange={(e) => setAccessLevel(e.target.value)}
      />

      <div className="flex justify-end gap-2 pt-2">
        <button
          onClick={onClose}
          className="px-3 py-2 text-xs border border-gray-700">
          Cancel
        </button>
        <button
          onClick={() => {
            create({
              title,
              description,
              accessLevel,
              active: true,
            })
            onClose()
          }}
          className="px-3 py-2 text-xs bg-pink-500 text-black">
          Create Exclusive
        </button>
      </div>
    </div>
  )
}
