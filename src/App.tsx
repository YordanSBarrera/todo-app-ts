import { useState } from "react";
import Todos from "./components/Todos";
import { mockTodos } from "./utiles";

const App = () => {
  const [todos, setTodos] = useState(mockTodos);

  const onRemoveTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todoapp">
      <h1>Mis tareas</h1>
      <Todos todos={todos} onRemoveItem={onRemoveTodo} />
    </div>
  );
};

export default App;
