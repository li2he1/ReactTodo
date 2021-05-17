import React, { Component } from "react";
export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = { done: false };
  }
  onClick = () => {
    this.setState((prevState) => ({ done: !prevState.done }));
  };
  onDelete = () => {
    this.props.handleDeleteTodo(this.props.index);
  };
  render() {
    const textStyle = {
      textDecoration: this.state.done ? "line-through" : "none"
    };
    return (
      <div>
        <button className="done-btn" onClick={this.onClick}>
          {this.state.done ? "Undo" : "Done"}
        </button>
        <span className="todo-label" style={textStyle}>
          {this.props.todo.text}
        </span>
        <button onClick={this.onDelete}>X</button>
      </div>
    );
  }
}
