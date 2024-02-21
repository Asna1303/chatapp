import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
      <input type="text" placeholder='Find a user'/>
      </div>
      <div className="userChat">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI7W2FEkF8g9XbhOrCVezIm6_e1n_GVCFCNpHom2Sh9Q&s" alt="" />
        <div className="userChatInfo">
        <span>ammu</span>
        </div>
      </div>
    </div>
  )
}

export default Search
