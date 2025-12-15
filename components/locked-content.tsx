"use client"

import { demoPosts } from "@/lib/mock-data"
import { useAuthStore } from "@/stores/auth-store"

export default function LockedContent() {
  const { isAuthenticated, login } = useAuthStore()

  if (!isAuthenticated) {
    return (
      <div className="border p-4 rounded text-center">
        🔒 Members only
        <div className="mt-2">
          <button
            onClick={login}
            className="px-4 py-2 bg-black text-white rounded">
            Sign in to unlock
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {demoPosts.map((post) => (
        <div key={post.id} className="border p-3 rounded">
          {post.title}
        </div>
      ))}
    </div>
  )
}
