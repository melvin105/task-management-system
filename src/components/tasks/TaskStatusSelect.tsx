import { TASK_STATUSES } from '../../types/task'
import type { Task, TaskStatus } from '../../types/task'

const statusClasses: Record<TaskStatus, string> = {
  Pending: 'border-amber-200 bg-amber-50 text-amber-800',
  'In Progress': 'border-blue-200 bg-blue-50 text-blue-800',
  Completed: 'border-teal-200 bg-teal-50 text-teal-800',
}

interface TaskStatusSelectProps {
  task: Task
  onChange: (id: string, status: TaskStatus) => void
}

export function TaskStatusSelect({ task, onChange }: TaskStatusSelectProps) {
  return (
    <select
      aria-label={`Status for ${task.title}`}
      value={task.status}
      onChange={(event) => onChange(task.id, event.target.value as TaskStatus)}
      className={`min-h-11 w-36 max-w-full rounded-lg border px-2 text-sm font-medium ${statusClasses[task.status]}`}
    >
      {TASK_STATUSES.map((status) => <option key={status} value={status}>{status}</option>)}
    </select>
  )
}
