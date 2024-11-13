// src/api/auth.js
// export const registerUser = ({ name, email, password }) => {
//     return Promise.resolve({ success: true });
//   };

export const registerUser = async ({ name, email, password }) => {
  console.log("heloooo");
  try {
    const response = await fetch('https://todos-backend-fuh0.onrender.com/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    });

    console.log("insidessssss");

    if (!response.ok) {
      throw new Error('Failed to register user');
    }

    const data = await response.json();
    return data;  // Assuming the API response is in JSON format
  } catch (error) {
    console.error('Error:', error);
    return { success: false, message: error.message };
  }
};

  
  // export const loginUser = ({ email, password }) => {
  //   return Promise.resolve({ token: "mocked-jwt-token", user: { name: "John Doe", email } });
  // };

  export const loginUser = async ({ email, password }) => {
  console.log("heloooo");

  console.log("email",email);
  console.log("pass",password);
  try {
    const response = await fetch('https://todos-backend-fuh0.onrender.com/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    console.log("insidessssss");
    console.log("response in login user",response);

    if (!response.ok) {
      throw new Error('Failed to login user');
    }

    const data = await response.json();
    return data;  // Assuming the API response is in JSON format
  } catch (error) {
    console.error('Error:', error);
    return { success: false, message: error.message };
  }
};

// export const updateUser = async (id, updates) => {
//   console.log("Updating user with id:", id);
//   console.log("Updates:", updates);
//   try {
//     const response = await fetch(`https://todos-backend-fuh0.onrender.com/api/profile/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(updates)
//     });

//     console.log("Response in update user:", response);

//     if (!response.ok) {
//       throw new Error('Failed to update user');
//     }

//     const data = await response.json();
//     return data;  // Assuming the API response is in JSON format
//   } catch (error) {
//     console.error('Error:', error);
//     return { success: false, message: error.message };
//   }
// };

export const updateUser = async (id, updates) => {
  console.log("Updating user with id:", id);
  console.log("Updates:", updates);
  
  try {
    const response = await fetch(`https://todos-backend-fuh0.onrender.com/api/profile/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updates)
    });

    if (!response.ok) {
      const errorDetails = await response.json(); // Log specific error details
      console.error("Error details:", errorDetails);
      throw new Error('Failed to update user');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return { success: false, message: error.message };
  }
};

export const getUserDetails = async (id) => {
  console.log("Fetching user details for id:", id);

  try {
    const response = await fetch(`https://todos-backend-fuh0.onrender.com/api/profile/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const errorDetails = await response.json(); // Log specific error details
      console.error("Error details:", errorDetails);
      throw new Error('Failed to fetch user details');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return { success: false, message: error.message };
  }
};


export const deleteUser = async (id) => {
  console.log("Deleting user with id:", id);

  try {
    const response = await fetch(`https://todos-backend-fuh0.onrender.com/api/profile/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const errorDetails = await response.json(); // Log specific error details
      console.error("Error details:", errorDetails);
      throw new Error('Failed to delete user');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return { success: false, message: error.message };
  }
};




  