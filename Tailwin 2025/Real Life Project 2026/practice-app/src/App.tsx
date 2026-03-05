import React, { useState } from "react";
import { useCount } from "./hook/usCount";

function App() {
  const { count, increment, decrement } = useCount(0);
  return (
    <div className="container mx-auto flex justify-center h-screen items-center flex-col gap-4">
      <h1 className="text-3xl font-bold underline">
        Counter App with Tailwind CSS and Vite
      </h1>
      <div>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md"
          onClick={decrement}
        >
          -
        </button>
        <span className="mx-4">{count}</span>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md"
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;