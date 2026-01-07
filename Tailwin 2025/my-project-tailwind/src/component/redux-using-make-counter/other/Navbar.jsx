import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
    const count = useSelector((state) => state.counter.value);
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <h1 className="text-xl font-bold">Redux Counter App: {count}</h1>
      </div>
    </nav>
  );
}

export default Navbar;