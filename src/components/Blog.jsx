import React from 'react'
import './Blog.css'

const Blog = () => {
  return (
    <div>
      <section className="insights">
      <h2>Explore Our Latest Insights</h2>
      <p>Discover tips for car rentals and maintenance.</p>
      <div className="insights-container">
        <article className="insight-card">
          <div className="card-image">
            <img src="placeholder.jpg" alt="Essential Car Rental Tips" />
          </div>
          <div className="card-content">
            <span className="card-category">Travel</span>
            <span className="card-time">5 min read</span>
            <h3>Essential Car Rental Tips</h3>
            <p>Learn how to choose the right rental car for your trip.</p>
            <a href="#" className="read-more">Read more </a>
          </div>
        </article>
        <article className="insight-card">
          <div className="card-image">
            <img src="placeholder.jpg" alt="Keeping Your Vehicle in Shape" />
          </div>
          <div className="card-content">
            <span className="card-category">Maintenance</span>
            <span className="card-time">5 min read</span>
            <h3>Keeping Your Vehicle in Shape</h3>
            <p>Simple maintenance tips to extend your vehicle's lifespan.</p>
            <a href="#" className="read-more">Read more</a>
          </div>
        </article>
      </div>
      <a href="#" className="view-all">View All</a>
    </section>
    </div>
  )
}

export default Blog
