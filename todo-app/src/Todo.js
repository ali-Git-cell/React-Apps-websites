import React from "react";

export default function Todo(props) {
  function handleClick() {
    props.toggleTodo(props.todo.id);
  }
  return (
    <div>
      <input
        type="checkbox"
        onChange={handleClick}
        checked={props.todo.complete}
      ></input>
      <label>{props.todo.name}</label>
    </div>
  );
}
