import React, { useState } from 'react';
import axios from 'axios';
import './common.css'

export default function UserLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:31792/checkuserlogin', formData);
      if (response.data != null) {
        console.log(response.data);
        window.location.href = "https://newerp.kluniversity.in";
      } else {
        setMessage("Login Failed");
        setError("");
      }
    } catch (error) {
      setMessage("");
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <h2>User Login</h2>
        {
          message ? <p className="error-message">{message}</p> : null
        }
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={formData.password} onChange={handleChange} required />
          </div>
          <button type="submit" className="submit-button">Login</button>
        </form>
      </div>
    </div>
  );
}
