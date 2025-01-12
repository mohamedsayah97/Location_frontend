import React from 'react'
import './Discover.css'

const Discover = () => {
  return (
    <div>
        <section className="hero">
      <div className="hero-content">
        <h1>Discover Your Next Adventure</h1>
        <p>
          Browse our extensive selection of vehicles and find the perfect ride
          for your journey.
        </p>
        <div className="hero-buttons">
          <button className="explore-button">Explore</button>
          <button className="signup-button">Sign Up</button>
        </div>
      </div>
      <div className="hero-image">
        <img
          src="chemin/vers/votre/image.jpg"
          alt="Image d'aventure"
        />
      </div>
    </section>
    </div>
  )
}

export default Discover