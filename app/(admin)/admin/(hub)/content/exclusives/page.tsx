"use client"

import { Lock, Plus, UserCheck } from "lucide-react"
import { useModalStore } from "@/stores/modal-store"
import { useAdminExclusivesStore } from "@/stores/admin/admin-exclusives-store"

export default function AdminExclusivesPage() {
  const openModal = useModalStore((s) => s.open)
  const { exclusives } = useAdminExclusivesStore()

  return (
    <div className="space-y-6">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Exclusive Content</h1>
          <p className="text-sm text-gray-400">
            Members-only and gated releases
          </p>
        </div>

        <button
          onClick={() => openModal("create-exclusive")}
          className="flex items-center gap-2 px-3 py-2 text-sm bg-pink-500 text-black rounded">
          <Plus size={14} />
          New Exclusive
        </button>
      </header>

      {/* Exclusives List */}
      {exclusives.length === 0 ? (
        <div className="border border-dashed border-gray-700 p-6 text-center text-sm text-gray-400">
          No exclusive content yet. Create gated experiences for your core
          supporters.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {exclusives.map((item) => (
            <div
              key={item.id}
              className="border border-gray-800 bg-gray-950 p-4 rounded space-y-2">
              <div className="flex items-center gap-2">
                <Lock size={14} className="text-pink-400" />
                <h3 className="font-semibold">{item.title}</h3>
              </div>

              <p className="text-sm text-gray-400">{item.description}</p>

              <div className="flex items-center gap-2 text-xs text-gray-500">
                <UserCheck size={12} />
                <span>{item.accessLevel}</span>
              </div>

              <div className="pt-2 text-xs">
                Status:{" "}
                <span
                  className={item.active ? "text-green-400" : "text-gray-500"}>
                  {item.active ? "Active" : "Inactive"}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
