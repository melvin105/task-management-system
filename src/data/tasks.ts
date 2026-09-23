import type { Task } from '../types/task'

export const initialTasks: Task[] = [
  {
    id: 'task-1',
    title: 'Design the landing page',
    description: 'Create a clear layout for the hero section, product features, and call to action.',
    status: 'Completed',
    createdDate: '2026-09-18T09:00:00.000Z',
  },
  {
    id: 'task-2',
    title: 'Build the dashboard layout',
    description: 'Arrange the overview cards and task list into a responsive workspace.',
    status: 'In Progress',
    createdDate: '2026-09-19T10:30:00.000Z',
  },
  {
    id: 'task-3',
    title: 'Write project documentation',
    description: 'Document installation steps, available commands, and the project structure.',
    status: 'Pending',
    createdDate: '2026-09-20T08:15:00.000Z',
  },
  {
    id: 'task-4',
    title: 'Improve mobile navigation',
    description: 'Check spacing and touch targets so navigation feels comfortable on smaller screens.',
    status: 'In Progress',
    createdDate: '2026-09-21T14:00:00.000Z',
  },
  {
    id: 'task-5',
    title: 'Prepare the project walkthrough',
    description: 'Outline the main features and explain the decisions behind the implementation.',
    status: 'Pending',
    createdDate: '2026-09-22T11:45:00.000Z',
  },
  {
    id: 'task-6',
    title: 'Set up the development environment',
    description: 'Configure React, TypeScript, styling, and linting for a consistent development workflow.',
    status: 'Completed',
    createdDate: '2026-09-18T08:00:00.000Z',
  },
]
