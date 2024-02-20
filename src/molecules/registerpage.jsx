import React from 'react'

const Registerpage =() =>{
  return (
    <div className='form-container'>
        <div className='formWrapper'>
            <span className="logo">Placeme Chat</span>
            <span className="title">Register</span>
            <form>
<input type="text" placeholder="display name"/>
<input type="email" placeholder=" email"/>
<input type="password" placeholder="password "/>
<input type="file"/>
<button>Sign Up</button>
            </form>
            <p>Do you have an account? Login</p>
        </div>
    </div>
  )
}

export default Registerpage