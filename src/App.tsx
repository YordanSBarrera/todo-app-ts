import { useState } from "react";
import Todos from "./components/Todos";

export type TodoItem = {
  id: string;
  title: string;
  completed: boolean;
};
const mockTodos: TodoItem[] = [
  { id: "1", title: "Revisar repo", completed: false },
  { id: "2", title: "Create CV", completed: true },
  { id: "3", title: "Create Portafolio", completed: false },
  { id: "4", title: "Update CV", completed: false },
];
const App = () => {
  const [todos, setTodos] = useState(mockTodos);

  return (
    <div className="todoapp">
      <h1>Mis tareas</h1>
      <Todos todos={todos} />
    </div>
  );
};

export default App;
