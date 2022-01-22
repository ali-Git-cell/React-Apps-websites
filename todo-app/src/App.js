import TodoList from "./TodoList";
import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const LSTORAGE = "todoApp-todos";

function App() {
  const [todos, setTodos] = useState([]);
  const todoRef = useRef();

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LSTORAGE));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LSTORAGE, JSON.stringify(todos));
  }, [todos]);

  function handleTodoAdd(e) {
    const name = todoRef.current.value;
    if (name === " ") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoRef.current.value = null;
  }

  function handleClear() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }

  return (
    <>
      <TodoList toggleTodo={toggleTodo} todos={todos} />
      <input ref={todoRef} type="text" />
      <button onClick={handleTodoAdd} type="checkbox">
        Add To Do
      </button>
      <button onClick={handleClear} type="checkbox">
        Clear completed ones
      </button>
      <div>{todos.filter((todo) => !todo.complete).length} left Todo</div>
    </>
  );
}

export default App;
