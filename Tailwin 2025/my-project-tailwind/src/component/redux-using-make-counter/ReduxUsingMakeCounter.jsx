import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/slices/counterSlice";
import Navbar from "./other/Navbar.jsx";

function ReduxUsingMakeCounter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="text-center">
        <Navbar />
      <h1 className="text-4xl font-bold text-center">Redux Using Make Counter Component</h1>
        <h2 className="text-3xl font-semibold text-center my-4">Count: {count}</h2>
        <div className="flex justify-center gap-3">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch(increment())}>+</button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch(decrement())}>-</button>
        </div>
    </div>
  );
}

export default ReduxUsingMakeCounter;
