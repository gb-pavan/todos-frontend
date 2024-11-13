// src/components/Dashboard/Profile.js
// import React from "react";
// import "./index.css";

// function Profile() {
//   const user = JSON.parse(localStorage.getItem("user"));

//   return (
//     <div className="profile">
//       <h2>Welcome, {user.name}</h2>
//       <p>Email: {user.email}</p>
//     </div>
//   );
// }

// export default Profile;


// src/components/Dashboard/Profile.js
// import React, { useState } from "react";
// import "./index.css";

// function Profile() {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   // Toggle dropdown visibility
//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <div className="profile-container">
//       {/* Displaying user's name and email */}
//       <div className="profile-info">
//         <h2>Welcome, {user.name}</h2>
//         <p>Email: {user.email}</p>
//       </div>

//       {/* Profile icon in the top-right corner */}
//       <div className="profile-icon" onClick={toggleDropdown}>
//         <span role="img" aria-label="profile icon">👤</span>
//       </div>

//       {/* Dropdown menu with Edit Profile and Reset Password options */}
//       {isDropdownOpen && (
//         <div className="dropdown-menu">
//           <button onClick={() => alert("Edit Profile")}>Edit Profile</button>
//           <button onClick={() => alert("Reset Password")}>Reset Password</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Profile;


// src/components/Dashboard/Profile.js
// import React, { useState, useEffect, useRef } from "react";
// import "./index.css";

// function Profile() {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   // Toggle dropdown visibility
//   const toggleDropdown = () => {
//     setIsDropdownOpen((prev) => !prev);
//   };

//   // Close dropdown if clicking outside of it
//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setIsDropdownOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="profile-container">
//       {/* Displaying user's name and email */}
//       <div className="profile-info">
//         <h2>Welcome, {user.name}</h2>
//         <p>Email: {user.email}</p>
//       </div>

//       {/* Profile icon in the top-right corner */}
//       <div className="profile-icon" onClick={toggleDropdown}>
//         <span role="img" aria-label="profile icon">👤</span>
//       </div>

//       {/* Dropdown menu with Edit Profile and Reset Password options */}
//       {isDropdownOpen && (
//         <div className="dropdown-menu" ref={dropdownRef}>
//           <button onClick={() => alert("Edit Profile")}>Edit Profile</button>
//           <button onClick={() => alert("Reset Password")}>Reset Password</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Profile;


// src/components/Dashboard/Profile.js
// import React, { useState, useEffect, useRef } from "react";
// import "./index.css";

// function Profile() {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [updatedUser, setUpdatedUser] = useState({
//     name: user.name,
//     email: user.email,
//   });

//   const dropdownRef = useRef(null);

//   // Toggle dropdown visibility
//   const toggleDropdown = () => {
//     setIsDropdownOpen((prev) => !prev);
//   };

//   // Close dropdown if clicking outside of it
//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setIsDropdownOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Handle changes in the input fields
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedUser((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle save action
//   const handleSave = () => {
//     // Simulate an update request here
//     const changes = {};
//     if (updatedUser.name !== user.name) changes.name = updatedUser.name;
//     if (updatedUser.email !== user.email) changes.email = updatedUser.email;

//     // Here you can send `changes` to your backend for updating the user profile
//     console.log("Updated user data:", changes);

//     // Hide the dropdown after saving and finish editing
//     setIsDropdownOpen(false);
//     setIsEditing(false);
//   };

//   // Handle edit profile click
//   const handleEditClick = () => {
//     setIsEditing(true);
//     setIsDropdownOpen(false); // Close dropdown on edit
//   };

//   return (
//     <div className="profile-container">
//       {/* Displaying user's name and email */}
//       <div className="profile-info">
//         <h2>Welcome, </h2>
//         {isEditing ? (
//           <>
//             <input
//               type="text"
//               name="name"
//               value={updatedUser.name}
//               onChange={handleInputChange}
//             />
//             <input
//               type="email"
//               name="email"
//               value={updatedUser.email}
//               onChange={handleInputChange}
//             />
//           </>
//         ) : (
//           <>
//             <span>{user.name}</span>
//             <p>{user.email}</p>
//           </>
//         )}
//       </div>

//       {/* Profile icon in the top-right corner */}
//       <div className="profile-icon" onClick={toggleDropdown}>
//         <span role="img" aria-label="profile icon">
//           👤
//         </span>
//       </div>

//       {/* Dropdown menu with Edit Profile and Reset Password options */}
//       {isDropdownOpen && (
//         <div className="dropdown-menu" ref={dropdownRef}>
//           <button onClick={handleEditClick}>Edit Profile</button>
//           <button onClick={() => alert("Reset Password")}>Reset Password</button>
//         </div>
//       )}

//       {/* Save button to update the profile */}
//       {isEditing && (
//         <button onClick={handleSave}>Save</button>
//       )}
//     </div>
//   );
// }

// export default Profile;


// src/components/Dashboard/Profile.js
import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { deleteUser, loginUser, updateUser } from "../../api/auth";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const [updatedUser, setUpdatedUser] = useState({
    name: user.name,
    email: user.email,
  });

  const dropdownRef = useRef(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Close dropdown if clicking outside of it
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle save action
  const handleSave = async () => {
    const changes = {};
    if (updatedUser.name !== user.name) changes.name = updatedUser.name;
    if (updatedUser.email !== user.email) changes.email = updatedUser.email;

    console.log("Updated user data:", changes);
    setIsEditing(false);
    await updateUser(user.id,changes);
    const userDetails = await loginUser(user.email, user.password);
    setUpdatedUser(userDetails.user);
  };

  // Handle cancel action
  const handleCancel = () => {
    setUpdatedUser({ name: user.name, email: user.email });
    setIsEditing(false);
  };

  // Handle edit click
  const handleEditClick = () => {
    setIsEditing(true);
    setIsDropdownOpen(false); // Close dropdown on edit
  };

  const handleSignOut = async () => {
    localStorage.removeItem("token");
    navigate("/login");
  }

  const handleDeleteAccount = async () => {
    await deleteUser(user.id);
    navigate("/signup");
  }

  return (
    <div className="profile-container">
      {/* Display user's name and email */}
      <div className="profile-info">
        <h2>Welcome,</h2>
        {isEditing ? (
          <>
            <input
              type="text"
              name="name"
              value={updatedUser.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              value={updatedUser.email}
              onChange={handleInputChange}
            />
            <div className="action-buttons">
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          </>
        ) : (
          <>
            <span>{updatedUser.name}</span>
            <p>{updatedUser.email}</p>
          </>
        )}
      </div>

      {/* Profile icon in the top-right corner */}
      <div className="profile-icon" onClick={toggleDropdown}>
        <span role="img" aria-label="profile icon">
          👤
        </span>
      </div>

      {/* Dropdown menu with Edit Profile and Reset Password options */}
      {isDropdownOpen && (
        <div className="dropdown-menu" ref={dropdownRef}>
          <button onClick={handleEditClick}>Edit Profile</button>
          <button onClick={() => alert("Reset Password")}>Reset Password</button>
          <button onClick={handleSignOut}>Sign Out</button>
          <button onClick={handleDeleteAccount}>Delete Account</button>
        </div>
      )}
    </div>
  );
}

export default Profile;




