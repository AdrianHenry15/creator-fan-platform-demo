"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAdminStore } from "@/stores/admin-store"

export default function AdminLoginPage() {
  const router = useRouter()
  const login = useAdminStore((s) => s.login)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!login(email, password)) {
      setError("Invalid demo credentials")
      return
    }

    router.push("/admin/analytics")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-gray-100">
      <form className="w-full max-w-sm border border-gray-800 bg-gray-950 p-6 space-y-4">
        <h1 className="text-xl font-bold text-green-400">Creator Login</h1>

        <p className="text-xs text-gray-400">
          Demo credentials:
          <br />
          creator@demo.com / demo123
        </p>

        <input
          className="w-full bg-black border border-gray-700 px-3 py-2 text-sm"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full bg-black border border-gray-700 px-3 py-2 text-sm"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-xs text-red-400">{error}</p>}

        <button
          onClick={handleSubmit}
          className="w-full py-2 bg-green-500 text-black text-sm font-medium">
          Enter Creator Hub
        </button>
      </form>
    </div>
  )
}
