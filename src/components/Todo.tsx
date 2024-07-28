import { TodoItem } from "../utiles";

interface TodoProps extends TodoItem {
  onRemoveItem: (id: string) => void;
}

const Todo = ({ id, title, completed, onRemoveItem }: TodoProps) => {
  return (
    <div className="view">
      <input
        className="toggle"
        checked={completed}
        type="checkbox"
        onChange={() => {}}
      />
      <label>{title}</label>
      <button className="destroy" onClick={() => onRemoveItem(id)}></button>
    </div>
  );
};
export default Todo;
