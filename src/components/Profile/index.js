// src/components/Dashboard/Profile.js
import React from "react";
import "./index.css";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="profile">
      <h2>Welcome, {user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Profile;
