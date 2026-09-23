import { ListTodo } from 'lucide-react'
import { TaskStats } from '../components/dashboard/TaskStats'
import { TaskList } from '../components/tasks/TaskList'
import { initialTasks } from '../data/tasks'

export function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <a href="#main-content" className="sr-only rounded-lg bg-white px-4 py-3 text-teal-800 focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-10 focus:ring-2 focus:ring-teal-700">
        Skip to content
      </a>
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-lg bg-teal-700 text-white">
              <ListTodo size={21} aria-hidden="true" />
            </span>
            <span className="text-lg font-semibold tracking-tight">TaskFlow<span className="text-teal-700">.</span></span>
          </div>
          <span className="text-xs font-medium text-slate-500 sm:text-sm">Personal workspace</span>
        </div>
      </header>

      <main id="main-content" className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12">
        <div className="mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-teal-700">Your workspace, at a glance</p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Task overview</h1>
          <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">A little structure. A clearer day. Keep track of what needs to get done.</p>
        </div>

        <TaskStats tasks={initialTasks} />

        <section aria-labelledby="tasks-heading" className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-5 py-5 sm:px-6">
            <div>
              <h2 id="tasks-heading" className="font-semibold">All tasks</h2>
              <p className="mt-1 text-sm text-slate-500">Everything on your list, in one place.</p>
            </div>
            <span className="shrink-0 rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">{initialTasks.length} tasks</span>
          </div>
          <div aria-hidden="true" className="hidden grid-cols-[minmax(0,1fr)_9rem_9rem] gap-6 border-b border-slate-100 bg-slate-50/70 px-6 py-3 text-xs font-medium text-slate-500 md:grid">
            <span>Task</span>
            <span>Status</span>
            <span>Created date</span>
          </div>
          <TaskList tasks={initialTasks} />
        </section>
        <footer className="mt-6 text-center text-xs leading-5 text-slate-500">
          A little progress, every day.
        </footer>
      </main>
    </div>
  )
}
