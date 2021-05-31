import TodoItem from "./TodoItem";
export default function TodoList(props) {
  return (
    <div>
      {props.todos.map((todo, i) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          index={i}
          handleDeleteTodo={props.handleDeleteTodo}
          updateDone={props.updateDone}
        />
      ))}
    </div>
  );
}
