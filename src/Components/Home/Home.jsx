import React, { useState } from 'react'
import './Home.css'
import Sidebar from '../Sidebar/Sidebar'
import Chat from '../Chat/Chat'
import Message from '../Message/Message'

const Home = () => {
  const[istrue,setIstrue] = useState(false);
  const[particularuserdetails,setParticularuserdetails]= useState([])
  console.log(particularuserdetails);

  return (
    <div className='home'>
       
       <div className='container'>
      <Sidebar setIstrue={setIstrue} setParticularuserdetails={setParticularuserdetails}></Sidebar>
      {
        istrue ?
        <Message particularuserdetails={particularuserdetails} setIstrue={setIstrue}></Message>
      :
      <Chat></Chat>
}
      </div>
      </div>
  
  )
}

export default Home
