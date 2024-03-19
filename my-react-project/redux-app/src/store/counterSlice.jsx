import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
  inputValue: "Hello World",
  listData: "",
  newData: [],
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    realTimeData: (state, a) => {
      state.inputValue = a.payload.inputValue;
    },
    updateList: (state, a) => {
      state.listData = a.payload.newData;
    }
  }
});



export const { increment, decrement,realTimeData,updateList } = counterSlice.actions;
export default counterSlice.reducer;