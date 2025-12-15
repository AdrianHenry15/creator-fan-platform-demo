"use client"

import { Package, Plus, Clock } from "lucide-react"
import { useModalStore } from "@/stores/modal-store"
import { useAdminDropsStore } from "@/stores/admin/admin-drops-store"

export default function AdminDropsPage() {
  const openModal = useModalStore((s) => s.open)
  const { drops } = useAdminDropsStore()

  return (
    <div className="space-y-6">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Drops</h1>
          <p className="text-sm text-gray-400">
            Time-limited releases and special events
          </p>
        </div>

        <button
          onClick={() => openModal("create-drop")}
          className="flex cursor-pointer items-center gap-2 px-3 py-2 text-sm bg-pink-500 text-black rounded">
          <Plus size={14} />
          New Drop
        </button>
      </header>

      {/* Drops List */}
      {drops.length === 0 ? (
        <div className="border border-dashed border-gray-700 p-6 text-center text-sm text-gray-400">
          No drops yet. Create one to launch a limited-time experience.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {drops.map((drop) => (
            <div
              key={drop.id}
              className="border border-gray-800 bg-gray-950 p-4 rounded space-y-2">
              <div className="flex items-center gap-2">
                <Package size={14} className="text-pink-400" />
                <h3 className="font-semibold">{drop.title}</h3>
              </div>

              <p className="text-sm text-gray-400">{drop.description}</p>

              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Clock size={12} />
                <span>
                  {drop.startDate || "—"} → {drop.endDate || "—"}
                </span>
              </div>

              <div className="pt-2 text-xs">
                Status:{" "}
                <span
                  className={drop.active ? "text-green-400" : "text-gray-500"}>
                  {drop.active ? "Active" : "Inactive"}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
