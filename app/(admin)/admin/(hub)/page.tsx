export default function CreatorOverviewPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Klasey Jones — Creator Hub</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Stat label="Total Fans" value="2,143" />
        <Stat label="Monthly Plays" value="18,902" />
        <Stat label="Monthly Revenue" value="$3,420" />
      </div>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-gray-800 bg-gray-950 p-4">
      <p className="text-xs text-gray-400">{label}</p>
      <p className="text-2xl font-semibold">{value}</p>
    </div>
  )
}
