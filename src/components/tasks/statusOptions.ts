import { TASK_STATUSES } from '../../types/task'
import type { TaskStatus } from '../../types/task'

const dots: Record<TaskStatus, string> = {
  Pending: 'bg-amber-500',
  'In Progress': 'bg-blue-500',
  Completed: 'bg-teal-600',
}

export const statusOptions = TASK_STATUSES.map((status) => ({
  value: status,
  label: status,
  dotClassName: dots[status],
}))
