import { useState } from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'

interface SelectOption {
  value: string
  label: string
  dotClassName?: string
}

interface SelectProps {
  id?: string
  name?: string
  label: string
  value: string
  options: SelectOption[]
  onChange: (value: string) => void
  className?: string
  toneClassName?: string
}

export function Select({ id, name, label, value, options, onChange, className = '', toneClassName = 'border-slate-200 bg-white text-slate-700' }: SelectProps) {
  const [trigger, setTrigger] = useState<HTMLButtonElement | null>(null)
  const selected = options.find((option) => option.value === value)

  return (
    <SelectPrimitive.Root name={name} value={value} onValueChange={onChange}>
      <SelectPrimitive.Trigger ref={setTrigger} id={id} aria-label={label} className={`group flex min-h-11 w-full items-center justify-between gap-2 rounded-lg border px-3 py-2.5 text-left text-sm font-medium shadow-xs transition-colors hover:border-teal-500 data-[state=open]:border-teal-600 data-[state=open]:ring-2 data-[state=open]:ring-teal-700/10 ${toneClassName} ${className}`}>
        <span className="flex min-w-0 items-center gap-2">
          {selected?.dotClassName && <span aria-hidden="true" className={`size-1.5 shrink-0 rounded-full ${selected.dotClassName}`} />}
          <SelectPrimitive.Value />
        </span>
        <SelectPrimitive.Icon asChild><ChevronDown size={15} aria-hidden="true" className="shrink-0 text-current opacity-60 transition-transform group-data-[state=open]:rotate-180 motion-reduce:transition-none" /></SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      {/* Keep form menus inside the native dialog's top layer. */}
      <SelectPrimitive.Portal container={trigger?.closest('dialog') ?? undefined}>
        <SelectPrimitive.Content position="popper" sideOffset={6} collisionPadding={12} onEscapeKeyDown={(event) => event.stopPropagation()} className="z-50 max-h-[var(--radix-select-content-available-height)] min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 text-slate-700 shadow-lg shadow-slate-900/10">
          <SelectPrimitive.ScrollUpButton className="flex justify-center py-1"><ChevronUp size={16} /></SelectPrimitive.ScrollUpButton>
          <SelectPrimitive.Viewport>
            {options.map((option) => (
              <SelectPrimitive.Item key={option.value} value={option.value} textValue={option.label} className="relative flex min-h-11 cursor-pointer select-none items-center gap-2 rounded-lg py-2 pl-3 pr-9 text-sm outline-none data-[highlighted]:bg-teal-50 data-[highlighted]:text-teal-900 data-[state=checked]:font-semibold">
                {option.dotClassName && <span aria-hidden="true" className={`size-1.5 shrink-0 rounded-full ${option.dotClassName}`} />}
                <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
                <SelectPrimitive.ItemIndicator className="absolute right-3 text-teal-700"><Check size={16} aria-hidden="true" /></SelectPrimitive.ItemIndicator>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>
          <SelectPrimitive.ScrollDownButton className="flex justify-center py-1"><ChevronDown size={16} /></SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}
