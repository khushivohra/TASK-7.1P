import { useState } from "react"
import {Link} from 'react-router-dom'
import {signInWithGooglePopup,createuserdocfromAuth,userDocRef, signinAuthUserWithEmailAndPassword} from './firebase'
import { useNavigate } from "react-router-dom"

import './Login.css'
function Login() {
  const Navigator = useNavigate()
 
  const [contact, setcontact] =useState({
    
    email:'',
    password:''
  })
   const {email,password}= contact
   console.log(contact)
   async function handleClick(event)
  {
    if(email==='' || password===''|| email === null || password === null)
{
    alert("enter the credentialls");
}
else{


    try{
    const response = await signinAuthUserWithEmailAndPassword(email,password)
    console.log(response)
    Navigator('/')
    } 
    catch(error){
    console.log('error in login', error.message)
    }}
  }

   function handlepass(event)
  {
    const value =event.target.value
    const name =event.target.name
    
     setcontact( (prevalue)=>
     {
      return{
        ...prevalue,
        [name]:value

    }
     })

  }
  return (
    <div className="header">
     
      <h3>EMAIL:</h3>
      <input
        name = 'email'
        type='email'
        placeholder='email'
        onChange ={handlepass}

      />
      <br></br>
      <h3>PASSWORD:</h3>
      <input
        name= 'password'
        type='password'
        placeholder='password'
        onChange ={handlepass}
        />
      <br></br>
      <button onClick={handleClick} >
      <Link to= "/">
        Log in
        </Link>
        
      </button>
      <br></br>

      <Link to= '/signup'>
        Signup Instead
      </Link>

    </div>
)}
export default Login