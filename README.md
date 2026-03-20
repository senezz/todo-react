# Todo React App

A feature-rich task management application built with React 19, showcasing modern frontend development practices including custom routing, Context API state management, and a dual-mode backend (localStorage / REST API).

🔗 **[Live Demo](senezz.github.io/todo-react/)**

---

## Features

- **Add tasks** with a title and priority level (High / Medium / Low)
- **Edit tasks** — update title, description, and priority on a dedicated edit page
- **Complete / uncomplete** tasks with a single click
- **Delete** individual tasks or clear the entire list at once
- **Filter tasks** by status: All / Active / Done
- **Search tasks** by title in real time
- **Task counter** — tracks how many tasks are done out of total
- **Scroll to first incomplete task** — quick navigation shortcut
- **Dark / Light theme toggle** with system preference detection and localStorage persistence
- **Smooth animations** on task add and delete

---

## Tech Stack

| Category         | Technology                                  |
| ---------------- | ------------------------------------------- |
| UI Library       | React 19                                    |
| Build Tool       | Vite                                        |
| Styling          | SCSS Modules                                |
| State Management | Context API + useReducer                    |
| Routing          | Custom client-side router (no React Router) |
| Backend (dev)    | json-server (REST API)                      |
| Backend (prod)   | localStorage API                            |
| Linting          | ESLint                                      |
| Testing          | Jest + Babel                                |
| Deploy           | GitHub Pages                                |

---

## Architecture

The project follows **Feature-Sliced Design (FSD)** methodology:

```
src/
├── app/           # App entry, global styles, routing setup
├── pages/         # TasksPage (list), TaskPage (edit)
├── widgets/       # Todo — main composite widget
├── features/      # add-task, filter-tasks, search-task, stats
├── entities/      # todo — model (useTasks, context), UI (TodoItem, TodoList)
└── shared/        # API layer, UI kit (Button, Field, ThemeToggle), hooks, constants
```

Key architectural decisions:

- **Dual API layer** — `localAPI` (localStorage) and `serverAPI` (json-server) share the same interface, switched via environment variable. The app works fully offline in production with no backend required.
- **Custom router** — lightweight client-side router built from scratch with dynamic segment matching (`:id`) and `popstate`-based navigation, no external dependencies.
- **`useReducer` + Context** — all task state lives in a single reducer with clearly defined action types (`SET_ALL`, `ADD`, `TOGGLE_COMPLETE`, `DELETE`, `DELETE_ALL`, `EDIT`), making state transitions predictable and easy to test.
- **`useMemo` on filtered tasks** — filtering and search run only when `tasks`, `activeFilter`, or `searchQuery` change, avoiding unnecessary recalculations.

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
git clone https://github.com/senezz/todo-react
cd todo-react
npm install
```

### Run in development mode (with json-server backend)

```bash
# Start the REST API server
npm run server

# In a separate terminal, start the app
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Run with localStorage only (no backend needed)

```bash
npm run dev
```

Set `VITE_STATIC_BACKEND=true` in `.env` to force localStorage mode in development.

### Build for production

```bash
npm run build
npm run preview
```

### Run tests

```bash
npm test
```

---

## Scripts

| Script            | Description                      |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start Vite dev server            |
| `npm run server`  | Start json-server on port 3001   |
| `npm run build`   | Production build                 |
| `npm run preview` | Preview production build locally |
| `npm run lint`    | Run ESLint                       |
| `npm test`        | Run Jest unit tests              |
| `npm run deploy`  | Build and deploy to GitHub Pages |
