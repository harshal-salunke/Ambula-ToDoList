import React, { useState } from "react";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (text) => {
    const newTodo = { text, completed: false };
    newTodo.id = Math.random().toString(36).substring(7);
    setTodos([...todos, newTodo]);
  };

  const handleMarkTodoAsCompleted = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = true;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleRemoveTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1 style={{ color: "red" }}>To-Do List</h1>
      <ul style={{ backgroundColor: "#eee" }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              color: todo.completed ? "gray" : "black",
              fontWeight: todo.completed ? "normal" : "bold"
            }}
          >
            <span>{todo.text}</span>
            <button
              onClick={() => handleMarkTodoAsCompleted(todo.id)}
              className={todo.completed ? "completed" : ""}
            >
              Mark as completed
            </button>
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>
        Total tasks: {todos.length}
        <br />
        Completed tasks: {todos.filter((todo) => todo.completed).length}
      </p>
      <button
        onClick={() => handleAddTodo("New task")}
        style={{ backgroundColor: "green", color: "white" }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default ToDoList;
