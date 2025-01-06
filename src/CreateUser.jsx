import React, { useState } from 'react';
import axios from 'axios';
import './CreateUser.css';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    axios
      .post('https://backendnewcode.onrender.com/api/user/create', { name, email, address })
      .then((result) => {
        console.log(result.data);
        navigate('/');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="Form">
      <h1>Create User</h1>
      <form onSubmit={submit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label>Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateUser;
