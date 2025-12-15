"use client"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { LayoutDashboard, BarChart3, DollarSign, LogOut } from "lucide-react"
import { useAdminStore } from "@/stores/admin-store"

const nav = [
  { label: "Overview", href: "/admin/overview", icon: LayoutDashboard },
  { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { label: "Finances", href: "/admin/finances", icon: DollarSign },
]

export default function CreatorHubLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const { isAdmin, isExiting, finishExit, logout } = useAdminStore()

  useEffect(() => {
    if (!isAdmin && !isExiting && pathname.startsWith("/admin")) {
      router.replace("/admin")
    }

    // Once we leave admin routes, clear exit flag
    if (isExiting && !pathname.startsWith("/admin")) {
      finishExit()
    }
  }, [isAdmin, isExiting, pathname, router, finishExit])

  if (!isAdmin) return null

  return (
    <div className="flex h-screen bg-black text-gray-100">
      <aside className="w-64 flex flex-col border-r border-gray-800 bg-gray-950">
        <div className="px-4 py-4 font-bold tracking-wide text-green-400">
          CREATOR HUB
        </div>

        <nav className="px-2 space-y-1">
          {nav.map(({ label, href, icon: Icon }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`
                  flex items-center gap-3 px-3 py-2 text-sm
                  ${
                    active
                      ? "bg-gray-900 text-green-400"
                      : "text-gray-300 hover:bg-gray-900"
                  }
                `}>
                <Icon size={16} />
                {label}
              </Link>
            )
          })}
        </nav>

        <div className="mt-auto p-3">
          <button
            onClick={() => {
              logout()
              router.push("/dashboard")
            }}
            className="
              w-full flex items-center gap-2
              px-3 py-2 text-xs
              border border-gray-700
              text-gray-300
              hover:bg-gray-900
              transition cursor-pointer
            ">
            <LogOut size={14} />
            Exit Creator Hub
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto p-6">{children}</main>
    </div>
  )
}
