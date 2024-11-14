// src/components/Dashboard/Dashboard.js
import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { getTodos, addTodo, updateTodo, deleteTodo } from "../../api/todo";
import Profile from "../Profile";
import Todo from "../TodoItem";
import "./index.css";

function Dashboard() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [isLoading,setIsLoading] = useState(false);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const todoList = await getTodos();
    setTodos(todoList);
  };

  const handleAddTodo = async () => {
    setIsLoading(true);
    await addTodo({ text: newTodo });
    fetchTodos();
    setTimeout(() => {
      setIsLoading(false); // Stop spinner
    }, 4000);
    setNewTodo(""); 
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


          {isLoading? <ClipLoader color="#3498db" size={30} />: todos.map((todo,index) => (<div key={index} className="todo-list">
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
