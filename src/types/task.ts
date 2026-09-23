export const TASK_STATUSES = ['Pending', 'In Progress', 'Completed'] as const

export type TaskStatus = (typeof TASK_STATUSES)[number]

export interface Task {
  id: string
  title: string
  description: string
  status: TaskStatus
  createdDate: string
}
