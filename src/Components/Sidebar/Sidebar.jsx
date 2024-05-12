import React from 'react'
import './Sidebar.css'
import Userprofile from './Userprofile'
import sachin1 from '../img/14.png'

const Sidebar = ({ setIstrue, setParticularuserdetails }) => {
  const userfunction = (sss) => {
    setIstrue(true)
    setParticularuserdetails(sss)
  }





return (
  <div className="sidebar">
    <div class="up">
      <img src={sachin1} alt=" " />
      <div className='icon'>

      <i class="fa-solid fa-phone"></i>
      <i class="fa-solid fa-user-group"></i>
      <i class="fa-solid fa-comments"></i>
      <i class="fa-solid fa-ellipsis-vertical"></i>
        


      </div>

    </div>
    {
      Userprofile.map((ddd) =>
        <div className='chats' onClick={() => userfunction(ddd)}>
          <img src={ddd.image} alt="" />
          <div className='ChatInfo'>
            <span>{ddd.username}</span>
            <p>{ddd.message}</p>
          </div>
         
        </div>
      )
    }
    
  </div>

)

}
export default Sidebar
