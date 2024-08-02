import { TodoItem } from "./utiles";

export const mockTodos: TodoItem[] = [
  { id: 1, title: "Revisar repo", completed: false },
  { id: 2, title: "Create CV", completed: true },
  { id: 3, title: "Create Portafolio", completed: false },
  { id: 4, title: "Update CV", completed: false },
];

export const TODO_FILTERS = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
} as const;

export const FILTERS_BUTTONS = {
  [TODO_FILTERS.ALL]: {
    literal: "Todos",
    href: `/?filter=${TODO_FILTERS.ALL}`,
  },
  [TODO_FILTERS.ACTIVE]: {
    literal: "Activos",
    href: `/?filter=${TODO_FILTERS.ACTIVE}`,
  },
  [TODO_FILTERS.COMPLETED]: {
    literal: "Completados",
    href: `/?filter=${TODO_FILTERS.COMPLETED}`,
  },
} as const;
