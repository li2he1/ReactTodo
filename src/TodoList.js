import TodoItem from "./TodoItem";
export default function TodoList(props) {
  return (
    <div>
      {props.todos.map((todo, i) => (
        <TodoItem
          todo={todo}
          index={i}
          handleDeleteTodo={props.handleDeleteTodo}
        />
      ))}
    </div>
  );
}
