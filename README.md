# Task Management System

A React web application for the Innorik NSS Developer Technical Assessment (frontend track).

## Current progress

Project foundation: React, TypeScript, Vite, Tailwind CSS, Lucide icons, and ESLint.
Task management features will be added in subsequent development steps. The application
will use mocked local data with no backend integration.

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
  App.tsx       Application entry component
  index.css     Tailwind import and base styles
  main.tsx      React root
```

Feature components, task types, and mock data will be introduced as those features are built.
