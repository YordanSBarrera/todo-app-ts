import { FilterValue } from "../utiles";
import Filters from "./Filters";

type FooterProps = {
  activeCount: number;
  completedCount: number;
  onClearCompleted: () => void;
  filterSelected: FilterValue;
  handleFilterChange: (filter: FilterValue) => void;
};

const Footer = ({
  completedCount,
  activeCount = 0,
  onClearCompleted,
  filterSelected,
  handleFilterChange,
}: FooterProps) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong>Tareas pendientes
      </span>
      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />
    </footer>
  );
};

export default Footer;
