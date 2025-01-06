// import React from 'react'
// import axios from 'axios'
// import {useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom';
// function UpdateUser() {
//   const {id}=useParams();
//   const [name,setName]=useState();
//   const [email,setEmail]=useState();
//   const [address,setAddress]=useState();
//   const navigate = useNavigate();

//   const update = (e)=>{
//     e.preventDefault();
//     axios.put(`http://localhost:8080/api/user/update/${id}`,{name,email,address})
//     .then(result=>{
//       console.log(result);
//       navigate('/');
//     })
//     .catch(err=>{
//       console.log(err)
//     })
//   }
//   return (
//     <div class="forms">
//       <form onSubmit={update}>
//         <h1>Update User</h1>
//         <lable >Name:</lable>
//         <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
//         <lable>Email:</lable>
//         <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
//         <lable>Address:</lable>
//         <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)}></input>
//         <button type="submit" class="submitbutton">Submit</button>
//         </form>
//     </div>
//   )
// }
// export default UpdateUser;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateUser() {
  const { id } = useParams(); // Extract the user ID from the URL
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState(null); // State for error handling
  const navigate = useNavigate();

  // Fetch existing user data when the component mounts
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/user/${id}`)
      .then((response) => {
        const { name, email, address } = response.data;
        setName(name);
        setEmail(email);
        setAddress(address);
      })
      .catch((err) => {
        console.error('Error fetching user data:', err);
        setError('Failed to load user data.');
      });
  }, [id]);

  // Update user function
  const update = (e) => {
    e.preventDefault();
    axios
      .put(`https://backendnewcode.onrender.com/api/user/update/${id}`, { name, email, address })
      .then((result) => {
        console.log('User updated successfully:', result);
        navigate('/'); // Navigate to the homepage after a successful update
      })
      .catch((err) => {
        console.error('Error updating user:', err);
        setError('Failed to update user. Please try again.');
      });
  };

  return (
    <div className="forms">
      <form onSubmit={update}>
        <h1>Update User</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <button type="submit" className="submitbutton">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UpdateUser;








