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
import React, { useState } from "react";
import "./index.css";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="profile-container">
      {/* Displaying user's name and email */}
      <div className="profile-info">
        <h2>Welcome, {user.name}</h2>
        <p>Email: {user.email}</p>
      </div>

      {/* Profile icon in the top-right corner */}
      <div className="profile-icon" onClick={toggleDropdown}>
        <span role="img" aria-label="profile icon">👤</span>
      </div>

      {/* Dropdown menu with Edit Profile and Reset Password options */}
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <button onClick={() => alert("Edit Profile")}>Edit Profile</button>
          <button onClick={() => alert("Reset Password")}>Reset Password</button>
        </div>
      )}
    </div>
  );
}

export default Profile;

