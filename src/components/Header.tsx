import CreateTodo from "./CreateTodo";

type HeaderProps = {
  onCreateTodo: (title: string) => void;
};
const Header = ({ onCreateTodo }: HeaderProps) => {
  return (
    <header className="header">
      <h1>
        todo
        <img
          style={{ width: "60px", height: "auto" }}
          src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg"
        />
      </h1>
      <CreateTodo onAddNewTodo={onCreateTodo} />
    </header>
  );
};

export default Header;
