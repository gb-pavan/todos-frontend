// // src/components/Auth/SignUp.js
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { registerUser } from "../../api/auth";
// import "./index.css";

// function SignUp() {
//   const [form, setForm] = useState({ name: "", email: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("form",form);
//     await registerUser(form);
//     navigate("/login");
//   };

//   return (
//     <form className="signup-form" onSubmit={handleSubmit}>
//       <input name="name" placeholder="Name" onChange={handleChange} />
//       <input name="email" placeholder="Email" onChange={handleChange} />
//       <input name="password" type="password" placeholder="Password" onChange={handleChange} />
//       <button type="submit">Sign Up</button>
//     </form>
//   );
// }

// export default SignUp;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { registerUser } from "../../api/auth";
// import "./index.css";

// function SignUp() {
//   const [form, setForm] = useState({ name: "", email: "", password: "" });
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("form", form);

//     try {
//       const response = await registerUser(form);
//       console.log("response",response);
      
//       if (response.message === 'User registered successfully, please sign in.') {
//         navigate("/login");
//       } else {
//         setError(response.message || "Registration failed. Please try again.");
//       }
//     } catch (error) {
//       setError(error.message || "An error occurred. Please try again.");
//     }
//   };

//   return (
//     <form className="signup-form" onSubmit={handleSubmit}>
//       <input name="name" placeholder="Name" onChange={handleChange} value={form.name} />
//       <input name="email" placeholder="Email" onChange={handleChange} value={form.email} />
//       <input name="password" type="password" placeholder="Password" onChange={handleChange} value={form.password} />
//       <button type="submit">Sign Up</button>
//       {error && <p className="error-message">{error}</p>}
//     </form>
//   );
// }

// export default SignUp;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../api/auth";
import "./index.css";

function SignUp() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form", form);

    try {
      const response = await registerUser(form);
      console.log("response", response);

      if (response.message === 'User registered successfully, please sign in.') {
        setMessage(response.message);

        // Delay redirection to show the message first
        setTimeout(() => {
          navigate("/login");
        }, 5000); // 2-second delay
      } else {
        setMessage(response.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      setMessage(error.message || "An error occurred. Please try again.");
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} value={form.name} />
      <input name="email" placeholder="Email" onChange={handleChange} value={form.email} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} value={form.password} />
      <button type="submit">Sign Up</button>
      {message && <p className="message">{message}</p>}
    </form>
  );
}

export default SignUp;

