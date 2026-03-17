import { useContext, useEffect, useState } from "react";
import { TasksContext } from "@/entities/todo";
import tasksAPI from "@/shared/api/tasks";
import { BASE_URL } from "@/shared/constants";
import styles from "./TaskPage.module.scss";

const navigateBack = () => {
  window.history.pushState({}, "", `${BASE_URL}`);
  window.dispatchEvent(new PopStateEvent("popstate"));
};

const TaskPage = (props) => {
  const { params } = props;
  const taskId = params.id;

  const { editTask } = useContext(TasksContext);

  const [task, setTask] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    tasksAPI
      .getById(taskId)
      .then((taskData) => {
        if (!taskData) {
          setHasError(true);
          return;
        }
        setTask(taskData);
        setTitle(taskData.title || "");
        setDescription(taskData.description || "");
        setHasError(false);
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [taskId]);

  const handleCancel = () => {
    navigateBack();
  };

  const handleSave = () => {
    const updates = {};

    if (title.trim() !== (task.title || "")) {
      updates.title = title.trim();
    }

    if (description.trim() !== (task.description || "")) {
      updates.description = description.trim();
    }

    if (Object.keys(updates).length > 0) {
      editTask(taskId, updates);
    }

    navigateBack();
  };

  if (isLoading) {
    return <div className={styles.taskPage}>Loading...</div>;
  }

  if (hasError || !task) {
    return <div className={styles.taskPage}>Task not found!</div>;
  }

  return (
    <div className={styles.taskPage}>
      <h1 className={styles.title}>Edit Task</h1>
      <div className={styles.form}>
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="task-title">
            Task Name
          </label>
          <input
            className={styles.input}
            id="task-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task name"
          />
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="task-description">
            Description
          </label>
          <textarea
            className={styles.textarea}
            id="task-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter additional information"
          />
        </div>

        <div className={styles.buttons}>
          <button
            className={styles.cancelButton}
            type="button"
            onClick={handleCancel}
          >
            Cancel and Back
          </button>
          <button
            className={styles.saveButton}
            type="button"
            onClick={handleSave}
            disabled={!title.trim()}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
