import { memo, useContext } from "react";
import { TodoItem, TasksContext } from "@/entities/todo";
import { FILTERS } from "@/shared/constants";

const TodoList = (props) => {
  const { styles } = props;

  const EMPTY_MESSAGES = {
    [FILTERS.ALL]: "There are no tasks yet",
    [FILTERS.ACTIVE]: "No active tasks",
    [FILTERS.DONE]: "No completed tasks yet",
  };

  const { tasks, filteredTasks, activeFilter } = useContext(TasksContext);

  const hasTasks = tasks.length > 0;
  const displayTasks = filteredTasks ?? tasks;
  const isEmpty = displayTasks.length === 0;

  if (!hasTasks) {
    return (
      <div className={styles.emptyMessage}>{EMPTY_MESSAGES[FILTERS.ALL]}</div>
    );
  }

  if (isEmpty) {
    const message =
      filteredTasks !== null
        ? tasks.length > 0
          ? EMPTY_MESSAGES[activeFilter]
          : EMPTY_MESSAGES[FILTERS.ALL]
        : EMPTY_MESSAGES[FILTERS.ALL];
    return <div className={styles.emptyMessage}>{message}</div>;
  }

  return (
    <ul className={styles.list}>
      {displayTasks.map((task) => (
        <TodoItem className={styles.item} key={task.id} {...task} />
      ))}
    </ul>
  );
};

export default memo(TodoList);
