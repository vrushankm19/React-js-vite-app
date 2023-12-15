// Implementing multiple states in React involves three input boxes; upon submitting, all values are stored in an object, and the object is printed after submission. Additionally, there is a date picker input field, and the selected date is stored in the object using the date.

import React, { useState } from 'react';

const UseStateProgram = () => {
  // State for input values
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  // State for date
  const [selectedDate, setSelectedDate] = useState('');

  // State for storing the object
  const [formData, setFormData] = useState(null);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the form data
    const formDataObject = {
      input1,
      input2,
      input3,
      date: new Date(selectedDate),
    };

    // Update the state with the form data
    setFormData(formDataObject);

    // Print the object in the console
    console.log(formDataObject);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Input 1:
          <input type="text" value={input1} onChange={(e) => setInput1(e.target.value)} />
        </label>

        <label>
          Input 2:
          <input type="text" value={input2} onChange={(e) => setInput2(e.target.value)} />
        </label>

        <label>
          Input 3:
          <input type="text" value={input3} onChange={(e) => setInput3(e.target.value)} />
        </label>

        <label>
          Date:
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UseStateProgram;
