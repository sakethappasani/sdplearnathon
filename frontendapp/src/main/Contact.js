import React, { useState } from 'react';
import axios from 'axios';
import './contact.css'; // Importing CSS file

export default function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:31792/contactform', formData);
      if (response.status === 200) {
        setFormData({
          name: '',
          email: '',
          reason: ''
        });
      }
      setMessage(response.data);
      setError('');
    } catch (error) {
      setError(error.response.data);
      setMessage('');
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-form">
        <h3>Contact Form</h3>
        {message ? (
          <h4 className="message" align="center" style={{"color":"green"}}>{message}</h4>
        ) : (
          <h4 className="error">{error}</h4>
        )}

        <form onSubmit={handleSubmit}>
          <div>
            <label>Full Name</label>
            <input type="text" id="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label>Email</label>
            <input type="email" id="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label>Query</label>
            <textarea id="reason" value={formData.reason} onChange={handleChange} required placeholder='Explain your issue briefly' />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
