 import React from 'react'
import './Contact.css'

function Contact() {
 
  return (
   
     <>
     <div className="Con__main"> 
      <div className="Contact__Main">
    <div className="content">
      <div className="left-side">
        <div className="address details">
          <i className="fas fa-map-marker-alt"></i>
          <div className="topic">Address</div>
          <div className="text-one text-danger fs-6 text-danger">Lalitpur</div>
          <div className="text-two text-danger fs-6">metropolitan, jhamshikhel-3</div>
        </div>
        <div className="phone details">
          <i className="fas fa-phone-alt"></i>
          <div className="topic">Phone</div>
          <div className="text-one text-danger fs-6">01-54550419</div>
          <div className="text-one text-danger fs-6">+9779841442289</div>
          <div className="text-two text-danger fs-6">+9779840052210</div>
          <div className="text-two text-danger fs-6">+9779849328125</div>
          
        </div>
        <div className="email details">
          <i className="fas fa-envelope"></i>
          <div className="topic">Email</div>
          <div className="text-one text-danger fs-6">shubhdas.111@gmail.com</div>
          <div className="text-two text-danger fs-6">Satwikji@gmail.com</div>
        </div>
      </div>
      <div className="right-side">
        <div className="topic-text">Contact us</div>
        <p>You can send us message from here.</p>
      <form >
        <div className="input-box">
          <input type="text" name="username" autoComplete="off" placeholder="Enter your name" required/>
        </div>
        <div className="input-box">
          <input type="email" name="Email" autoComplete="off" placeholder="Enter your email" required/>
        </div>

        <div className=" input-box  message-box">
        <textarea placeholder="Enter your message" name="message" autoComplete="off" style={{overflow: 'hidden'}} required></textarea>
        </div>

 

        <div className="button">
          <input type="submit" value="Send Now"/>
        </div>
      </form>
    </div>
    </div>
  </div>
  </div>
     </>
  )
}

export default Contact
