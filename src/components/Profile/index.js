// // src/components/Dashboard/Profile.js
// import React, { useState, useEffect, useRef } from "react";
// import "./index.css";
// import { useNavigate } from "react-router-dom";
// import { deleteUser, getUserDetails, loginUser, updateUser } from "../../api/auth";

// function Profile() {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const navigate = useNavigate();
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

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedUser((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle save action
//   const handleSave = async () => {
//     const changes = {};
//     if (updatedUser.name !== user.name) changes.name = updatedUser.name;
//     if (updatedUser.email !== user.email) changes.email = updatedUser.email;

//     console.log("Updated user data:", changes);
//     await updateUser(user.id,changes);
//     console.log("user",user);
//     const userDetails = await getUserDetails(user.id);
//     console.log("userDetails",userDetails.userDetails);
//     localStorage.setItem("user",JSON.stringify(userDetails.userDetails));
//     setIsEditing(false);
//   };

//   // Handle cancel action
//   const handleCancel = () => {
//     setUpdatedUser({ name: user.name, email: user.email });
//     setIsEditing(false);
//   };

//   // Handle edit click
//   const handleEditClick = () => {
//     setIsEditing(true);
//     setIsDropdownOpen(false); // Close dropdown on edit
//   };

//   const handlePasswordReset = async (newPassword) => {
//     await updateUser(user.id,{password:newPassword});
//   }

//   const handleSignOut = async () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   }

//   const handleDeleteAccount = async () => {
//     await deleteUser(user.id);
//     navigate("/signup");
//   }

//   return (
//     <div className="profile-container">
//       {/* Display user's name and email */}
//       <div className="profile-info">
//         <h2>Welcome,</h2>
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
//             <div className="action-buttons">
//               <button onClick={handleSave}>Save</button>
//               <button onClick={handleCancel}>Cancel</button>
//             </div>
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
//           <button onClick={handlePasswordReset}>Reset Password</button>
//           <button onClick={handleSignOut}>Sign Out</button>
//           <button onClick={handleDeleteAccount}>Delete Account</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Profile;

import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { deleteUser, getUserDetails, updateUser } from "../../api/auth";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isResettingPassword, setIsResettingPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
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
      setIsResettingPassword(false);
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

    await updateUser(user.id, changes);
    const userDetails = await getUserDetails(user.id);
    localStorage.setItem("user", JSON.stringify(userDetails.userDetails));
    setIsEditing(false);
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

  // Handle password reset action
  const handlePasswordReset = async () => {
    if (newPassword) {
      await updateUser(user.id, { password: newPassword });
      setNewPassword("");
      setIsResettingPassword(false);
      alert("Password has been reset successfully.");
    } else {
      alert("Please enter a new password.");
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleDeleteAccount = async () => {
    await deleteUser(user.id);
    navigate("/signup");
  };

  return (
    <div>
      
      <div className="header">
        <div>Todo Application</div>

        <div className="profile-container">
          {/* Profile icon in the top-right corner */}
          <div className="profile-icon" onClick={toggleDropdown}>
            <span role="img" aria-label="profile icon">👤</span>
          </div>
          {/* Dropdown menu with Edit Profile and Reset Password options */}
          {isDropdownOpen && (
            <div className="dropdown-menu" ref={dropdownRef}>
              <button onClick={handleEditClick}>Edit Profile</button>

              {isResettingPassword ? (
                <div className="password-reset">
                  <input
                    type="password"
                    placeholder="New password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <button onClick={handlePasswordReset}>Confirm</button>
                  <button onClick={() => setIsResettingPassword(false)}>Cancel</button>
                </div>
              ) : (
                <button onClick={() => setIsResettingPassword(true)}>Reset Password</button>
              )}

              <button onClick={handleSignOut}>Sign Out</button>
              <button onClick={handleDeleteAccount}>Delete Account</button>
            </div>
          )}     
        </div>
      </div>

      <div className="user-info">
        <span>Welcome , </span>
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
            <span>{user.name}</span>
            <p>You are logged in with {user.email}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;





