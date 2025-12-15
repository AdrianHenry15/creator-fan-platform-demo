import {
  DollarSign,
  CreditCard,
  Wallet,
  Users,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"
import StatWidget from "@/components/widgets/stat-widget"

export default function FinancesPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <header>
        <h1 className="text-2xl font-bold">Finances</h1>
        <p className="text-sm text-gray-400">
          Revenue performance, fan monetization, and payout status
        </p>
      </header>

      {/* Revenue Overview */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-400">
          Revenue Overview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatWidget
            label="Gross Revenue (30d)"
            value="$3,780"
            delta="+$410"
            icon={<DollarSign size={16} />}
          />

          <StatWidget
            label="Net Revenue"
            value="$3,420"
            delta="+12%"
            icon={<TrendingUp size={16} />}
          />

          <StatWidget
            label="Pending Payout"
            value="$780"
            icon={<Wallet size={16} />}
          />

          <StatWidget
            label="Last Payout"
            value="$2,640"
            delta="7 days ago"
            icon={<ArrowUpRight size={16} />}
          />
        </div>
      </section>

      {/* Fan Monetization */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-400">
          Fan Monetization
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatWidget
            label="Paying Fans"
            value="312"
            delta="+14"
            icon={<Users size={16} />}
          />

          <StatWidget
            label="Avg Revenue / Fan"
            value="$10.96"
            delta="+$0.84"
            icon={<CreditCard size={16} />}
          />

          <StatWidget
            label="Conversion Rate"
            value="14.6%"
            delta="+1.2%"
            icon={<TrendingUp size={16} />}
          />

          <StatWidget
            label="Membership Churn"
            value="2.1%"
            delta="-0.4%"
            icon={<ArrowDownRight size={16} />}
          />
        </div>
      </section>

      {/* Revenue Breakdown */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-400">
          Revenue Breakdown
        </h2>

        <div className="border border-gray-800 bg-gray-950 p-4 space-y-2">
          <BreakdownRow label="Memberships" value="$2,300" />
          <BreakdownRow label="Donations" value="$1,120" />
          <BreakdownRow label="Other" value="$360" />
        </div>
      </section>

      {/* System Notes / Demo Flavor */}
      <section className="border border-gray-800 bg-gray-950 p-4">
        <p className="text-sm font-medium mb-2">System Notes</p>
        <ul className="text-sm text-gray-400 space-y-1">
          <li>• Donation spikes correlate with new releases</li>
          <li>• Membership growth strongest on mobile</li>
          <li>• Revenue pacing ahead of last month</li>
        </ul>
      </section>
    </div>
  )
}

/* -------------------- */
/* Helpers */
/* -------------------- */

function BreakdownRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-sm text-gray-400">
      <span>{label}</span>
      <span className="font-medium text-gray-200">{value}</span>
    </div>
  )
}
