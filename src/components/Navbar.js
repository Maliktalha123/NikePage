import React from 'react'
import logo from './nike.jpg'
import '../App.css'


function Navbar() {
  return ( 
        <div className='miniNavbar container' >
            <img src={logo} alt='Hell' className='NikeLogo'/>
      <ul>
        <li ><a href='#'>MENU</a></li>
        <li ><a href='#'>LOCATION</a></li>
        <li ><a href='#'>ABOUT</a></li>
        <li ><a href='#'>CONTACT</a></li>
      </ul>
      <button>SUBMIT</button>
      
        </div>
      
  )
}

export default Navbar;
