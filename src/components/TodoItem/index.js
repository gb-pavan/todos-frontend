// src/components/Dashboard/Todo.js
// import React from "react";
// import "./index.css";

// function Todo({ todo, onUpdate,onEdit, onDelete }) {

//   // console.log("todo in todoitem",todo);
//   // const toggleStatus = () => onUpdate(todo.id, { status: todo.status === "Pending" ? "Completed" : "Pending" });

//   return (
//     <div className="todo-item">
//       <span>{todo.title}</span>
//       <button>{todo.status}</button>
//       <button onClick={() => onUpdate(todo.id)}>Edit</button>
//       <button onClick={() => onDelete(todo.id)}>Delete</button>
//     </div>
//   );
// }

// export default Todo;


// src/components/Dashboard/Todo.js
import React, { useState } from "react";
import "./index.css";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";



function Todo({ todo, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editableTitle, setEditableTitle] = useState(todo.title);
  const [editableStatus, setEditableStatus] = useState(todo.status);

   // Define button styles for each status type
  const statusButtonStyles = {
    Pending: { backgroundColor: "orange", color: "#fff" },
    InProgress: { backgroundColor: "blue", color: "#fff" },
    Completed: { backgroundColor: "green", color: "#fff" },
    Done: { backgroundColor: "gray", color: "#fff" },
  };

  // Toggle edit mode
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Save changes and exit edit mode
  const handleSaveClick = () => {
    const updatedFields = {};
    if (editableTitle !== todo.title) updatedFields.title = editableTitle;
    if (editableStatus !== todo.status) updatedFields.status = editableStatus;

    // Only call onUpdate if there are changes
    if (Object.keys(updatedFields).length > 0) {
      onUpdate(todo.id, updatedFields);
    }

    setIsEditing(false); // Exit edit mode
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editableTitle}
            onChange={(e) => setEditableTitle(e.target.value)}
          />
          <select
            value={editableStatus}
            onChange={(e) => setEditableStatus(e.target.value)}
          >
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <span>{todo.title}</span>
          <button style={statusButtonStyles[todo.status]}>{todo.status}</button>
          <button onClick={handleEditClick}><FaEdit /></button>
          <button onClick={() => onDelete(todo.id)}><MdDelete /></button>
        </>
      )}
    </div>
  );
}

export default Todo;

