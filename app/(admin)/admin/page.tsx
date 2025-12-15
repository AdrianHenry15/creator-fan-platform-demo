"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAdminStore } from "@/stores/admin/admin-store"

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
    <div className="min-h-screen bg-black text-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-sm md:max-w-md">
        {/* Card */}
        <form
          onSubmit={handleSubmit}
          className="
            border border-gray-800 bg-gray-950
            rounded-xl
            p-6 md:p-8
            space-y-6
          ">
          {/* Header */}
          <div className="space-y-1">
            <h1 className="text-xl md:text-2xl font-bold text-pink-400">
              Creator Login
            </h1>
            <p className="text-xs md:text-sm text-gray-400">
              Access the Creator Hub demo
            </p>
          </div>

          {/* Demo Credentials */}
          <div className="rounded-lg border border-dashed border-gray-700 bg-black/40 p-3 text-xs text-gray-400">
            <p className="font-medium text-gray-300 mb-1">Demo credentials</p>
            <p>creator@demo.com</p>
            <p>demo123</p>
          </div>

          {/* Inputs */}
          <div className="space-y-3">
            <input
              className="
                w-full bg-black border border-gray-700
                px-3 py-2.5 text-sm rounded
                focus:outline-none focus:border-pink-500
              "
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              className="
                w-full bg-black border border-gray-700
                px-3 py-2.5 text-sm rounded
                focus:outline-none focus:border-pink-500
              "
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Error */}
          {error && <p className="text-xs text-red-400">{error}</p>}

          {/* Submit */}
          <button
            type="submit"
            className="
              w-full py-2.5 rounded-lg
              bg-pink-500 text-black
              text-sm font-medium
              hover:bg-pink-400
              transition
            ">
            Enter Creator Hub
          </button>
        </form>

        {/* Footer spacing */}
        <p className="mt-6 text-center text-xs text-gray-500">
          Demo only — no real authentication
        </p>
      </div>
    </div>
  )
}
