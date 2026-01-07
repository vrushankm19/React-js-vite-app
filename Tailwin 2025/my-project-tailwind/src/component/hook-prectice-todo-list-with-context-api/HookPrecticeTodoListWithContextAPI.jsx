import React, { useCallback, useEffect, useRef, useState } from "react";
import useTotal from "./useTotal";
import Context1 from "./Context1";
import Navbar from "./Navbar";
import { counterContext } from "./context/context";
import { useParams } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";

const HookPrecticeTodoListWithContextAPI = () => {
  const { count, increase, decrease } = useTotal();
  const [hedarTitle, setHeaderTital] = useState("Check Page Meta Title:");
  const inputRef = useRef(null);
  const { fname, lname } = useParams(); // 👈 useParams hook to get URL parameters
  // console.log(fname);
  const navigate = useNavigate(); // 👈 useNavigate hook to programmatically navigate

  useEffect(() => {
    document.title = `Count: ${count}`;
    inputRef.current.focus();
    setHeaderTital("Count:");
  }, [count]); // 👈 jab count change hoga tab effect chalega

  const getAdjective = useCallback(() => {
    return "Another" + count;
  }, [count]);

  return (
    <>
      <counterContext.Provider value={{ count, increase, decrease }}>
        <div className="container mx-auto mt-10">
          <h1 className="font-bold text-4xl text-center bg-black p-3 text-white">
            I Got Data Using URL: My First Name is {fname} and last Name is{" "}
            {lname}
          </h1>
          <NavLink
            to="/hook-prectice-todo-list-with-context-api/Vrushank/Modi"
            className="ml-5 text-blue-500 underline"
          >
            Click Here to Navigate with Params
          </NavLink>
          <div className="mt-10 text-center">
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
            <div className="border p-4">
              <Navbar adjective={"Good"} getAdjective={increase} />
            </div>
            <div className="border p-4">
              <button
                onClick={() => navigate("/todo-list-context-api-with-api")}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Go to Main Todo List Page
              </button>
            </div>
            <div className="border p-4">
              <button
                onClick={() => navigate(-1)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </counterContext.Provider>
    </>
  );
};

export default HookPrecticeTodoListWithContextAPI;
