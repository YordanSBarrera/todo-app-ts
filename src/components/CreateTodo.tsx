import { useState } from "react";

type CreateTodoProps = {
  onAddNewTodo: (title: string) => void;
};

const CreateTodo = ({ onAddNewTodo }: CreateTodoProps) => {
  const [newText, setNewText] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddNewTodo(newText);
    setNewText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        type="text"
        value={newText}
        placeholder="Que quieres hacer?"
        autoFocus
        onChange={(ev) => setNewText(ev.target.value)}
      />
    </form>
  );
};
export default CreateTodo;
