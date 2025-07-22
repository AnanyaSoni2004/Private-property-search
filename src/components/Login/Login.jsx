import React,{useContext} from 'react'
import './Login.css'
import { IoLogInOutline } from "react-icons/io5";
function Login() {
  return (
    <div id="login"
    onSubmit={(e)=>{
      alert("Login Successfully.....")
    }}
    >
        <form action="">
        <span className='logintitle'>
            Login Page
        </span>
            <div className="list">
            <label htmlFor="email">Email</label>
            <input type="text" id="email"/>
            </div>
            <div className="list">
            <label htmlFor="pass">Password</label>
            <input type="password" id="pass"/>
            </div>
            <button id="loginbutton">Login<IoLogInOutline />
            </button>
        </form>
      </div>
    
  )
}

export default Login