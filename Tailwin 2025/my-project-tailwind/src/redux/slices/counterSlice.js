import { createSlice } from "@reduxjs/toolkit";

let initialState;
if(localStorage.getItem("counterValue")){
  initialState = {value: parseInt(localStorage.getItem("counterValue"))};
} else {
  initialState = {value: 7};
}


let maxLimit = 10;
let minLimit = 1;

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      if (state.value < maxLimit) {
        state.value += 1;
        localStorage.setItem("counterValue", state.value);
      }
    },
    decrement: (state) => {
      if (state.value > minLimit) {
        state.value -= 1;
        localStorage.setItem("counterValue", state.value);
      }
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
