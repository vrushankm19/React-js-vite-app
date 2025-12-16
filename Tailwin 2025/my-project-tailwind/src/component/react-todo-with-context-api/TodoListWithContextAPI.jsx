import React, { useEffect, useState } from "react";

const TodoListWithContextAPI = () => {
  let [addTodo, setAddTodo] = useState("");
  let [editlist, seteditlist] = useState("");
  let [toggleButton, settoggleButton] = useState(false);
  let [data, setData] = useState([]);
  let [loding, setLoding] = useState();
  let baseApi = "https://6940e172993d68afba6d4a92.mockapi.io/TodoApiName";

  async function getData(){
    try{
      const response = await fetch(baseApi);
      const dataTodo = await response.json();
      setData(dataTodo);
      localStorage.setItem("todos", JSON.stringify(dataTodo));
    } catch(error) {
      console.log("erro", error);
    }
  }

  useEffect(() => {
    if (localStorage.getItem("todos")) {
      let newLocal = localStorage.getItem("todos");
      setData(JSON.parse(newLocal));
    } else {
      getData();
    }
  }, []);
  
  function inputFild(ele) {
    console.log("ele", ele);
    setAddTodo(ele.target.value);
  }
  console.log("addtodo", addTodo);
  console.log("Todo Lists", data);

  const addEvent = async () => {
    try {

      if (addTodo) {
        const response = await fetch(baseApi, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ todoData: addTodo }),
        });
        const apiAddData = await response.json();

        let inData = data;
        let newData = {
          id: Date.now(),
          todoData: addTodo,
        };
        setData([...inData, newData]);

        try{
          const response = fetch
        } catch(error){
          console.log("error", error);
        }

        console.log("data", [...inData, newData]);
        localStorage.setItem("todos", JSON.stringify([...inData, newData]));
        setAddTodo("");
      } else {
        console.error("Add Data");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const removeTodo = async (ele) => {
    let newDataRemove = data.filter((el) => el.id !== ele);

    const response = await fetch(`${baseApi}/${ele}`, {
      method: "DELETE",
    });

    setData(newDataRemove);
    localStorage.setItem("todos", JSON.stringify(newDataRemove));
  };

  const editTodo = async (ele) => {
    let newDataEdit = data.find((el) => el.id === ele);
    if (newDataEdit) {
      setAddTodo(newDataEdit.todoData);
      seteditlist(ele);
      settoggleButton(true);
    }
  };

  const saveEvent = async () => {
    let editAfterData = data.map((el) => {
      if (el.id === editlist) {
        return { ...el, todoData: addTodo };
      }
      return el;
    });

    const response = await fetch(`${baseApi}/${editlist}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ todoData: addTodo }),
    });
    

    setData(editAfterData);
    localStorage.setItem("todos", JSON.stringify(editAfterData));
    settoggleButton(false);
    setAddTodo("");
  };

  const cancelEvent = () => {
    settoggleButton(false);
    setAddTodo("");
  };

  return (
    <>
      <div className="container mx-auto mt-5">
        <h1 className="text-2xl font-bold mb-3">Todo List with Api</h1>
        <div className="flex gap-5">
          <input
            type="text"
            className="p-3 bg-gray-200 border w-100 rounded-lg"
            onChange={inputFild}
            value={addTodo}
          />
          {!toggleButton && (
            <button
              className="p-3 bg-blue-600 rounded-lg font-bold text-white"
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

        {data.length > 0 ? (
          data.map((items) => (
            <>
              <div
                key={items.id}
                className="px-2 py-2 ps-5 bg-amber-300 my-3 flex items-center justify-between rounded-lg"
              >
                <p className="font-bold">{items.todoData}</p>
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
          ))
        ) : (
          <div className="font-bold text-2xl text-center bg-amber-100 mt-5 p-4 rounded-[5px]">
            No Data Found...
          </div>
        )}
      </div>
    </>
  );
};

export default TodoListWithContextAPI;
