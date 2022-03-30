import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const UpdateUser = () => {
    const {id} =useParams();
    const [user,setUser]=useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/users/${id}`)
        .then(res => res.json())
        .then(data => {
            setUser(data);
        })
    },[])
    console.log(id);
    return (
        <div>
            <h2>Update User</h2>
            <h3>{user.name} : {user.email}</h3>
        </div>
    );
};

export default UpdateUser;