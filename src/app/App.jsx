import { TasksProvider } from "@/entities/todo";
import Router from "./routing/Router";
import TasksPage from "@/pages/TasksPage";
import TaskPage from "@/pages/TaskPage";
import "./styles";

const App = () => {
  const routes = {
    "/": TasksPage,
    "/tasks/:id": TaskPage,
    "*": () => <div>404 Page not found</div>,
  };

  return (
    <TasksProvider>
      <Router routes={routes} />
    </TasksProvider>
  );
};

export default App;
