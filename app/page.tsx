import Link from "next/link"

export default function RootPage() {
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">
          Creator Fan Platform
        </h1>

        <p className="text-gray-600 dark:text-gray-400">
          A game-inspired experience for artists and fans.
        </p>

        <Link
          href="/dashboard"
          className="
            inline-flex items-center justify-center
            rounded-full px-8 py-3 text-sm font-medium
            bg-black text-white hover:bg-gray-800
            dark:bg-white dark:text-black dark:hover:bg-gray-200
            transition
          ">
          Enter
        </Link>
      </div>
    </main>
  )
}
