import { createSlice } from "@reduxjs/toolkit";


const initialState = JSON.parse(localStorage.getItem("todolist")) || [
  { id: 1, title: "Todo 1" },
  { id: 2, title: "Todo 2" },
];


const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addtodo: (state, actions) => {
      state.push({ id: Date.now(), title: actions.payload });
      localStorage.setItem("todolist", JSON.stringify(state));
    },
    removetodo: (state, actions) => {
      const updatedState = state.filter((ele) => ele.id !== actions.payload);
      localStorage.setItem("todolist", JSON.stringify(updatedState));
      return updatedState
    },
  },
});


export const { addtodo, removetodo } = todoSlice.actions;
export default todoSlice.reducer;