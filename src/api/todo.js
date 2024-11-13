// src/api/todo.js
let todos = [];

export const addTodo = (todo) => {
  console.log("nooooooooo",todo);
  todos.push({ title: todo.text,description:"", status: "In Progress" });
  return Promise.resolve(todos);
};

export const getTodos = () => Promise.resolve(todos);

export const updateTodo = (id, updates) => {
  todos = todos.map(todo => (todo.id === id ? { ...todo, ...updates } : todo));
  return Promise.resolve(todos);
};

export const deleteTodo = (id) => {
  todos = todos.filter(todo => todo.id !== id);
  return Promise.resolve(todos);
};
