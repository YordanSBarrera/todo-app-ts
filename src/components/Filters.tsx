import { FILTERS_BUTTONS } from "../consts";
import { FilterValue } from "../utiles";

type FiltersProps = {
  filterSelected: FilterValue;
  onFilterChange: (filter: FilterValue) => void;
};

const Filters = ({ filterSelected, onFilterChange }: FiltersProps) => {
  return (
    <ul className="filters">
      {Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
        const isSelected = key === filterSelected;
        const className = isSelected ? "selected" : "";
        return (
          <li key={key}>
            <a
              className={className}
              onClick={(event) => {
                event.preventDefault();
                onFilterChange(key as FilterValue);
              }}
              href={href}
            >
              {literal}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Filters;
