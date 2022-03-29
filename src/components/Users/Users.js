import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Users = () => {
    const [users,setUsers]=useState([]);
    const handleDelete = (id)=>{
        const proceed = window.confirm('Do you want to delete?');
        if(proceed){
            const url =  `http://localhost:5000/users/${id}`
        fetch(url,{
            method: 'DELETE'
        })
        .then(res =>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert('delete successfullu');
                const remainingUsers = users.filter(user => user._id!==id);
                setUsers(remainingUsers);
            }
        })
        }

    }
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res=>res.json())
        .then(data=>{
            setUsers(data);
        })
    },[])
    return (
        <div>
            <h2>Users Available {users.length}</h2>
            <ul>
               {
                   users.map(user=><li key={user._id}>{user.name} : {user.email} <button>Update</button> <button onClick={()=>handleDelete(user._id)}>X</button>  </li>)
               }
            </ul>
        </div>
    );
};

export default Users;