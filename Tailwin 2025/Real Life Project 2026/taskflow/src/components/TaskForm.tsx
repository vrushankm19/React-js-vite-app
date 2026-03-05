import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!title.trim()) return;
    dispatch(addTask(title));
    setTitle("");
  };

  return (
    <div className="flex gap-2 p-4">
      <input
        className="border p-2 w-full rounded"
        placeholder="Enter task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={handleAdd}
        className="bg-blue-600 text-white px-4 rounded"
      >
        Add
      </button>
    </div>
  );
}
