import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI7W2FEkF8g9XbhOrCVezIm6_e1n_GVCFCNpHom2Sh9Q&s" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent"></div>
      <p>Hello</p>
      {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI7W2FEkF8g9XbhOrCVezIm6_e1n_GVCFCNpHom2Sh9Q&s" alt="" /> */}
    </div>
  )
}

export default Message
