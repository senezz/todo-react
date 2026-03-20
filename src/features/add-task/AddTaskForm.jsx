import Field from "@/shared/ui/Field";
import Button from "@/shared/ui/Button";
import { useContext, useState } from "react";
import { TasksContext } from "@/entities/todo";
import { PRIORITIES, PRIORITY_OPTIONS } from "@/shared/constants";
import addTaskStyles from "./AddTaskForm.module.scss";

const AddTaskForm = (props) => {
  const { styles } = props;

  const { addTask, newTaskTitle, setNewTaskTitle, newTaskInputRef } =
    useContext(TasksContext);

  const [error, setError] = useState("");
  const [priority, setPriority] = useState(PRIORITIES.MEDIUM);

  const clearNewTaskTitle = newTaskTitle.trim();
  const isNewTaskTitleEmpty = clearNewTaskTitle.length === 0;

  const onSubmit = (event) => {
    event.preventDefault();

    if (!isNewTaskTitleEmpty) {
      addTask(clearNewTaskTitle, priority);
    }
  };

  const onInput = (event) => {
    const { value } = event.target;
    const clearValue = value.trim();
    const hasOnlySpaces = value.length > 0 && clearValue.length === 0;

    setNewTaskTitle(value);
    setError(hasOnlySpaces ? "The task cannot be empty" : "");
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Field
        className={styles.field}
        label="New task title"
        id="new-task"
        value={newTaskTitle}
        error={error}
        onInput={onInput}
        ref={newTaskInputRef}
      />
      <div className={addTaskStyles.priorityWrapper}>
        {PRIORITY_OPTIONS.map((option) => (
          <button
            key={option.value}
            type="button"
            className={`${addTaskStyles.priorityBtn} ${addTaskStyles[`priority_${option.value}`]} ${priority === option.value ? addTaskStyles.priorityBtnActive : ""}`}
            onClick={() => setPriority(option.value)}
            title={option.label}
            aria-label={`Priority: ${option.label}`}
            aria-pressed={priority === option.value}
          >
            {option.label[0]}
          </button>
        ))}
      </div>
      <Button type="submit" isDisabled={isNewTaskTitleEmpty}>
        Add
      </Button>
    </form>
  );
};

export default AddTaskForm;
