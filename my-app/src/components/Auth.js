import React, { useState } from 'react';
import axios from 'axios';

const Auth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false); 

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'https://dummyjson.com/docs/auth',
        {
          username: username,
          password: password
        }
      );
      const { token } = response.data;
      setToken(token);
      setLoggedIn(true); 
      console.log('Logged in successfully!');
    } catch (error) {
      if (error.response) {
        console.error('Error response:', error.response.data);
        console.error('Status code:', error.response.status);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up the request:', error.message);
      }
      console.error('Error logging in:', error);
    }
  };

  const handleLogout = () => {
    setToken(null); 
    setLoggedIn(false); 
    setUsername(''); 
    setPassword(''); 
    console.log('Logged out successfully!');
  };

  return (
    <div>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Log In</button>
      <button onClick={handleLogout}>Log Out</button>
      {loggedIn && <p>Logged in as {username}</p>} 
    </div>
  );
};

export default Auth;
