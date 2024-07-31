import { TodoItem } from "../utiles";

interface TodoProps extends TodoItem {
  onRemoveItem: (id: number) => void;
  onUpdatedItem: (id: number) => void;
}

const Todo = ({
  id,
  title,
  completed,
  onRemoveItem,
  onUpdatedItem,
}: TodoProps) => {
  return (
    <div className="view">
      <input
        className="toggle"
        checked={completed}
        type="checkbox"
        onChange={() => onUpdatedItem(id)}
      />
      <label>{title}</label>
      <button className="destroy" onClick={() => onRemoveItem(id)}></button>
    </div>
  );
};
export default Todo;
