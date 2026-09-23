import { CalendarDays, ClipboardList, Pencil, Trash2 } from 'lucide-react'
import type { Task, TaskStatus } from '../../types/task'
import { formatDate } from '../../utils/formatDate'
import { TaskStatusSelect } from './TaskStatusSelect'

interface TaskListProps {
  tasks: Task[]
  hasTasks: boolean
  onClearFilters: () => void
  onEdit: (task: Task) => void
  onDelete: (task: Task) => void
  onStatusChange: (id: string, status: TaskStatus) => void
}

export function TaskList({ tasks, hasTasks, onClearFilters, onEdit, onDelete, onStatusChange }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="px-6 py-16 text-center">
        <ClipboardList className="mx-auto text-slate-400" size={32} aria-hidden="true" />
        <h3 className="mt-4 font-semibold text-slate-900">{hasTasks ? 'No matching tasks' : 'No tasks yet'}</h3>
        <p className="mt-2 text-sm text-slate-500">{hasTasks ? 'Try another search or change the status filter.' : 'Choose Add task to start a new list.'}</p>
        {hasTasks && <button type="button" onClick={onClearFilters} className="mt-4 min-h-11 rounded-lg px-4 text-sm font-medium text-teal-800 hover:bg-teal-50">Clear filters</button>}
      </div>
    )
  }

  return (
    <ul className="divide-y divide-slate-100">
      {tasks.map((task) => (
        <li key={task.id} className="grid gap-4 px-5 py-5 sm:px-6 lg:grid-cols-[minmax(0,1fr)_10.5rem_8rem_10rem] lg:items-center">
          <div className="min-w-0">
            <h3 className="wrap-break-word text-sm font-semibold leading-6 text-slate-900">{task.title}</h3>
            <p className="mt-1 max-w-2xl wrap-break-word text-sm leading-6 text-slate-500">{task.description}</p>
          </div>
          <div><TaskStatusSelect task={task} onChange={onStatusChange} /></div>
          <div className="flex items-center gap-2 text-xs text-slate-500 md:text-sm">
            <CalendarDays size={14} aria-hidden="true" className="lg:hidden" />
            <span className="sr-only">Created on </span>
            <time dateTime={task.createdDate}>{formatDate(task.createdDate)}</time>
          </div>
          <div className="flex gap-1 lg:justify-end">
          <button type="button" onClick={() => onEdit(task)} aria-label={`Edit task: ${task.title}`} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-teal-800">
            <Pencil size={15} aria-hidden="true" /> Edit
          </button>
          <button type="button" onClick={() => onDelete(task)} aria-label={`Delete task: ${task.title}`} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-2 text-sm font-medium text-red-700 hover:bg-red-50">
            <Trash2 size={15} aria-hidden="true" /> Delete
          </button>
          </div>
        </li>
      ))}
    </ul>
  )
}
