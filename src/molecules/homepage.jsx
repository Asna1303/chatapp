import React from 'react'
import Sidebar from '../components/Sidebar'
import Chatting from '../components/Chatting'

const  Home =() =>{
  return (
    <div className='home'>
        <div className="container">
            <Sidebar/>
            <Chatting/>
          
        </div>
        </div>
  )
}

export default Home