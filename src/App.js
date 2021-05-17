import "./styles.css";
import React, { Component } from "react";
import TodoList from "./TodoList";
import UserInput from "./UserInput";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, text: "first task" },
        { id: 2, text: "second task" },
        { id: 3, text: "third task" }
      ]
    };
  }
  handleAddTodo = (text) => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, { id: new Date().getTime(), text }]
    }));
  };

  handleDeleteTodo = (index) => {
    this.setState((prevState) => ({
      todos: [
        ...prevState.todos.slice(0, index),
        ...prevState.todos.slice(index + 1, prevState.todos.length)
      ]
    }));
  };

  render() {
    return (
      <div className="App">
        <TodoList
          todos={this.state.todos}
          handleDeleteTodo={this.handleDeleteTodo}
        />
        <UserInput handleAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}
