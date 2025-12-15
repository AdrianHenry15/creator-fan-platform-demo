export default function ChartCard({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="border border-gray-800 bg-gray-950 p-4 space-y-3">
      <p className="text-sm font-medium">{title}</p>
      <div className="h-56 w-full">{children}</div>
    </div>
  )
}
