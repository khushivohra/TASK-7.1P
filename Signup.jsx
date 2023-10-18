import Input from "./input";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { createAuthUserWithEmailAndPassword, createuserdocfromAuth } from './firebase';

function Signup() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const [contact, setcontact] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = contact;
  

  async function handleClick(event) {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createuserdocfromAuth(user, { displayName });
      console.log(user);

      navigate('/login');
      
    } catch (error) {
      console.log('Error in creation', error.message);
    }
  }

  function handlepass(event) {
    const value = event.target.value;
    const name = event.target.name;

    setcontact((prevalue) => {
      return {
        ...prevalue,
        [name]: value
      };
    });
  }

  return (
    <div className="header">
       
      <h3 className="qu">Name</h3>
      <Input id = "input"
        name='displayName'
        type='text'
        placeholder='Name'
        onChange={handlepass}
       
      />
       
      <br></br>
      <h3>Email</h3>
      <Input id = "mail"
        name='email'
        type='email'
        placeholder='Email'
        onChange={handlepass}
      />
      <br></br>
      <h3>Password</h3>
      <Input id = "pass"
        name='password'
        type='password'
        placeholder='Password'
        onChange={handlepass}
      />
      <br></br>
      <h3>Confirm Password</h3>
      <Input id = "confirm"
        name='confirmPassword'
        type='password'
        placeholder='Confirm Password'
        onChange={handlepass}
      />
      <br></br>
      <button id = "button1"
      onClick={handleClick}><Link to='/login'>Signup </Link></button>
      <br></br>
      <br></br>
      <button><Link to='/login'>Login</Link></button>
    </div>
  );
}

export default Signup;