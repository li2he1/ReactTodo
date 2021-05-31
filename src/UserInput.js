import React, { Component } from "react";

export default class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = { userInput: "" };
  }
  handleInputChange = (e) => {
    this.setState({ userInput: e.target.value });
    // console.log(this.state.userInput);
  };

  handleAdd = () => {
    const text = this.state.userInput;
    if (text) {
      this.props.handleAddTodo(
        this.refs.UserID.value,
        new Date().getTime(),
        text,
        false
      );
    }
    this.setState({ userInput: "" });
  };

  render() {
    return (
      <div>
        <p>Input UserID</p>
        <input type="text" ref="UserID" />
        <p>Input Task</p>
        <input onChange={this.handleInputChange} value={this.state.userInput} />
        <button onClick={this.handleAdd}> Add</button>
        {/* <input type="text" ref="newItem" />
      <button onClick={ () => this.props.handleAddTodo(this.refs.newItem.value)}>add new task</button> */}
      </div>
    );
  }
}
