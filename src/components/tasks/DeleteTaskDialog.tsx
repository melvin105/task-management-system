import type { Task } from '../../types/task'
import { Modal } from '../common/Modal'

interface DeleteTaskDialogProps {
  task: Task
  onConfirm: () => void
  onClose: () => void
}

export function DeleteTaskDialog({ task, onConfirm, onClose }: DeleteTaskDialogProps) {
  return (
    <Modal title="Delete task?" description="This task will be removed from your list. This action cannot be undone." onClose={onClose}>
      <div className="p-6">
        <p className="wrap-break-word rounded-lg bg-slate-50 p-4 text-sm font-medium leading-6">{task.title}</p>
        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button type="button" autoFocus onClick={onClose} className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">Cancel</button>
          <button type="button" onClick={onConfirm} className="rounded-lg bg-red-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-red-800">Delete task</button>
        </div>
      </div>
    </Modal>
  )
}
