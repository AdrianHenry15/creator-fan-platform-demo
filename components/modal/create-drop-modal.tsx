"use client"

import { useState } from "react"
import BaseModal from "./base-modal"
import { useAdminDropsStore } from "@/stores/admin/admin-drops-store"

export default function CreateDropModal({ onClose }: { onClose: () => void }) {
  const create = useAdminDropsStore((s) => s.create)

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  const isDisabled = !title.trim()

  return (
    <BaseModal
      title="New Drop"
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
                startDate,
                endDate,
                active: true,
              })
              onClose()
            }}
            className={`btn-primary px-4 py-2 ${
              isDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}>
            Schedule Drop
          </button>
        </div>
      }>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-400">
            Drop Title
          </label>
          <input
            className="modal-input"
            placeholder="e.g. Limited Merch Drop"
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
            placeholder="What makes this drop special?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-400">
              Start Date
            </label>
            <input
              type="date"
              className="modal-input"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-400">
              End Date
            </label>
            <input
              type="date"
              className="modal-input"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
      </div>
    </BaseModal>
  )
}
