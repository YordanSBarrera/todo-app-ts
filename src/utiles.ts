import { TODO_FILTERS } from "./consts";

export type TodoItem = {
  id: number;
  title: string;
  completed: boolean;
};

export type ListOfTodos = TodoItem[];

export type FilterValue = (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS];
