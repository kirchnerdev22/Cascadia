import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className="App-header">
      <div className="left-links">
        <div className="header-link">
        <Link to="/" className="link-title">
          Home
        </Link>
        </div>
        <div className="header-link">
          <Link to="/shop" className='link-title'>Shop</Link>
          <div className="dropdown-content">
            <Link to="/Coffee" className='link-title'>Coffee</Link>
            <Link to="/equipment" className='link-title'>Brewing Equipment</Link>
            <Link to="/merch" className='link-title'>Merch</Link>
          </div>
        </div>
        <div className="header-link">
          <Link to="/learn" className='link-title'>Learn</Link>
          <div className="dropdown-content">
            <Link to="/about" className='link-title'>About Us</Link>
            <Link to="/Guides" className='link-title'>Brewing Guides</Link>
            <Link to="/classes" className='link-title'>Coffee Classes</Link>
            <Link to="/contact" className='link-title'>Contact Us</Link>
          </div>
        </div>
        <div className="header-link">
          <Link to="/locations" className='link-title'>Locations</Link>
          <div className="dropdown-content">
            <Link to="/Basecamp" className='link-title'>Basecamp</Link>
            <Link to="/thewharf" className='link-title'>The Wharf</Link>
          </div>
        </div>
      </div>

      <h1 className="name-title">
        <Link to="/" className="main-title-link">
          Cascadia
        </Link>
      </h1>

      <div className="right-links">
        <div className="header-link">
        <Link to="/account" className='link-title'>Account</Link>
        </div>
        <div className='header-link'>
        <Link to="/cart" className="link-title">
            <FontAwesomeIcon icon={faShoppingCart} /> Cart {/* Shopping Cart Icon */}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
