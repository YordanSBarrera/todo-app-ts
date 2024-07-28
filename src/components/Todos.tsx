import { TodoItem } from "../utiles";
import Todo from "./Todo";

interface Props {
  todos: TodoItem[];
  onRemoveItem: (id: string) => void;
}

const Todos = ({ todos, onRemoveItem }: Props) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? "completed" : ""}`}>
          <Todo
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveItem={onRemoveItem}
          />
        </li>
      ))}
    </ul>
  );
};

export default Todos;
