import React, { useState } from 'react'
import './login.css'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { assets } from '../../assets/assets';
const Login = ({setShowlogin}) => {
    let[currstate,setCurrstate]= useState("Login");

    const showtoast=()=>{
        toast.success("You are successfully login");
    }
    const signinmsg=()=>{
        toast.success("Account Created Successfully!")
    }
  return (
    <div className='login'>
        <form className='login-container'>
            <div className="login-title">
                <h2>{currstate}</h2>
                <img  onClick={()=>setShowlogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-inputs">
                {
                currstate==='Login'
                ? 
                <></> 
                :
                <input type="text" placeholder='Your Name' required/>
                }
                <input type="email" placeholder='Your Mail' required />
                <input type="password" placeholder='Your Password' required />
            </div>
            <button onClick={currstate==='Login'?showtoast:signinmsg}>{currstate==='SignUp'?'Create Account':'Login'}</button>
            <div className="login-condition">
                <input type="checkbox" required />
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            {
                currstate==='Login'
                ?
                <p>Create a new account?<span onClick={()=>setCurrstate('SignUp')}>Click here</span></p>
                :
                <p>Already have an account?<span onClick={()=>setCurrstate('Login')}>Login here</span></p>
            }
        </form>
            <ToastContainer/>
    </div>
  )
}

export default Login