import React from 'react';
import "./Footer.css"
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';


function Footer() {
  return (
    <footer className="App-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Cascadia Coffee</h3>
        </div>

        <div className="footer-section">
          <h3>Menu</h3>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Subscribe</li>
            <li>Partner</li>
            <li>Contact Us</li>
            <li>Join The Team</li>
            <li>Return Policy & FAQ</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Locations</h3>
          <ul>
            <li>Basecamp</li>
            <li>The Wharf</li>
          </ul>
        </div>

        <div className="footer-section">

          <h3>Connect with Us</h3>

          <ul className='social-links'>
            <li>
              <a href="https://www.facebook.com/">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/">
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Cascadia Coffee Roasters</p>
      </div>
    </footer>
  );
}

export default Footer;
