import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="App-header">
      <div className="left-links">
        <div className="header-link">
        <Link to="/" className="link-title">
          home
        </Link>
        </div>
        <div className="header-link">
          <Link to="/shop" className='link-title'>shop</Link>
          <div className="dropdown-content">
            <Link to="/shop/products" className='link-title'>Products</Link>
            <Link to="/shop/categories" className='link-title'>Categories</Link>
          </div>
        </div>
        <div className="header-link">
          <Link to="/learn" className='link-title'>learn</Link>
          <div className="dropdown-content">
            <Link to="/learn/articles" className='link-title'>Articles</Link>
            <Link to="/learn/tutorials" className='link-title'>Tutorials</Link>
          </div>
        </div>
        <div className="header-link">
          <Link to="/locations" className='link-title'>locations</Link>
          <div className="dropdown-content">
            <Link to="/locations/store1" className='link-title'>Store 1</Link>
            <Link to="/locations/store2" className='link-title'>Store 2</Link>
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
        <Link to="/account" className='link-title'>account</Link>
        </div>
        <div className='header-link'>
        <Link to="/cart" className="link-title">
          cart
        </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
