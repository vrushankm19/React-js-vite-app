import type { Task } from "../types/task";
import { useDispatch } from "react-redux";
import { deleteTask, moveTask } from "../features/tasks/taskSlice.ts";

export default function TaskCard({ task }: { task: Task }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white p-3 rounded shadow mb-2">
      <p>{task.title}</p>

      <div className="flex justify-between mt-2">
        {task.status !== "todo" && (
          <button
            onClick={() => dispatch(moveTask({ id: task.id, status: "todo" }))}
          >
            ⬅
          </button>
        )}

        {task.status !== "done" && (
          <button
            onClick={() =>
              dispatch(
                moveTask({
                  id: task.id,
                  status: task.status === "todo" ? "inProgress" : "done",
                }),
              )
            }
          >
            ➡
          </button>
        )}

        <button onClick={() => dispatch(deleteTask(task.id))}>🗑</button>
      </div>
    </div>
  );
}
