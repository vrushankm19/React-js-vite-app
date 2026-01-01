import React, { useContext } from "react";
import { counterContext } from "./context/context";

const Context3 = () => {
    const { count, increase, decrease } = useContext(counterContext);
  return (
    <>
      <div className="border border-red-600 p-5">
        <h1>Context3</h1>
        <p className="bg-red-700 text-white p-5">
          I Want Count Values: <span className="bg-green-600 inline-block p-4 text-black font-bold">{count}</span>
        </p>
        {/* <Context3 /> */}
      </div>
    </>
  );
};

export default Context3;
