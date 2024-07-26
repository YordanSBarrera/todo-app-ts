import { TodoItem } from "../App";

const Todo = ({ id, title, completed }: TodoItem) => {
  return (
    <div className="view">
      <input
        className="toggle"
        checked={completed}
        type="checkbox"
        onChange={() => {}}
      />
      <label>{title}</label>
      <button className="destroy" onClick={() => {}}></button>
    </div>
  );
};
export default Todo;
