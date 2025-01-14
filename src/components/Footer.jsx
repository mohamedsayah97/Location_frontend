import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container_foot">
          <div className="newsletter">
            <div className="newsletter-text">
              <h3>Subscribe to updates</h3>
              <p>Stay informed about our latest car offerings.</p>
            </div>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Your email here"
              />
              <button type="submit">Subscribe</button>
            </form>
            <p className="privacy">By subscribing, you accept our Privacy Policy.</p>
          </div>

          <div className="footer-columns">
            <div className="column">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>

            <div className="column">
              <h4>Follow Us</h4>
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
              </ul>
            </div>

            <div className="column">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">User Guides</a></li>
              </ul>
            </div>

            <div className="column">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>

            <div className="column">
              <h4>Company Info</h4>
              <ul>
                <li><a href="#">Careers at Company</a></li>
                <li><a href="#">Latest News Here</a></li>
              </ul>
            </div>
          </div>

          <div id='ligne'>
            <div className="copyright">
              <p> 2024 Relume. All rights reserved. </p>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookies Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;