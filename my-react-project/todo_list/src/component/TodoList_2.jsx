import React, { useState, useEffect } from 'react';
import '../App.scss';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      // Save new todo to API
      saveTodoToApi(newTodo)
        .then(() => {
          // Fetch updated data from the API
          fetchDataFromApi();
          // Clear the input field
          setNewTodo("");
        })
        .catch(error => console.error("Error saving todo to API", error));
    }
  }
  

  const removeTodo = (index) => {
    const filteredTodos = todos.filter((_, i) => i !== index);
    setTodos(filteredTodos);
  }

  const saveTodoToApi = (todo) => {
    return fetch("https://659cc32e633f9aee7907e9b2.mockapi.io/POST", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: todo,
        completed: false,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log("New Todo saved to API", data);
        return data; // Return the result of the API call
      })
      .catch(error => {
        console.error("Error saving todo to API", error);
        throw error; // Re-throw the error to be caught by the calling function
      });
  }
  

  useEffect(() => {
    // Fetch initial data from the API when the component mounts
    fetchDataFromApi();
  }, []);

  const fetchDataFromApi = () => {
    fetch("https://659cc32e633f9aee7907e9b2.mockapi.io/POST")
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch(error => console.error("Error fetching data from API", error));
  }

  return (
    <div className='container'>
      <h1>My Todo List</h1>
      <input
        type='text'
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder='Add new todo'
      />
      <button onClick={addTodo}>Add</button>
      <div>
        <ul>
          {todos.map((todo,ind) => (
            <li key={ind}>
              {todo.title}
              <button className='delete-btn' onClick={() => removeTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
