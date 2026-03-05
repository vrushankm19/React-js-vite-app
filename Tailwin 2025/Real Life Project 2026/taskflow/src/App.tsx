import { useSelector } from "react-redux";
import type { RootState } from "./app/store";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";

export default function App() {
  const tasks = useSelector((state: RootState) => state.tasks);

  return (
    <div>
      <Header />
      <TaskForm />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <TaskColumn title="TODO" status="todo" tasks={tasks} />
        <TaskColumn title="IN PROGRESS" status="inProgress" tasks={tasks} />
        <TaskColumn title="DONE" status="done" tasks={tasks} />
      </div>
    </div>
  );
}
