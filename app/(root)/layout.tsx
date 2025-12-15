"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Nav from "@/components/nav"
import { fanNavItems } from "@/lib/nav/fan-nav"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="h-screen bg-black text-gray-100 flex overflow-hidden">
      {/* ===================== */}
      {/* Desktop Sidebar */}
      {/* ===================== */}
      <aside className="hidden md:flex w-64 flex-col border-r border-gray-800 bg-gray-950">
        <div className="px-4 py-4 font-bold text-pink-400">CREATOR FAN</div>
        <Nav items={fanNavItems} showCreatorLogin />
      </aside>

      {/* ===================== */}
      {/* Mobile Header */}
      {/* ===================== */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-40 h-14 flex items-center justify-between px-4 border-b border-gray-800 bg-gray-950">
        <span className="font-bold text-pink-400">CREATOR FAN</span>
        <button onClick={() => setMobileOpen(true)} aria-label="Open menu">
          <Menu size={20} />
        </button>
      </header>

      {/* ===================== */}
      {/* Mobile Drawer */}
      {/* ===================== */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          {/* Drawer */}
          <div className="w-64 bg-gray-950 border-r border-gray-800">
            <div className="flex items-center justify-between px-4 py-4">
              <span className="font-bold text-pink-400">CREATOR FAN</span>
              <button onClick={() => setMobileOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <Nav
              items={fanNavItems}
              showCreatorLogin
              onNavigate={() => setMobileOpen(false)}
            />
          </div>

          {/* Overlay */}
          <div
            className="flex-1 bg-black/70"
            onClick={() => setMobileOpen(false)}
          />
        </div>
      )}

      {/* ===================== */}
      {/* Main Content */}
      {/* ===================== */}
      <main className="flex-1 pt-14 md:pt-0 p-4 md:p-6 overflow-y-auto">
        <div className="pt-10">{children}</div>
      </main>
    </div>
  )
}
