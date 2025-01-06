import React, {useState,useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

const User=()=>{
const[user, setUser]=useState([]);

useEffect(()=>{
    axios.get('https://backendnewcode.onrender.com/api/user/fetch')
    .then(result=>{
        // console.log(result.data)
        setUser(result.data.users) 
    })
    .catch(err=>{
        console.log(err)
    })
}, []);

const deleteuser=(id)=>{
    axios.delete(`https://backendnewcode.onrender.com/api/user/deleted/${id}`)
    .then(result=>{
        console.log(result)
    })
    .catch(err=>{console.log(err)})
}
    return(
        <div>
            <h1>User</h1>
            <Link to="/create">Create User</Link>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Actions</th>
                </tr>
                {
                    user.map((users)=>(
                         <tr>
                            <td>{users.name}</td>
                            <td>{users.email}</td>
                            <td>{users.address}</td>
                            <td>
                                <Link to={`/Update/${users._id}`}>Update</Link>
                                <button onClick={(e)=>deleteuser(users._id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}

export default User;