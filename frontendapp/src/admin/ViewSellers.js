import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './sellertable.css'

export default function ViewSellers() {
  const [sellers, setSellers] = useState([]);

  const fetchSellers = async () => {
    try {
      const response = await axios.get('http://localhost:31792/viewsellers');
      setSellers(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchSellers();
  }, []);

  const deleteSeller = async (email) => {
    try {
      await axios.delete(`http://localhost:31792/deleteseller/${email}`);
      fetchSellers();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="sellers-container">
      <h1>SELLERS</h1>
      <table className="sellers-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Company</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(sellers) && sellers.length > 0 ? (
            sellers.map((seller, index) => (
              <tr key={index}>
                <td>{seller.firstname}</td>
                <td>{seller.lastname}</td>
                <td>{seller.contact}</td>
                <td>{seller.email}</td>
                <td>{seller.company}</td>
                <td>{seller.location}</td>
                <td>
                  <button onClick={() => deleteSeller(seller.email)} className='button'>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">Data Not Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
