# Task Management System

A React web application for the Innorik NSS Developer Technical Assessment (frontend track).

## Current progress

Built with React, TypeScript, Vite, Tailwind CSS, Lucide icons, and ESLint.

- Responsive dashboard with six mocked tasks
- Task title, description, status, and created date
- Total, pending, in-progress, and completed counts calculated from task data
- Reusable statistics cards, status badges, and task list

This checkpoint is read-only. Task creation, editing, deletion, and status changes
will follow. All data is local mock data; no backend or API is used.

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
    dashboard/  Reusable statistics cards and calculated task statistics
    tasks/      Task list and status badge
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
