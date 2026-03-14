import { useContext } from "react";
import { TasksContext } from "@/entities/todo";
import { FILTER_OPTIONS } from "@/shared/constants";
import styles from "./FilterTasksBar.module.scss";

const FilterTasksBar = () => {
  const { activeFilter, setActiveFilter } = useContext(TasksContext);

  return (
    <div className={styles.bar} role="group" aria-label="Filter tasks">
      {FILTER_OPTIONS.map(({ value, label }) => (
        <button
          key={value}
          className={`${styles.btn} ${activeFilter === value ? styles.isActive : ""}`}
          type="button"
          onClick={() => setActiveFilter(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default FilterTasksBar;
