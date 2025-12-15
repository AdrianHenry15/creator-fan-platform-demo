import { ReactNode } from "react"

type StatWidgetProps = {
  label: string
  value: string
  delta?: string
  icon?: ReactNode
}

export default function StatWidget({
  label,
  value,
  delta,
  icon,
}: StatWidgetProps) {
  return (
    <div className="border border-gray-800 bg-gray-950 p-4 space-y-1">
      <div className="flex items-center justify-between">
        <p className="text-xs text-gray-400 uppercase tracking-wide">{label}</p>
        {icon}
      </div>

      <p className="text-2xl font-semibold">{value}</p>

      {delta && <p className="text-xs text-pink-400">{delta}</p>}
    </div>
  )
}
