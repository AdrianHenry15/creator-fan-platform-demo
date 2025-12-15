"use client"

import Link from "next/link"
import { Trophy, Gift, Package, Lock } from "lucide-react"
import { useAdminAchievementsStore } from "@/stores/admin/admin-achievements-store"
import { useAdminRewardsStore } from "@/stores/admin/admin-rewards-store"
import { useAdminDropsStore } from "@/stores/admin/admin-drops-store"
import { useAdminExclusivesStore } from "@/stores/admin/admin-exclusives-store"

export default function AdminContentPage() {
  const achievementsCount = useAdminAchievementsStore(
    (s) => s.achievements.length
  )
  const rewardsCount = useAdminRewardsStore((s) => s.rewards.length)
  const dropsCount = useAdminDropsStore((s) => s.drops.length)
  const exclusivesCount = useAdminExclusivesStore((s) => s.exclusives.length)

  const items = [
    {
      title: "Achievements",
      description: "Define player goals and XP rewards",
      href: "/admin/content/achievements",
      icon: Trophy,
      count: achievementsCount,
    },
    {
      title: "Rewards",
      description: "Unlockables tied to achievements or XP",
      href: "/admin/content/rewards",
      icon: Gift,
      count: rewardsCount,
    },
    {
      title: "Drops",
      description: "Time-limited or exclusive content",
      href: "/admin/content/drops",
      icon: Package,
      count: dropsCount,
    },
    {
      title: "Exclusive Content",
      description: "Members-only or gated releases",
      href: "/admin/content/exclusives",
      icon: Lock,
      count: exclusivesCount,
    },
  ]

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Content Systems</h1>
        <p className="text-sm text-gray-400">
          Configure achievements, rewards, and exclusive experiences
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map(({ title, description, href, icon: Icon, count }) => (
          <Link
            key={title}
            href={href}
            className="
                relative border border-gray-800 bg-gray-950 p-5
                hover:bg-gray-900 transition
              ">
            {/* Count Badge */}
            <div className="absolute top-3 right-3 text-xs px-2 py-1 rounded border border-pink-500 text-pink-400">
              {count}
            </div>

            <div className="flex items-center gap-3 mb-2">
              <Icon size={18} className="text-pink-400" />
              <h2 className="font-semibold">{title}</h2>
            </div>

            <p className="text-sm text-gray-400">{description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
