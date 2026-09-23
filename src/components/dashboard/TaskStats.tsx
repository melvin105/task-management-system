import { CircleCheck, Clock3, ListTodo, LoaderCircle } from 'lucide-react'
import type { Task } from '../../types/task'
import { StatCard } from './StatCard'

interface TaskStatsProps {
  tasks: Task[]
}

export function TaskStats({ tasks }: TaskStatsProps) {
  const pending = tasks.filter((task) => task.status === 'Pending').length
  const inProgress = tasks.filter((task) => task.status === 'In Progress').length
  const completed = tasks.filter((task) => task.status === 'Completed').length

  return (
    <dl aria-label="Task statistics" className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
      <StatCard label="Total tasks" value={tasks.length} icon={ListTodo} iconClassName="bg-slate-100 text-slate-600" />
      <StatCard label="Pending" value={pending} icon={Clock3} iconClassName="bg-amber-50 text-amber-700" />
      <StatCard label="In progress" value={inProgress} icon={LoaderCircle} iconClassName="bg-blue-50 text-blue-700" />
      <StatCard label="Completed" value={completed} icon={CircleCheck} iconClassName="bg-teal-50 text-teal-700" />
    </dl>
  )
}
