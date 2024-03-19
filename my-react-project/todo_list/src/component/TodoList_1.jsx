import React, { useState } from 'react';
import '../App.scss';

const TodoList_1 = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodos = (e) => {
    const text = e.target.value;
    setNewTodo(text);
  }

  const addButton = () => {
    if (newTodo.trim() !== "") {
      const todosAll = [...todos, newTodo];
      setTodos(todosAll);
      setNewTodo("");
    }
  }

  const removeTodos = (index) => {
    const finalTodos = todos.filter((_, i) => i !== index);
    setTodos(finalTodos);
  }

  return (
    <div className='container'>
      <h1>My Todo List</h1>
      <input type='text' value={newTodo} onChange={addTodos} placeholder='Add new todo' />
      <button onClick={addButton}>Add</button>
      <div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button className='delete-btn' onClick={() => removeTodos(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TodoList_1;
