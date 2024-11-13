// src/api/auth.js
// export const registerUser = ({ name, email, password }) => {
//     return Promise.resolve({ success: true });
//   };

export const registerUser = async ({ name, email, password }) => {
  try {
    const response = await fetch('https://todos-backend-fuh0.onrender.com/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    });

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

  
  export const loginUser = ({ email, password }) => {
    return Promise.resolve({ token: "mocked-jwt-token", user: { name: "John Doe", email } });
  };
  