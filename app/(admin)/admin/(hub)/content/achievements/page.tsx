"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { useAdminAchievementsStore } from "@/stores/admin/admin-achievements-store"
import CreateAchievementModal from "@/components/modal/create-achievement-modal"

export default function AdminAchievementsPage() {
  const { achievements } = useAdminAchievementsStore()
  const [open, setOpen] = useState(false)

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Achievements</h1>
          <p className="text-sm text-gray-400">
            Configure player progression goals
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="
            flex items-center gap-2 px-3 py-2
            bg-pink-500 cursor-pointer text-black text-sm
          ">
          <Plus size={14} />
          New Achievement
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((a) => (
          <div key={a.id} className="border border-gray-800 bg-gray-950 p-4">
            <h3 className="font-semibold">{a.title}</h3>
            <p className="text-sm text-gray-400">{a.description}</p>

            <div className="mt-3 flex justify-between text-xs text-gray-400">
              <span>XP: {a.xpReward}</span>
              <span>{a.active ? "Active" : "Inactive"}</span>
            </div>
          </div>
        ))}
      </div>

      {open && <CreateAchievementModal onClose={() => setOpen(false)} />}
    </div>
  )
}
