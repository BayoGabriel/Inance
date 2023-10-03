import React from 'react'
import "../Assets/styles/Navbar.css"
const Navbar = () => {
  return (
    <div>
       <nav className="nav">
        <div className="logo">
            INANCE
        </div>
        <div className="links">
            <ul id='navbarr'>
                <li><a className='active' href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
       </nav>
    </div>
  )
}

export default Navbar