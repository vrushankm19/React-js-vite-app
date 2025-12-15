import React, { useEffect, useState } from "react";

const App = () => {
  let [addTodo, setAddTodo] = useState('');
  let [editlist, seteditlist] = useState("");
  let [toggleButton, settoggleButton] = useState(false);
  let [data, setData] = useState([]);
  let [loding, setLoding] = useState();

  useEffect(() => {
    if (localStorage.getItem("todos")){
      let newLocal = localStorage.getItem("todos");
      setData(JSON.parse(newLocal));
    } else{
      localStorage.setItem(
        "todos",
        JSON.stringify([
          { id: 1, text: "Learn React" },
          { id: 2, text: "Practice JavaScript" },
          { id: 3, text: "Build a Todo App" }
        ]
        )
      );
    }
  },[])
  
  
  function inputFild(ele) {
    console.log("ele",ele)
    setAddTodo(ele.target.value);
  }
  console.log("addtodo",addTodo)
  

  const addEvent = () => {
    try {
      if (addTodo) {
        let inData = data;
        let newData = {
          id: Date.now(),
          text: addTodo,
        };
        setData([...inData, newData]);
        console.log("data",[...inData, newData]);
        localStorage.setItem("todos", JSON.stringify([...inData, newData]));
        setAddTodo('');
      } else {
        console.error("Add Data");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const removeTodo = (ele) => {
    let newDataRemove = data.filter((el) => el.id !== ele);
    setData(newDataRemove);
    localStorage.setItem("todos", JSON.stringify(newDataRemove));
  }

  const editTodo = (ele) => {
    let newDataEdit = data.filter((el) => el.id == ele);
    let finalEdit = newDataEdit.map((i) => i.text)
    setAddTodo(finalEdit);
    seteditlist(ele);
    settoggleButton(true);
  };

  const saveEvent = () => {
    let editAfterData = data.map((el) => {
      if (el.id === editlist) {
        return { ...el, text: addTodo };
      }
      return el;
    });

    // let finalEdit = editAfterData.map((i) => i.text == addTodo);
    setData(editAfterData);
    localStorage.setItem("todos", JSON.stringify(editAfterData));
    settoggleButton(false);
    setAddTodo("");
  }

  const cancelEvent = () => {
    settoggleButton(false);
    setAddTodo("");
  }

  return (
    <>
      <div className="container mx-auto mt-5">
        <h1 className="text-2xl font-bold mb-3">Todo List</h1>
        <div className="flex gap-5">
          <input
            type="text"
            className="p-3 bg-gray-200 border w-100 rounded-lg"
            onChange={inputFild}
            value={addTodo}
          />
          {!toggleButton && (
            <button
              className="p-3 bg-green-400 rounded-lg font-bold"
              onClick={addEvent}
            >
              Add Todo
            </button>
          )}
          {toggleButton && (
            <>
              <button
                className="p-3 bg-green-400 rounded-lg font-bold"
                onClick={saveEvent}
              >
                Save
              </button>
              <button
                className="p-3 bg-green-400 rounded-lg font-bold"
                onClick={cancelEvent}
              >
                Cancel
              </button>
            </>
          )}
        </div>
        {/* <p>{addTodo}</p> */}

        {data.length > 0 ? data.map((items) => (
          <>
            <div
              key={items.id}
              className="px-2 py-2 ps-5 bg-amber-300 my-3 flex items-center justify-between rounded-lg"
            >
              <p className="font-bold">{items.text}</p>
              <div className="flex gap-2">
                <button
                  className="bg-white p-3 rounded-lg"
                  onClick={() => editTodo(items.id)}
                >
                  ✏️
                </button>
                <button
                  className="bg-white p-3 rounded-lg"
                  onClick={() => removeTodo(items.id)}
                >
                  🗑️
                </button>
              </div>
            </div>
          </>
        )) : (
          <div className="font-bold text-2xl text-center bg-amber-100 mt-5 p-4">No Data Found...</div>
        )}
        
      </div>
    </>
  );
}

export default App;