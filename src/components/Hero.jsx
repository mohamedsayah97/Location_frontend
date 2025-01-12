import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <div id='hero_container'>
      <div className="container">
        <h2 className="main-heading">Discover Your Next Adventure with Our Cars</h2>
        <p className="sub-text">
          Welcome to the ultimate car booking platform where your journey begins. Explore a diverse range of vehicles tailored to fit your needs and make every trip memorable.
        </p>
        <div className="button-group">
          <button className="book-button">Book</button>
          <button className="learn-more-button">Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default Hero