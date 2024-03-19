import React, { useState } from 'react';

const TodoList_3 = () => {
  const [data, setData] = useState('');
  const [list, setList] = useState([]);
  const [editKey, setEditKey] = useState(null);

  const inputData = (e) => {
    setData(e.target.value);
  };

  const addData = () => {
    if (editKey !== null) {
      // Editing an existing task
      // const updatedList = list.map((item) =>
      //   item.key === editKey ? { ...item, name: data } : item
      // );
      // ______________________________2____________________
      const updatedList = list.map((item) => {
        if (item.key === editKey) {
          // If the current item's key matches the editKey
          return {
            ...item,   // Keep all existing properties from the current item
            name: data  // Update the 'name' property with the current value of data
          };
        } else {
          // If the current item's key doesn't match the editKey
          return item;  // Keep the current item unchanged
        }
      });

      
      setList(updatedList);
      setEditKey(null);
    } else {
      // Adding a new task
      setList([...list, { key: new Date().toISOString(), name: data }]);
    }
    setData('');
  };

  const deleteData = (key) => {
    const updatedList = list.filter((item) => item.key !== key);
    setList(updatedList);
  };

  const editData = (key) => {
    const editItem = list.find((item) => item.key === key);
    setEditKey(key);
    setData(editItem.name);
    // console.log(editItem.name);
  };

  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-md-6'>
          <input
            className='form-control mb-3'
            type='text'
            placeholder='Enter task'
            value={data}
            onChange={inputData}
          />
        </div>
        <div className='col-md-6'>
          <button className='btn btn-primary btn-block' onClick={addData}>
            {editKey !== null ? 'Update Task' : 'Add Task'}
          </button>
        </div>
      </div>

      {list.map((item) => (
        <div key={item.key} className='mt-3'>
          <div className='card'>
            <div className='card-body d-flex align-items-center justify-content-between'>
              <h5 className='card-title m-0'>{item.name}</h5>
              <button
                className='btn btn-danger'
                onClick={() => deleteData(item.key)}
              >
                Delete
              </button>
              <button
                className='btn btn-warning ms-3'
                onClick={() => editData(item.key)}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList_3;
