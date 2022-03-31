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
    //console.log(id);
    const handleNameChange = (e) =>{
        let updateName = e.target.value;
        let updateUser = {name: updateName,email: user.email};
        setUser(updateUser);

    }
    const handleEmailChange = (e) =>{
        let updateEmail = e.target.value;
        let updateUser = {name: user.name,email: updateEmail};
        setUser(updateUser);

    }
    const handleSubmit = e =>{

        fetch(`http://localhost:5000/users/${id}`,{
            method: 'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
            
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount>0){
                alert('Your User is Updated');
            }
        })
        setUser({});

        e.preventDefault();

    }

    return (
        <div>
            <h2>Update User</h2>
           
            <form action="" onSubmit={handleSubmit}>
                <input type="text" onChange={handleNameChange} value={user.name || ''} />
                <input type="email" onChange={handleEmailChange} value={user.email || ''}  name="" id="" />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateUser;