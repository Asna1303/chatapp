import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
     <span className="logo">Placeme Chat</span>
     <div className='user'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI7W2FEkF8g9XbhOrCVezIm6_e1n_GVCFCNpHom2Sh9Q&s" alt="" />
      <span>john</span>
      <button>logout</button>
     </div>
    </div>
  )
}

export default Navbar
