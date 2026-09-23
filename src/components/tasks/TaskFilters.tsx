import { useId } from 'react'
import type { Ref } from 'react'
import { Search } from 'lucide-react'
import { Select } from '../common/Select'
import { statusOptions } from './statusOptions'
import type { TaskStatus } from '../../types/task'

export type StatusFilter = 'All' | TaskStatus

interface TaskFiltersProps {
  query: string
  status: StatusFilter
  onQueryChange: (query: string) => void
  onStatusChange: (status: StatusFilter) => void
  onClear: () => void
  searchRef: Ref<HTMLInputElement>
}

export function TaskFilters({ query, status, onQueryChange, onStatusChange, onClear, searchRef }: TaskFiltersProps) {
  const id = useId()

  return (
    <div role="search" aria-label="Filter tasks" className="flex flex-col gap-4 border-b border-slate-100 px-5 py-4 sm:flex-row sm:items-end sm:px-6">
      <div className="min-w-0 flex-1">
        <label htmlFor={`${id}-search`} className="text-xs font-medium text-slate-600">Search tasks</label>
        <div className="relative mt-2">
          <Search size={17} aria-hidden="true" className="pointer-events-none absolute left-3 top-3.5 text-slate-400" />
          <input ref={searchRef} id={`${id}-search`} type="search" value={query} onChange={(event) => onQueryChange(event.target.value)} placeholder="Search titles and descriptions" className="min-h-11 w-full rounded-lg border border-slate-300 bg-white py-2.5 pl-10 pr-3 text-sm" />
        </div>
      </div>
      <div className="sm:w-44">
        <label htmlFor={`${id}-status`} className="text-xs font-medium text-slate-600">Status</label>
        <Select id={`${id}-status`} label="Filter by status" value={status} onChange={(value) => onStatusChange(value as StatusFilter)} options={[{ value: 'All', label: 'All statuses' }, ...statusOptions]} className="mt-2" />
      </div>
      {(query !== '' || status !== 'All') && (
        <button type="button" onClick={onClear} className="min-h-11 shrink-0 rounded-lg px-3 text-sm font-medium text-teal-800 hover:bg-teal-50">Clear filters</button>
      )}
    </div>
  )
}
