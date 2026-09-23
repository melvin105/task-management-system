import { ListTodo } from 'lucide-react'

function App() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-50 px-6 py-12 text-slate-900">
      <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
        <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
          <ListTodo size={26} aria-hidden="true" />
        </div>
        <p className="text-sm font-medium text-teal-700">Task Management System</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">TaskFlow</h1>
        <p className="mt-4 leading-relaxed text-slate-600">
          A simple space to organize your tasks and track your progress.
        </p>
        <p className="mt-8 border-t border-slate-100 pt-5 text-sm text-slate-500">
          Project foundation ready. Task features are coming next.
        </p>
      </div>
    </main>
  )
}

export default App
