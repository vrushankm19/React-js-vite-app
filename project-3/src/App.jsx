import React, { Component } from 'react';

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '', // Initialize with an empty value
    };
  }

  // Event handler to update the state when the input value changes
  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  // Event handler for form submission
  handleSubmit = (event) => {
    event.preventDefault();
    // You can access the input value from this.state.inputValue
    console.log('Submitted value: ' + this.state.inputValue);
  };

  render() {
    return (
      <div>
        <h2>Controlled Form Example</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Input:
            <input
              type="text"
              value={this.state.inputValue}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        <p>Input value: {this.state.inputValue}</p>
      </div>
    );
  }
}

export default MyForm;
