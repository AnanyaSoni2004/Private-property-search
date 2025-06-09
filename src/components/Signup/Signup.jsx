import React from 'react'
import "./Signup.css"
import { IoPersonAddSharp } from "react-icons/io5";
function Signup() {
  return (
    <div id="signup"
      onSubmit={(e)=>{
      alert("SignUp Successfully.....")
      setaddListing(true)}}>
        <form action="">
        <span className='signuptitle'>
            Sign Up Page
        </span>
            <div className="list">
            <label htmlFor="name">UserName</label>
            <input type="text" id="name" required/>
            </div>
            <div className="list">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" required/>
            </div>
            <div className="list">
            <label htmlFor="pass">Password</label>
            <input type="password" id="pass"/>
            </div>
            <div className="list">
            <label htmlFor="conpass1">Confirm Password</label>
            <input type="text" id="conpass1" required/>
            </div>
            <button id="signupbtn">SignUp<IoPersonAddSharp /></button>
        </form>

    </div>
  )
}

export default Signup