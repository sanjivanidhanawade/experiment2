import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <span className="brand">Brand Name</span>
        <button className="get-users-btn" onClick={getUsers} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Get Users'}
        </button>
      </nav>
      <div className="user-grid">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <img src={user.avatar} alt="User Avatar" />
            <h3>{`${user.first_name} ${user.last_name}`}</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;