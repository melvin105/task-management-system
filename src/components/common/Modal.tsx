import { useEffect, useId, useRef } from 'react'
import type { ReactNode } from 'react'
import { X } from 'lucide-react'

interface ModalProps {
  title: string
  description: string
  children: ReactNode
  onClose: () => void
}

export function Modal({ title, description, children, onClose }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleId = useId()
  const descriptionId = useId()

  useEffect(() => {
    const dialog = dialogRef.current!
    const previousOverflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = 'hidden'

    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
    }
  }, [])

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      className="fixed inset-0 m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-lg overflow-y-auto rounded-2xl border border-slate-200 bg-white p-0 text-slate-900 shadow-xl backdrop:bg-slate-900/40"
    >
      <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-6 py-5">
        <div>
          <h2 id={titleId} className="text-xl font-semibold tracking-tight">{title}</h2>
          <p id={descriptionId} className="mt-1 text-sm leading-6 text-slate-500">{description}</p>
        </div>
        <button type="button" onClick={onClose} aria-label="Close dialog" className="flex size-10 shrink-0 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100">
          <X size={20} aria-hidden="true" />
        </button>
      </div>
      {children}
    </dialog>
  )
}
