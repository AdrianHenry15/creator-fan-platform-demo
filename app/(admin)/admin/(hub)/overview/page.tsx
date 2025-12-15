export default function CreatorOverviewPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <header className="space-y-1">
        <h1 className="text-3xl font-bold">Klasey Jones — Creator Hub</h1>
        <p className="text-sm text-gray-400">
          Performance snapshot across fans, plays, and revenue
        </p>
      </header>

      {/* Primary Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Stat label="Total Fans" value="2,143" sub="+84 this month" />
        <Stat label="Monthly Plays" value="18,902" sub="+12.6%" />
        <Stat label="Monthly Revenue" value="$3,420" sub="+$410" />
      </section>

      {/* Secondary Panels */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Panel title="Top Performing Track">
          <p className="font-medium">Let’s See What Happens</p>
          <p className="text-sm text-gray-400">
            6,421 plays · 42% completion rate
          </p>
        </Panel>

        <Panel title="Top Support Channel">
          <p className="font-medium">Memberships</p>
          <p className="text-sm text-gray-400">312 active supporters</p>
        </Panel>
      </section>

      {/* Activity Summary */}
      <section className="border border-gray-800 bg-gray-950 p-6 space-y-2">
        <h2 className="text-lg font-semibold">Recent Activity</h2>
        <ul className="text-sm text-gray-400 space-y-1">
          <li>• 14 new members joined this week</li>
          <li>• $220 in donations received</li>
          <li>• “Lobby Screen” gained traction (+18%)</li>
        </ul>
      </section>
    </div>
  )
}

/* -------------------- */
/* Components */
/* -------------------- */

function Stat({
  label,
  value,
  sub,
}: {
  label: string
  value: string
  sub?: string
}) {
  return (
    <div className="border border-gray-800 bg-gray-950 p-4 space-y-1">
      <p className="text-xs text-gray-400">{label}</p>
      <p className="text-2xl font-semibold">{value}</p>
      {sub && <p className="text-xs text-pink-400">{sub}</p>}
    </div>
  )
}

function Panel({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="border border-gray-800 bg-gray-950 p-4 space-y-1">
      <p className="text-sm font-medium">{title}</p>
      {children}
    </div>
  )
}
