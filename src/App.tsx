import { useState } from "react";
import Todos from "./components/Todos";
import { mockTodos, TodoItem } from "./utiles";

const App = () => {
  const [todos, setTodos] = useState(mockTodos);
  const [newText, setNewText] = useState("");

  const onRemoveTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const onAddTodo = () => {
    const lastItem = todos.length - 1;
    const newTodo: TodoItem = {
      id: todos[lastItem].id + 1,
      title: newText,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    setNewText("");
  };

  return (
    <div className="todoapp">
      <h1>Mis tareas</h1>
      <Todos todos={todos} onRemoveItem={onRemoveTodo} />
      <input
        type="text"
        value={newText}
        onChange={(ev) => setNewText(ev.target.value)}
      />
      <br />
      <button disabled={!newText} onClick={onAddTodo}>
        agregar tarea
      </button>
    </div>
  );
};

export default App;
