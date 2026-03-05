import type { TaskStatus, Task } from "../types/task";
import TaskCard from "./TaskCard";

export default function TaskColumn({title, status, tasks}:{title: string, status:TaskStatus, tasks: Task[]}) {
    return(
        <div className="bg-gray-100 p-4 rounded w-full">
            <h2 className="font-bold mb-2">{title}</h2>
            {tasks.filter(task => task.status === status).map(task => (<TaskCard key={task.id} task={task} />))
            }
        </div>
    )
}