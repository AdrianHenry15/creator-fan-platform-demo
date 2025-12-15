"use client"

import { useState } from "react"
import { useAdminDropsStore } from "@/stores/admin/admin-drops-store"

export default function CreateDropModal({ onClose }: { onClose: () => void }) {
  const create = useAdminDropsStore((s) => s.create)

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  return (
    <div className="w-full max-w-md bg-gray-950 border border-gray-800 p-6 space-y-4">
      <h2 className="text-lg font-semibold">New Drop</h2>

      <input
        className="w-full bg-black border border-gray-700 px-3 py-2 text-sm"
        placeholder="Drop title"
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
        type="date"
        className="w-full bg-black border border-gray-700 px-3 py-2 text-sm"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />

      <input
        type="date"
        className="w-full bg-black border border-gray-700 px-3 py-2 text-sm"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
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
              startDate,
              endDate,
              active: true,
            })
            onClose()
          }}
          className="px-3 py-2 text-xs bg-pink-500 text-black">
          Schedule Drop
        </button>
      </div>
    </div>
  )
}
