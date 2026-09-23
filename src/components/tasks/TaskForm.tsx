import { useId, useState } from 'react'
import type { FormEvent } from 'react'
import { TASK_STATUSES } from '../../types/task'
import type { Task, TaskInput, TaskStatus } from '../../types/task'
import { Modal } from '../common/Modal'

interface TaskFormProps {
  task?: Task
  onSave: (values: TaskInput) => void
  onClose: () => void
}

export function TaskForm({ task, onSave, onClose }: TaskFormProps) {
  const id = useId()
  const [title, setTitle] = useState(task?.title ?? '')
  const [description, setDescription] = useState(task?.description ?? '')
  const [status, setStatus] = useState<TaskStatus>(task?.status ?? 'Pending')
  const [errors, setErrors] = useState<{ title?: string; description?: string }>({})
  const fieldClassName = 'mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 aria-invalid:border-red-500'

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const values = { title: title.trim(), description: description.trim(), status }
    const nextErrors: typeof errors = {}

    if (values.title.length < 3 || values.title.length > 100) {
      nextErrors.title = 'Enter a title between 3 and 100 characters.'
    }
    if (!values.description || values.description.length > 1000) {
      nextErrors.description = 'Enter a description between 1 and 1,000 characters.'
    }
    setErrors(nextErrors)

    const firstInvalidField = nextErrors.title ? 'title' : nextErrors.description ? 'description' : null
    if (firstInvalidField) {
      const field = event.currentTarget.elements.namedItem(firstInvalidField)
      if (field instanceof HTMLElement) field.focus()
      return
    }

    onSave(values)
  }

  return (
    <Modal title={task ? 'Edit task' : 'Add a task'} description="Give your task a clear title and a little context. All fields are required." onClose={onClose}>
      <form onSubmit={handleSubmit} noValidate className="space-y-5 p-6">
        <div>
          <label htmlFor={`${id}-title`} className="text-sm font-medium">Title</label>
          <input id={`${id}-title`} name="title" value={title} onChange={(event) => setTitle(event.target.value)} required minLength={3} maxLength={100} autoFocus aria-invalid={Boolean(errors.title)} aria-describedby={errors.title ? `${id}-title-error` : undefined} className={fieldClassName} placeholder="e.g. Review the dashboard design" />
          {errors.title && <p id={`${id}-title-error`} className="mt-2 text-sm text-red-700">{errors.title}</p>}
        </div>
        <div>
          <label htmlFor={`${id}-description`} className="text-sm font-medium">Description</label>
          <textarea id={`${id}-description`} name="description" value={description} onChange={(event) => setDescription(event.target.value)} required maxLength={1000} rows={4} aria-invalid={Boolean(errors.description)} aria-describedby={errors.description ? `${id}-description-error` : undefined} className={`${fieldClassName} resize-y`} placeholder="What needs to get done?" />
          {errors.description && <p id={`${id}-description-error`} className="mt-2 text-sm text-red-700">{errors.description}</p>}
        </div>
        <div>
          <label htmlFor={`${id}-status`} className="text-sm font-medium">Status</label>
          <select id={`${id}-status`} name="status" value={status} onChange={(event) => setStatus(event.target.value as TaskStatus)} required className={fieldClassName}>
            {TASK_STATUSES.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
        </div>
        <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:justify-end">
          <button type="button" onClick={onClose} className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">Cancel</button>
          <button type="submit" className="rounded-lg bg-teal-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-teal-800">{task ? 'Save changes' : 'Create task'}</button>
        </div>
      </form>
    </Modal>
  )
}
