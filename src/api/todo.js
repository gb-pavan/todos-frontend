// src/api/todo.js
let todos = [];

// export const addTodo = (todo) => {
//   console.log("nooooooooo",todo);
//   todos.push({ title: todo.text,description:"", status: "In Progress" });
//   return Promise.resolve(todos);
// };

// export const addTodo = async (todo) => {
//   const token = localStorage.getItem("authToken"); // Retrieve token from storage or context

//   const todoData = {
//     title: todo.text,
//     description: "",
//     status: "In Progress",
//   };

//   try {
//     const response = await fetch("/api/tasks", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`, // Add the bearer token
//       },
//       body: JSON.stringify(todoData), // Convert data to JSON format
//     });

//     if (!response.ok) {
//       throw new Error("Failed to add todo");
//     }

//     const result = await response.json();
//     console.log("Todo added:", result);
//     return result; // Return the response from the API
//   } catch (error) {
//     console.error("Error adding todo:", error.message);
//     throw error; // Throw error to be handled by calling function
//   }
// };

export const addTodo = async (todo) => {
  const token = localStorage.getItem("token"); // Retrieve token from storage

  console.log("todo parameter",todo);

  console.log("token in add todo", token);

  const todoData = {
    title: todo.text,
    description: "not empty",
    status: "In Progress",
  };

  try {
    const response = await fetch("https://todos-backend-fuh0.onrender.com/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Add the bearer token
      },
      body: JSON.stringify(todoData),
    });

    // Check if response is OK and in JSON format
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Request failed: ${errorText}`);
    }

    // Parse JSON response only if response is OK
    const result = await response.json();
    console.log("Todo added:", result);
    return result;
  } catch (error) {
    console.error("Error adding todo:", error.message);
    throw error;
  }
};



// export const getTodos = () => Promise.resolve(todos);

export const getTodos = async () => {
  const token = localStorage.getItem("token"); // Retrieve token from storage

  console.log("token in get todos", token);

  try {
    const response = await fetch("https://todos-backend-fuh0.onrender.com/api/tasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Add the bearer token
      },
    });

    // Check if response is OK and in JSON format
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Request failed: ${errorText}`);
    }

    // Parse JSON response only if response is OK
    const todos = await response.json();
    console.log("Fetched todos:", todos);
    return todos;
  } catch (error) {
    console.error("Error fetching todos:", error.message);
    throw error;
  }
};


export const updateTodo = (id, updates) => {
  todos = todos.map(todo => (todo.id === id ? { ...todo, ...updates } : todo));
  return Promise.resolve(todos);
};

export const deleteTodo = (id) => {
  todos = todos.filter(todo => todo.id !== id);
  return Promise.resolve(todos);
};
