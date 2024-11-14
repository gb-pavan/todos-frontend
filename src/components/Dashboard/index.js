// src/components/Dashboard/Dashboard.js
import React, { useEffect, useState } from "react";
import { getTodos, addTodo, updateTodo, deleteTodo } from "../../api/todo";
import Profile from "../Profile";
import Todo from "../TodoItem";
import "./index.css";

function Dashboard() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const todoList = await getTodos();
    setTodos(todoList);
  };

  const handleAddTodo = async () => {
    await addTodo({ text: newTodo });
    fetchTodos();
  };

  const handleUpdateTodo = async (id, updates) => {
    await updateTodo(id, updates);
    fetchTodos();
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    fetchTodos();
  };

  return (
    <div className="dashboard">
      <Profile />
      <div className="todo-section">
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
        />
        <button onClick={handleAddTodo}>Add Todo</button>        
      </div>

      
          {todos.map((todo) => (<div className="todo-list">
            <Todo
              key={todo.id}
              todo={todo}
              onUpdate={handleUpdateTodo}
              onDelete={handleDeleteTodo}
            /></div>
          ))}
      </div>
    
  );
}

export default Dashboard;
