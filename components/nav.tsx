"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Shield } from "lucide-react"

export type NavItem = {
  label: string
  href: string
  icon: React.ElementType
}

type NavProps = {
  items: NavItem[]
  onNavigate?: () => void
  showCreatorLogin?: boolean
}

export default function Nav({
  items,
  onNavigate,
  showCreatorLogin = false,
}: NavProps) {
  const pathname = usePathname()

  return (
    <div className="flex flex-col h-full">
      {/* Nav Items */}
      <nav className="space-y-1 px-2 flex-1">
        {items.map(({ label, href, icon: Icon }) => {
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
                    ? "bg-gray-900 text-pink-400 border-pink-500"
                    : "text-gray-300 hover:bg-gray-900 hover:text-white"
                }
              `}>
              <Icon size={16} />
              {label}
            </Link>
          )
        })}
      </nav>

      {/* Optional Creator Login */}
      {showCreatorLogin && (
        <div className="px-2 pb-3">
          <Link
            href="/admin"
            onClick={onNavigate}
            className="
              flex items-center gap-2 px-3 py-2
              text-xs uppercase tracking-wide
              border border-dashed border-pink-500
              text-pink-400
              hover:bg-pink-500 hover:text-black
              transition
            ">
            <Shield size={14} />
            Creator Login
            <span className="ml-auto opacity-60">Demo</span>
          </Link>
        </div>
      )}
    </div>
  )
}
