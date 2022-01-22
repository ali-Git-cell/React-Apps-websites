import React from "react";
import Todo from "./Todo";

function TodoList(props) {
  return props.todos.map((todo) => {
    return <Todo key={todo.id} toggleTodo={props.toggleTodo} todo={todo} />;
  });
}

export default TodoList;
