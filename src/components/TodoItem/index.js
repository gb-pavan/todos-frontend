// src/components/Dashboard/Todo.js
import React from "react";
import "./index.css";

function Todo({ todo, onUpdate, onDelete }) {

  console.log("todo in todoitem",todo);
  const toggleStatus = () => onUpdate(todo.id, { status: todo.status === "Pending" ? "Completed" : "Pending" });

  return (
    <div className="todo-item">
      <span>{todo.title}</span>
      <button onClick={toggleStatus}>{todo.status}</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
}

export default Todo;
