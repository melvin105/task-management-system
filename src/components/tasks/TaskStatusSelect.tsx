import { Select } from '../common/Select'
import { statusOptions } from './statusOptions'
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
    <Select
      label={`Status for ${task.title}`}
      value={task.status}
      onChange={(value) => onChange(task.id, value as TaskStatus)}
      options={statusOptions}
      className="max-w-44"
      toneClassName={statusClasses[task.status]}
    />
  )
}
