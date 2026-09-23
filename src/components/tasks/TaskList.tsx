import { CalendarDays, ClipboardList, Pencil } from 'lucide-react'
import type { Task } from '../../types/task'
import { formatDate } from '../../utils/formatDate'
import { StatusBadge } from './StatusBadge'

interface TaskListProps {
  tasks: Task[]
  onEdit: (task: Task) => void
}

export function TaskList({ tasks, onEdit }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="px-6 py-16 text-center">
        <ClipboardList className="mx-auto text-slate-400" size={32} aria-hidden="true" />
        <h3 className="mt-4 font-semibold text-slate-900">No tasks yet</h3>
        <p className="mt-2 text-sm text-slate-500">Your tasks will appear here.</p>
      </div>
    )
  }

  return (
    <ul className="divide-y divide-slate-100">
      {tasks.map((task) => (
        <li key={task.id} className="grid gap-4 px-5 py-5 sm:px-6 md:grid-cols-[minmax(0,1fr)_8rem_8rem_4rem] md:items-center">
          <div className="min-w-0">
            <h3 className="wrap-break-word text-sm font-semibold leading-6 text-slate-900">{task.title}</h3>
            <p className="mt-1 max-w-2xl wrap-break-word text-sm leading-6 text-slate-500">{task.description}</p>
          </div>
          <div><StatusBadge status={task.status} /></div>
          <div className="flex items-center gap-2 text-xs text-slate-500 md:text-sm">
            <CalendarDays size={14} aria-hidden="true" className="md:hidden" />
            <span className="sr-only">Created on </span>
            <time dateTime={task.createdDate}>{formatDate(task.createdDate)}</time>
          </div>
          <button type="button" onClick={() => onEdit(task)} aria-label={`Edit task: ${task.title}`} className="inline-flex min-h-11 items-center justify-center gap-2 justify-self-start rounded-lg px-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-teal-800 md:justify-self-end">
            <Pencil size={15} aria-hidden="true" /> Edit
          </button>
        </li>
      ))}
    </ul>
  )
}
