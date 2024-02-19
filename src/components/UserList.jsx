import React, { useState, useEffect } from 'react';
import './UserList.css'; // Add your styling here

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from the API
    fetch('http://localhost:3001/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div className="user-screen">
    <div className="user-list">
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id} className="user-item">
            <img src= 'https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png' alt={user.name} className="user-image" />
            <div className="user-details">
              <h3>{user.username}</h3>
              {/* <p>Number: </p> */}
              <p>Email: {user.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default UserList;
