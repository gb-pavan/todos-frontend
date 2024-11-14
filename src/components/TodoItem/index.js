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
import { ClipLoader } from "react-spinners";



function Todo({ todo, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editableTitle, setEditableTitle] = useState(todo.title);
  const [editableStatus, setEditableStatus] = useState(todo.status);
  const [isLoading,setIsLoading] = useState(false);
  const [isDeleting,setIsDeleting] = useState(false);


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
    setIsLoading(true);
    const updatedFields = {};
    if (editableTitle !== todo.title) updatedFields.title = editableTitle;
    if (editableStatus !== todo.status) updatedFields.status = editableStatus;

    console.log("updatedFields",updatedFields);

    // Only call onUpdate if there are changes
    if (Object.keys(updatedFields).length > 0) {
      onUpdate(todo.id, updatedFields);
    }
    setTimeout(() => {
      setIsLoading(false); // Stop spinner
    }, 4000); 

    setIsEditing(false); // Exit edit mode
  };

  const handleDeleteClick = async () => {
    setIsDeleting(true);
    setIsLoading(true);
    await onDelete(todo.id);
    setTimeout(() => {
      setIsLoading(false); // Stop spinner
      setIsDeleting(false);
    }, 4000); 
  }

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
          <span>{isLoading && editableTitle !== todo.title ?<ClipLoader color="#3498db" size={30} /> : todo.title}</span>
          <button style={statusButtonStyles[todo.status]}>{isLoading && editableStatus !== todo.status ?<ClipLoader color="#3498db" size={30} /> : 
            todo.status}
          </button>
          <button onClick={handleEditClick}><FaEdit /></button>
          <button onClick={handleDeleteClick}>{isLoading && isDeleting?<ClipLoader color="#3498db" size={30} /> :<MdDelete />}</button>
        </>
      )}
    </div>
  );
}

export default Todo;

