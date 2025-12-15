"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  Music,
  Users,
  Trophy,
  Gift,
  DollarSign,
  Shield,
} from "lucide-react"

type NavProps = {
  onNavigate?: () => void
}

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: Home },
  { label: "Music", href: "/music", icon: Music },
  { label: "Members", href: "/members", icon: Users },
  { label: "Achievements", href: "/achievements", icon: Trophy },
  { label: "Rewards", href: "/rewards", icon: Gift },
  { label: "Donate", href: "/donate", icon: DollarSign },
]

export default function Nav({ onNavigate }: NavProps) {
  const pathname = usePathname()

  return (
    <div className="flex flex-col h-full">
      {/* ===================== */}
      {/* Fan Navigation */}
      {/* ===================== */}
      <nav className="space-y-1 px-2 flex-1">
        {navItems.map(({ label, href, icon: Icon }) => {
          const active = pathname === href

          return (
            <Link
              key={href}
              href={href}
              onClick={onNavigate}
              className={`
                flex items-center gap-3 px-3 py-2
                text-sm font-medium border border-transparent
                transition
                ${
                  active
                    ? "bg-gray-900 text-green-400 border-green-500"
                    : "text-gray-300 hover:bg-gray-900 hover:text-white"
                }
              `}>
              <Icon size={16} />
              {label}
            </Link>
          )
        })}
      </nav>

      {/* ===================== */}
      {/* Creator Login (Demo) */}
      {/* ===================== */}
      <div className="px-2 pb-3">
        <Link
          href="/admin"
          onClick={onNavigate}
          className="
            flex items-center gap-2 px-3 py-2
            text-xs uppercase tracking-wide
            border border-dashed border-green-500
            text-green-400
            hover:bg-green-500 hover:text-black
            transition
          ">
          <Shield size={14} />
          Creator Login
          <span className="ml-auto opacity-60">Demo</span>
        </Link>
      </div>
    </div>
  )
}
