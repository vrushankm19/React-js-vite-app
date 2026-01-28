Perfect choice 🔥
**Task Management App (Trello Lite)** beginners + interview + real-world ke liye **gold project** hai.
Main tumhe **Vite + React + Redux Toolkit + TypeScript + Tailwind** ke saath **END-TO-END FLOW** de raha hoon — **exactly kya create karna hai, kis order me, aur UI kaisa hoga**.
Tum bas follow karo 👇

---

# 🧩 PROJECT OVERVIEW (FINAL RESULT)

### 🎯 App Name

**TaskFlow – Trello Lite**

### 🖥 Final UI Structure

```
----------------------------------
|  TaskFlow (Header)             |
----------------------------------
|  [ Add Task Input ] [ Add ]    |
----------------------------------
|  TODO        IN PROGRESS  DONE |
|  -----       -----------  ---- |
|  Task Card   Task Card    Card |
|  Task Card                Card|
----------------------------------
```

---

# 🧱 TECH STACK

✔ Vite + React
✔ TypeScript
✔ Redux Toolkit
✔ Tailwind CSS

---

# 🚀 STEP 1: VITE PROJECT CREATE KARO

```bash
npm create vite@latest taskflow
```

Select:

* React
* TypeScript

```bash
cd taskflow
npm install
npm run dev
```

Browser me check karo ✔

---

# 🎨 STEP 2: TAILWIND CSS SETUP

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### `tailwind.config.js`

```js
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
```

### `src/index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

# 🗂 STEP 3: FOLDER STRUCTURE (IMPORTANT)

```
src/
│── app/
│   ├── store.ts
│
│── features/
│   └── tasks/
│       ├── taskSlice.ts
│
│── components/
│   ├── Header.tsx
│   ├── TaskForm.tsx
│   ├── TaskColumn.tsx
│   ├── TaskCard.tsx
│
│── types/
│   └── task.ts
│
│── App.tsx
│── main.tsx
```

---

# 🧠 STEP 4: TASK TYPE DEFINE KARO

### `src/types/task.ts`

```ts
export type TaskStatus = 'todo' | 'inProgress' | 'done';

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
}
```

---

# 🧠 STEP 5: REDUX STORE SETUP

### Install Redux

```bash
npm install @reduxjs/toolkit react-redux
```

---

### `src/app/store.ts`

```ts
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../features/tasks/taskSlice';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

---

### `src/main.tsx`

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

---

# 🧠 STEP 6: TASK SLICE (CORE LOGIC)

### `src/features/tasks/taskSlice.ts`

```ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, TaskStatus } from '../../types/task';

const initialState: Task[] = [];

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.push({
        id: Date.now().toString(),
        title: action.payload,
        status: 'todo',
      });
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      return state.filter(task => task.id !== action.payload);
    },
    moveTask: (
      state,
      action: PayloadAction<{ id: string; status: TaskStatus }>
    ) => {
      const task = state.find(t => t.id === action.payload.id);
      if (task) task.status = action.payload.status;
    },
  },
});

export const { addTask, deleteTask, moveTask } = taskSlice.actions;
export default taskSlice.reducer;
```

---

# 🧩 STEP 7: UI COMPONENTS

---

## 🔹 Header UI

### `src/components/Header.tsx`

```tsx
export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 text-xl font-bold">
      TaskFlow – Trello Lite
    </header>
  );
}
```

---

## 🔹 Task Form (Add Task)

### `src/components/TaskForm.tsx`

```tsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/taskSlice';

export default function TaskForm() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!title.trim()) return;
    dispatch(addTask(title));
    setTitle('');
  };

  return (
    <div className="flex gap-2 p-4">
      <input
        className="border p-2 w-full rounded"
        placeholder="Enter task..."
        value={title}
        onChange={e => setTitle(e.target.value)}
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
```

---

## 🔹 Task Card

### `src/components/TaskCard.tsx`

```tsx
import { Task } from '../types/task';
import { useDispatch } from 'react-redux';
import { deleteTask, moveTask } from '../features/tasks/taskSlice';

export default function TaskCard({ task }: { task: Task }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white p-3 rounded shadow mb-2">
      <p>{task.title}</p>

      <div className="flex justify-between mt-2">
        {task.status !== 'todo' && (
          <button
            onClick={() =>
              dispatch(moveTask({ id: task.id, status: 'todo' }))
            }
          >
            ⬅
          </button>
        )}

        {task.status !== 'done' && (
          <button
            onClick={() =>
              dispatch(
                moveTask({
                  id: task.id,
                  status:
                    task.status === 'todo' ? 'inProgress' : 'done',
                })
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
```

---

## 🔹 Task Column

### `src/components/TaskColumn.tsx`

```tsx
import { Task, TaskStatus } from '../types/task';
import TaskCard from './TaskCard';

export default function TaskColumn({
  title,
  status,
  tasks,
}: {
  title: string;
  status: TaskStatus;
  tasks: Task[];
}) {
  return (
    <div className="bg-gray-100 p-4 rounded w-full">
      <h2 className="font-bold mb-2">{title}</h2>

      {tasks
        .filter(task => task.status === status)
        .map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
    </div>
  );
}
```

---

# 🧠 STEP 8: MAIN APP LAYOUT

### `src/App.tsx`

```tsx
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskColumn from './components/TaskColumn';

export default function App() {
  const tasks = useSelector((state: RootState) => state.tasks);

  return (
    <div>
      <Header />
      <TaskForm />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <TaskColumn title="TODO" status="todo" tasks={tasks} />
        <TaskColumn
          title="IN PROGRESS"
          status="inProgress"
          tasks={tasks}
        />
        <TaskColumn title="DONE" status="done" tasks={tasks} />
      </div>
    </div>
  );
}
```

---

# 🎉 FINAL RESULT

✔ Add task
✔ Move task left/right
✔ Delete task
✔ Redux Toolkit used
✔ TypeScript safe
✔ Tailwind responsive UI

---

## 🔥 NEXT IMPROVEMENTS (AFTER BASIC)

* localStorage save
* Drag & Drop
* Edit task
* Dark mode
* Deploy (Vercel)

---

Agar chaho to next step me:
👉 **localStorage + Redux persistence**
👉 **Drag & Drop Trello style**
👉 **Interview explanation (Redux flow)**

Bas bolo: **NEXT STEP KYA ADD KARE? 🚀**
