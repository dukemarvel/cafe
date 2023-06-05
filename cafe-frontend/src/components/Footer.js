import React from 'react';
import LocationSearch from './LocationSearch';
import twitter from '../images/twitter.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-column">
        <h3>Quick Links</h3>
        <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#locate">Locate Us</a></li>
        {/* Add more links as needed */}
        </ul>
      </div>
      <div className="footer-column">
        <h3>Locations</h3>
        <LocationSearch />
        <p>Address in text</p>
        <p>Phone number</p>
      </div>
      <div className="footer-column">
        <h3>We are Socials</h3>
        <div className="social-icons">
          <img src={twitter} alt="Icon 1" />
          <img src={facebook} alt="Icon 2" />
          <img src={instagram} alt="Icon 3" />
        </div>
        <button>Leave us a feedback</button>
      </div>
    </footer>
  );
};

export default Footer;
