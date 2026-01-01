import React, { useEffect, useRef, useState } from "react";
import useTotal from "./useTotal";
import Context1 from "./Context1";
import { counterContext } from "./context/context";

const HookPrecticeTodoListWithContextAPI = () => {
  const { count, increase, decrease } = useTotal();
  const [hedarTitle, setHeaderTital] = useState("Check Page Meta Title:");
  const inputRef = useRef(null);

  useEffect(() => {
    document.title = `Count: ${count}`;
    inputRef.current.focus();
    setHeaderTital("Count:");
  }, [count]); // 👈 jab count change hoga tab effect chalega
  return (
    <>
      <counterContext.Provider value={{count, increase, decrease}}>
        <div className="container mx-auto mt-10">
          <div className="container mx-auto mt-10 text-center">
            <div className="border p-4">
              <p className="bg-yellow-300">useState</p>
              <h1 className="font-bold text-9xl mb-5">Total: {count}</h1>
              <button
                onClick={increase}
                className="bg-blue-500 text-white px-8 py-4 rounded text-3xl"
              >
                Increase
              </button>
              <button
                onClick={decrease}
                className="bg-red-500 text-white px-8 py-4 rounded ml-2 text-3xl"
              >
                Decrease
              </button>
            </div>
            <div className="border mt-5">
              <p className="bg-yellow-300">useEffect</p>
              <h1 className="font-bold text-6xl">{`${hedarTitle} ${count}`}</h1>
            </div>
            <div className="border mt-5 p-5">
              <input
                ref={inputRef}
                type="text"
                className="border p-4"
                placeholder="Enter Data..."
              />
            </div>
            <div className="border mt-5 p-5">
                <p className="bg-yellow-300">Contect Api</p>
              Main Zone
              <Context1 />
            </div>
          </div>
        </div>
      </counterContext.Provider>
    </>
  );
};

export default HookPrecticeTodoListWithContextAPI;