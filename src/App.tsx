import { useState } from "react";
import Todos from "./components/Todos";
import { FilterValue, TodoItem } from "./utiles";
import { mockTodos, TODO_FILTERS } from "./consts";
import Footer from "./components/Footer";

const App = () => {
  const [todos, setTodos] = useState(mockTodos);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  );
  const [newText, setNewText] = useState("");

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.filter((todo) => todo.completed).length;

  const onRemoveTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleFilterChange = (filter: FilterValue) => {
    setFilterSelected(filter);
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
  const onUpdatedTodo = (id: number) => {
    const copy = todos.map((todo) => {
      todo.id === id ? (todo.completed = !todo.completed) : null;
      return todo;
    });
    setTodos(copy);
  };
  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
    return todo;
  });

  return (
    <div className="todoapp">
      <h1>Mis tareas</h1>
      <Todos
        todos={filteredTodos}
        onRemoveItem={onRemoveTodo}
        onUpdatedItem={onUpdatedTodo}
      />
      <input
        className="toggle"
        type="text"
        value={newText}
        onChange={(ev) => setNewText(ev.target.value)}
      />
      <br />
      <button disabled={!newText} onClick={onAddTodo}>
        agregar tarea
      </button>
      <Footer
        activeCount={activeCount}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
        completedCount={completedCount}
        onClearCompleted={() => {}}
      />
    </div>
  );
};

export default App;
