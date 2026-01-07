import React, { useState } from "react";

const ReduxUsingMakeTodoList = () => {
    let [addTodo, setAddTodo] = useState("");
    const data = [
      {
        id: "1",
        title: "Todo 1",
      },
      {
        id: "2",
        title: "Todo 2",
      },
    ];
    let [todo, setTodo] = useState(data);

    let AddTodoItems = () => {
        // setAddTodo(ele.target.value);
        console.log("AddTodoItems");
        
        let innData = [...todo, { id: 3, title: { addTodo } }];
        setTodo(innData);
    }
    
    return (
      <>
        <div className="container mx-auto p-4">
          <h1 className="font-bold text-2xl">Redux Using Make Todo List</h1>

          <div className="flex gap-3 mt-5">
            <input
              type="text"
              placeholder="Add Todo"
              className="border p-2 w-md"
              onChange={(ele) => setAddTodo(ele.target.value)}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => AddTodoItems()}
            >
              Add Todo
            </button>
          </div>
          <p>{addTodo}</p>
          {todo.map((items) => (
            <ul className="bg-amber-300 p-5 my-2" key={items.id}>
              <li>{items.title}</li>
            </ul>
          ))}
        </div>
      </>
    );
}

export default ReduxUsingMakeTodoList;