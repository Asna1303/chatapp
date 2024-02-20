import React from 'react'
import Add from "../img/addavatar.png"

const Login =() =>{
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">Placeme Chat</span>
            <span className="title">Register</span>
            <form>

<input type="email" placeholder=" email"/>
<input type="password" placeholder="password "/>
<input style={{display:"none"}} type="file" id="file"/>

<button>Sign In</button>
            </form>
            <p>Do you have an account? Login</p>
        </div>
    </div>
  )
}

export default Login