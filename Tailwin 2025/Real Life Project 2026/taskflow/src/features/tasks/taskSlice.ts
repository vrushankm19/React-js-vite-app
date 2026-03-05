import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Task, TaskStatus } from "../../types/task";

const initialState: Task[] = [];

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.push({
        id: Date.now().toString(),
        title: action.payload,
        status: "todo",
      });
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      return state.filter((task) => task.id !== action.payload);
    },
    moveTask: (
      state,
      action: PayloadAction<{ id: string; status: TaskStatus }>,
    ) => {
      const task = state.find((t) => t.id === action.payload.id);
      if (task) task.status = action.payload.status;
    },
  },
});

export const { addTask, deleteTask, moveTask } = taskSlice.actions;
export default taskSlice.reducer;
