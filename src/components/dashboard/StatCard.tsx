import type { LucideIcon } from 'lucide-react'

interface StatCardProps {
  label: string
  value: number
  icon: LucideIcon
  iconClassName: string
}

export function StatCard({ label, value, icon: Icon, iconClassName }: StatCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
      <div className="flex items-center justify-between gap-2">
        <dt className="text-sm font-medium text-slate-600">{label}</dt>
        <span className={`flex size-8 shrink-0 items-center justify-center rounded-lg ${iconClassName}`}>
          <Icon size={17} aria-hidden="true" />
        </span>
      </div>
      <dd className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">{value}</dd>
    </div>
  )
}
