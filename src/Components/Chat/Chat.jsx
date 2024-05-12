import React from 'react'
import './Chat.css'
import search from "../img/whatsimg.png"

const Chat = () => {
  return (
    <div className="chat">

      <img src={search} alt=" " />
      <div className='chat1'>
      <h3>Download Whatsapp for Window</h3>
      <p>Make calls, share your screen and get a faster. Experience when you download</p>
      {<div className='chat2'>
      <p>the Windows app.</p>
      </div> }
     
      <button className='store'>Get from Microsoft Store</button>
      <div className='end'>
      
        <p><i class="fa-solid fa-lock"></i> Your message are end to end encrypted</p>
      </div>
      </div>
    </div>
  )
}

export default Chat
