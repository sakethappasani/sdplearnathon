import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './responses.css'

export default function ViewResponses() {
  const [responses, setResponses] = useState([]);

  const fetchResponses = async () => {
    try {
      const response = await axios.get('http://localhost:31792/viewresponses');
      setResponses(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchResponses();
  }, []);

  const deleteUser = async (email) => {
    try {
      await axios.delete(`http://localhost:31792/deleteresponses/${email}`);
      fetchResponses();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="responses-container">
      <h1>RESPONSES</h1>
      <table className="responses-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Response</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(responses) && responses.length > 0 ? (
            responses.map((response, index) => (
              <tr key={index}>
                <td>{response.name}</td>
                <td>{response.email}</td>
                <td>{response.reason}</td>
                <td>
                  <button onClick={() => deleteUser(response.email)} className='button'>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Data Not Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
