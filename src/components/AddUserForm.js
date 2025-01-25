// src/components/AddUserForm.js
import React, { useState } from 'react';

const AddUserForm = ({ addUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      addUser({ name, email, goals: [] });  // Adding a new user with an empty goals list
      setName('');  // Clear the name field
      setEmail('');  // Clear the email field
    }
  };

  return (
    <div className="add-user-form">
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUserForm;

