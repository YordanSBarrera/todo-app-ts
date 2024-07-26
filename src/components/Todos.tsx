import { TodoItem } from "../App";
import Todo from "./Todo";

interface Props {
  todos: TodoItem[];
}

const Todos = ({ todos }: Props) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? "completed" : ""}`}>
          <Todo id={todo.id} title={todo.title} completed={todo.completed} />
        </li>
      ))}
    </ul>
  );
};

export default Todos;
