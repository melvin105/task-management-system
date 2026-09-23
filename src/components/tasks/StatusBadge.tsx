import type { TaskStatus } from '../../types/task'

const statusClasses: Record<TaskStatus, string> = {
  Pending: 'bg-amber-50 text-amber-800 ring-amber-600/15',
  'In Progress': 'bg-blue-50 text-blue-800 ring-blue-600/15',
  Completed: 'bg-teal-50 text-teal-800 ring-teal-600/15',
}

export function StatusBadge({ status }: { status: TaskStatus }) {
  return (
    <span className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${statusClasses[status]}`}>
      <span aria-hidden="true" className="size-1.5 rounded-full bg-current" />
      {status}
    </span>
  )
}
