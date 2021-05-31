import "./styles.css";
import React, { Component } from "react";
import TodoList from "./TodoList";
import UserInput from "./UserInput";
import TodoFT from "./TodoFT";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        // { userId: 1, id: 1, text: "first task", done: false },
        // { userId: 1, id: 2, text: "second task", done: false },
        // { userId: 1, id: 3, text: "third task", done: false }
      ],
      show: 10
    };
  }
  async componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/todos";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ todos: data });
    //data.map(todo=>(this.handleAddTodo(todo.userId,todo.id,todo.title,todo.completed)));
  }
  handleAddTodo = (userId, id, text, done) => {
    this.setState((prevState) => ({
      todos: [
        { userId: userId, id: id, title: text, completed: done },
        ...prevState.todos
      ],
      show: prevState.show + 1
    }));
  };

  handleDeleteTodo = (index) => {
    this.setState((prevState) => ({
      todos: [
        ...prevState.todos.slice(0, index),
        ...prevState.todos.slice(index + 1, prevState.todos.length)
      ],
      show: prevState.show - 1
    }));
  };

  updateDone = (id, done) => {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: done } : todo
      )
    });
  };

  showMore = () => {
    this.setState((prevState) => ({
      show: prevState.show + 1
    }));
  };

  render() {
    return (
      <div className="App">
        <UserInput handleAddTodo={this.handleAddTodo} />
        <TodoList
          todos={this.state.todos.slice(0, this.state.show)}
          handleDeleteTodo={this.handleDeleteTodo}
          updateDone={this.updateDone}
        />
        <TodoFT showMore={this.showMore} />
      </div>
    );
  }
}
