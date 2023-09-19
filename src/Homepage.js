import React from 'react';
import './Homepage.css'; // Import your external CSS file
import { Link } from 'react-router-dom'; // Import Link from react-router-dom (assuming you're using React Router)

function HomePage() {
  return (
    <div className="home-page">
      <h1 className="main-title">The Coast is calling.</h1>
      <p className="sub-title">Roasted locally since 2018.</p>

      <div className="navigation-links">
        <Link to="/shop">Shop</Link>
        <Link to="/locations">Locations</Link>
      </div>
    </div>
  );
}

export default HomePage;

