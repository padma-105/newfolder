import React from "react";
import { Link } from 'react-router-dom';
import './login.css'
const Login = () => {
    return(
        <div className ="main-container">
          <form action="">
            <h2 style={{textAlign:"center"}}>login</h2>
            <div className= "input-box">
                <input type="text" name="username" placeholder="Enter Your Name &#128100;" required/>
            </div>
            <div className= "input-box">
                <input type="email" name="email"  placeholder="Enter Your Mail &#128231;" required/>
            </div>
            <div className= "input-box">
                <input type="password" name="password"  placeholder="Enter Your Password &#128274;" required/>
            </div>
            <div className= "remember-box">
               <label><input type="checkbox" required/>remember me</label> 
               <a href="#">Forgot Password</a>
            </div>
           <button type="submit">login</button>
            <div className="register">
                <p>Don't have an account ? : <Link to="/register">registerer</Link></p>
            </div>
          </form>
        </div>
    )
} 

export default Login