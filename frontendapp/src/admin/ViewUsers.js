import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './userstable.css'

export default function ViewUsers() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:31792/viewusers');
      setUsers(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = async (email) => {
    try {
      await axios.delete(`http://localhost:31792/deleteuser/${email}`);
      fetchUsers();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="users-container">
      <div className="users-form">
        <h1>USERS</h1>
        
        <table className="users-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(users) && users.length > 0 ? (
              users.map((user, index) => (
                <tr key={index}>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.dateofbirth}</td>
                  <td>{user.gender}</td>
                  <td>{user.contact}</td>
                  <td>{user.email}</td>
                  <td>{user.location}</td>
                  <td>
                    <button onClick={() => deleteUser(user.email)} className='button'>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8">Data Not Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
