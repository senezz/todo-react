import { useContext } from "react";
import AddTaskForm from "@/features/add-task";
import SearchTaskForm from "@/features/search-task";
import FilterTasksBar from "@/features/filter-tasks";
import TodoInfo from "@/features/stats";
import { TodoList } from "@/entities/todo";
import Button from "@/shared/ui/Button";
import ThemeToggle from "@/shared/ui/ThemeToggle";
import { TasksContext } from "@/entities/todo";
import styles from "./Todo.module.scss";

const Todo = () => {
  const { firstIncompleteTaskRef } = useContext(TasksContext);

  return (
    <div className={styles.todo}>
      <div className={styles.header}>
        <h1 className={styles.title}>To Do List</h1>
        <ThemeToggle />
      </div>
      <AddTaskForm styles={styles} />
      <SearchTaskForm styles={styles} />
      <FilterTasksBar />
      <TodoInfo styles={styles} />
      <Button
        onClick={() =>
          firstIncompleteTaskRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Show first incomplete task
      </Button>
      <TodoList styles={styles} />
    </div>
  );
};

export default Todo;
