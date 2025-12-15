"use client"

import { useState } from "react"
import Nav from "@/components/nav"
import { Menu, X } from "lucide-react"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="flex h-screen bg-black text-gray-100">
      {/* ===================== */}
      {/* Desktop Sidebar */}
      {/* ===================== */}
      <aside className="hidden md:flex w-64 flex-col border-r border-gray-800 bg-gray-950">
        <div className="px-4 py-4 text-lg font-bold tracking-wide text-green-400">
          CREATOR HUB
        </div>

        <Nav />
      </aside>

      {/* ===================== */}
      {/* Mobile Header */}
      {/* ===================== */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-40 h-14 flex items-center justify-between px-4 border-b border-gray-800 bg-gray-950">
        <span className="font-bold tracking-wide text-green-400">
          CREATOR HUB
        </span>

        <button
          onClick={() => setMobileOpen(true)}
          className="p-2"
          aria-label="Open menu">
          <Menu size={20} />
        </button>
      </header>

      {/* ===================== */}
      {/* Mobile Sidebar Overlay */}
      {/* ===================== */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Drawer */}
          <div className="w-64 bg-gray-950 border-r border-gray-800">
            <div className="flex items-center justify-between px-4 py-4">
              <span className="font-bold tracking-wide text-green-400">
                CREATOR HUB
              </span>

              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu">
                <X size={20} />
              </button>
            </div>

            <Nav onNavigate={() => setMobileOpen(false)} />
          </div>

          {/* Backdrop */}
          <div
            className="flex-1 bg-black/70"
            onClick={() => setMobileOpen(false)}
          />
        </div>
      )}

      {/* ===================== */}
      {/* Main Content */}
      {/* ===================== */}
      <main className="flex-1 overflow-y-auto pt-14 md:pt-0 p-4 md:p-6">
        <div className="pt-10">{children}</div>
      </main>
    </div>
  )
}
