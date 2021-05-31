import React, { Component } from "react";
export default class TodoItem extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { done: false };
  // }
  onClick = () => {
    this.props.updateDone(this.props.todo.id, !this.props.todo.completed);
    // this.setState((prevState) => ({ done: !prevState.done }));
  };
  onDelete = () => {
    this.props.handleDeleteTodo(this.props.index);
  };
  render() {
    const textStyle = {
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
    return (
      <div>
        {/* <button className="done-btn" onClick={this.onClick}>
          {this.state.done ? "Undo" : "Done"}
        </button> */}
        <input
          type="checkbox"
          checked={this.props.todo.completed}
          onChange={() => {
            this.onClick();
          }}
        />

        <span className="todo-label" style={textStyle}>
          {this.props.todo.userId} {this.props.todo.title}
        </span>
        <button onClick={this.onDelete}>X</button>
      </div>
    );
  }
}
