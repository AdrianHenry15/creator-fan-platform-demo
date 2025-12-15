"use client"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Menu, X, LogOut } from "lucide-react"
import Nav from "@/components/nav"
import { adminNavItems } from "@/lib/nav/admin-nav"
import { useAdminStore } from "@/stores/admin/admin-store"

export default function CreatorHubLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const { isAdmin, logout, isExiting, finishExit } = useAdminStore()

  useEffect(() => {
    // Block accidental admin access
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
    <div className="h-screen flex bg-black text-gray-100 overflow-hidden">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 flex-col border-r border-gray-800 bg-gray-950 overflow-hidden">
        <div className="px-4 py-4 font-bold text-pink-400">CREATOR HUB</div>

        <Nav items={adminNavItems} />

        <div className="p-3 mt-auto">
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
            ">
            <LogOut size={14} />
            Exit Creator Hub
          </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-40 h-14 flex items-center justify-between px-4 border-b border-gray-800 bg-gray-950">
        <span className="font-bold text-pink-400">CREATOR HUB</span>
        <button onClick={() => setMobileOpen(true)}>
          <Menu size={20} />
        </button>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          {/* Drawer */}
          <div className="w-64 bg-gray-950 border-r border-gray-800 overflow-hidden flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-4">
              <span className="font-bold text-pink-400">CREATOR HUB</span>
              <button onClick={() => setMobileOpen(false)}>
                <X size={18} />
              </button>
            </div>

            {/* Nav */}
            <Nav
              items={adminNavItems}
              onNavigate={() => setMobileOpen(false)}
            />

            {/* Exit Button (Pinned Bottom) */}
            <div className="mt-auto p-3">
              <button
                onClick={() => {
                  logout()
                  setMobileOpen(false)
                  router.push("/dashboard")
                }}
                className="
            w-full flex items-center gap-2
            px-3 py-2 text-xs
            border border-gray-700
            text-gray-300
            hover:bg-gray-900
          ">
                <LogOut size={14} />
                Exit Creator Hub
              </button>
            </div>
          </div>

          {/* Overlay */}
          <div
            className="flex-1 bg-black/70"
            onClick={() => setMobileOpen(false)}
          />
        </div>
      )}

      {/* Content */}
      <main className="flex-1 overflow-y-auto pt-14 md:pt-0 p-6">
        <div className="pt-10">{children}</div>
      </main>
    </div>
  )
}
