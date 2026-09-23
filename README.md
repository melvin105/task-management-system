# Task Management System

A React web application for the Innorik NSS Developer Technical Assessment (frontend track).

## Current progress

Built with React, TypeScript, Vite, Tailwind CSS, Lucide icons, and ESLint.

- Responsive dashboard with six mocked tasks
- Task title, description, status, and created date
- Total, pending, in-progress, and completed counts calculated from task data
- Reusable statistics cards, status badges, and task list
- Add and edit tasks through a shared form, including task status
- Trimmed, validated titles and descriptions with inline error messages
- Keyboard-accessible dialog with Escape to close and Cancel to discard changes

Tasks are held in React state, starting with local mock data; no backend or API is used.
Changes last for the current page session and reset on refresh. New tasks receive a unique
ID and creation timestamp. Editing preserves both. Statistics update immediately after saving.
Deletion and direct status controls will follow in the next checkpoint.

## Requirements

- Node.js 22.12+ (Node.js 24 recommended)
- npm

## Getting started

```sh
npm install
npm run dev
```

Open the local URL printed by Vite.
If PowerShell blocks `npm.ps1`, use `npm.cmd` in place of `npm`.

## Checks and production build

```sh
npm run lint
npm run build
npm run preview
```

`build` checks TypeScript and generates the production files in `dist/`.
`preview` serves that build locally.

## Project structure

```text
src/
  components/
    common/     Reusable native modal dialog
    dashboard/  Reusable statistics cards and calculated task statistics
    tasks/      Task list, status badge, and add/edit form
  data/         Typed mock tasks
  pages/        Dashboard page composing the components
  types/        Shared task model and supported statuses
  utils/        Shared date formatting
  App.tsx       Application entry component
  index.css     Tailwind import and base styles
  main.tsx      React root
```

Created dates are stored as ISO timestamps and displayed in UTC for consistent dates
across time zones. Statistics are derived from the task array rather than hardcoded.
