import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <header>
      <div className="navbar">
        <div className="logo">
          <a href="#">Logo</a>
        </div>
        <ul className="links">
          <li><a href="home">Home Page</a></li>
          <li><a href="cars">Our Cars</a></li>
          <li><a href="book">Book Now</a></li>
          <li><a href="info">More Info</a></li>
        </ul>
        <a href="#" className="action_btn">Join</a>
        </div>
      </header> 
    </div>
  )
}

export default Navbar