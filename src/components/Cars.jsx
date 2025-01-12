import React from 'react'
import './Cars.css'

const Cars = () => {
  return (
    <div>
      <section className="cars">
      <h2>Cars</h2>
      <p>Explore our diverse range of rental vehicles today!</p>
      <div className="view-all">
        <a href="#">View all</a>
      </div>
      <div className="car-grid">
        <div className="car">
          <img src="placeholder.png" alt="Sedan Model" />
          <h3>Sedan Model</h3>
          <p className="car-type">Standard</p>
          <p className="price">$55</p>
          <button>Add to cart</button>
        </div>
        <div className="car">
          <img src="placeholder.png" alt="SUV Model" />
          <h3>SUV Model</h3>
          <p className="car-type">Luxury</p>
          <p className="price">$55</p>
          <button>Add to cart</button>
        </div>
        <div className="car">
          <img src="placeholder.png" alt="Convertible Model" />
          <h3>Convertible Model</h3>
          <p className="car-type">Sport</p>
          <p className="price">$55</p>
          <button>Add to cart</button>
        </div>
        <div className="car">
          <img src="placeholder.png" alt="Truck Model" />
          <h3>Truck Model</h3>
          <p className="car-type">Utility</p>
          <p className="price">$55</p>
          <button>Add to cart</button>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Cars
