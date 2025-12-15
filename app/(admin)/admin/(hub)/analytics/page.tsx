import { Users, Activity, Clock } from "lucide-react"
import StatWidget from "@/components/widgets/stat-widget"

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Analytics</h1>
        <p className="text-sm text-gray-400">
          Fan activity and engagement telemetry
        </p>
      </header>

      {/* Primary Widgets */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatWidget
          label="Daily Active Fans"
          value="342"
          delta="+18 today"
          icon={<Users size={16} />}
        />

        <StatWidget
          label="New Fans (30d)"
          value="+421"
          delta="+12%"
          icon={<Activity size={16} />}
        />

        <StatWidget
          label="Avg Session Time"
          value="6m 12s"
          delta="+34s"
          icon={<Clock size={16} />}
        />
      </section>

      {/* Activity Feed */}
      <section className="border border-gray-800 bg-gray-950 p-4">
        <p className="text-sm font-medium mb-2">Recent Signals</p>

        <ul className="text-sm text-gray-400 space-y-1">
          <li>• Spike in plays for “Lobby Screen”</li>
          <li>• Membership conversion rate increased</li>
          <li>• Mobile sessions up 22%</li>
        </ul>
      </section>
    </div>
  )
}
