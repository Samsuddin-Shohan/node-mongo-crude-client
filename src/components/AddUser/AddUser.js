import React from 'react';
import { useRef } from 'react';

const AddUser = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const handleSubmit = (e)=>{
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const newUser = {name,email};
        console.log(newUser);
        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(newUser)
        })
        .then((res)=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('user added to the db');
                e.target.reset();
            }
            
        })
        .catch(err =>{
            console.log(err.message);
        })
        e.target.value = '';
       
        e.preventDefault();
    }
    return (
        <div>
            <h2>Please add user Add User</h2>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder='name' ref={nameRef}  />
            <input type="text" placeholder='email' ref={emailRef}/>
            <input type="submit" value="add" />
            
            </form>
        </div>
    );
};

export default AddUser;