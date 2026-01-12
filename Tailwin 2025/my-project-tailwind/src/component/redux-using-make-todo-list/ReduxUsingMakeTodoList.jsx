import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addtodo, removetodo, edittodo } from "../../redux/slices/todoSlice";

const ReduxUsingMakeTodoList = () => {
  let todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  let [addNewTodo, setAddNewTodo] = useState("");
  let [editId, setEditId] = useState();
  let [btnLogic, setBtnLogic] = useState(false);

  let AddTodoItems = () => {
    dispatch(addtodo(addNewTodo));
    setAddNewTodo("");
  };

  let removeTodoItems = (id) => {
    dispatch(removetodo(id));
  };

  let editTodoItems = (id, oldTitle) => {
    setAddNewTodo(oldTitle);
    setEditId(id);
    setBtnLogic(true);
  };

  const SaveTodoItems = () => {
    if (!addNewTodo.trim()) return;
    dispatch(edittodo({ id: editId, title: addNewTodo }));
    setAddNewTodo("");
    setEditId(null);
    setBtnLogic(false);
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="font-bold text-2xl">Redux Using Make Todo List</h1>

        <div className="flex gap-3 mt-5">
          <input
            type="text"
            placeholder="Add Todo"
            className="border p-2 w-md"
            value={addNewTodo}
            onChange={(ele) => setAddNewTodo(ele.target.value)}
          />
          {!btnLogic && (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => AddTodoItems()}
            >
              Add Todoo
            </button>
          )}
          {btnLogic && (
            <button
              className="bg-green-500 text-dark px-4 py-2 rounded"
              onClick={() => SaveTodoItems()}
            >
              Save
            </button>
          )}
        </div>
        {/* <p>{addNewTodo}</p> */}
        {todo.map((items) => (
          <li
            className="flex justify-between items-center bg-amber-300 p-2 px-5 my-2"
            key={items.id}
          >
            <span>{items.title}</span>
            <div className="flex gap-2">
              <button
                className="text-white px-4 py-2 rounded cursor-pointer bg-white"
                onClick={() => removeTodoItems(items.id)}
              >
                🗑️
              </button>
              <button
                className="text-white px-4 py-2 rounded cursor-pointer bg-white"
                onClick={() => editTodoItems(items.id, items.title)}
              >
                ✏️
              </button>
            </div>
          </li>
        ))}
      </div>
    </>
  );
};

export default ReduxUsingMakeTodoList;