export type TodoItem = {
  id: number;
  title: string;
  completed: boolean;
};
export const mockTodos: TodoItem[] = [
  { id: 1, title: "Revisar repo", completed: false },
  { id: 2, title: "Create CV", completed: true },
  { id: 3, title: "Create Portafolio", completed: false },
  { id: 4, title: "Update CV", completed: false },
];
