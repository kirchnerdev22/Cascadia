import React from 'react';
import CoffeeBeans from './CoffeeBean'; // Import the coffee beans data
import equipmentData from './EquipmentGear';
import './Homepage.css';
import { Link } from 'react-router-dom';

function HomePage() {
  // Select the first three coffee beans for display on the homepage
  const coffeeBeansForHomepage = CoffeeBeans.slice(0, 3);
  const equipmentForHomepage = equipmentData.slice(0, 3);


  return (
    <div>
      <div className="home-page">
        <h1 className="main-title">The Coast is calling.</h1>
        <p className="sub-title">Roasted locally since 2018.</p>

        <div className="navigation-links">
          <Link to="/shop">Shop Now</Link>
          <Link to="/locations">Visit Our Locations</Link>
        </div>
      </div>

      <div className="grid-area">
        <div className="tile-container">
          <div className="large-tile a">
            <Link to="/coffee">Shop our coffee</Link>
          </div>
          <div className="medium-tile a">
            <Link to="/classes">Come learn the process</Link>
          </div>
          <div className="small-tile-one a">
            <Link to="/merch">Merch</Link>
          </div>
          <div className="small-tile-two a">
            <Link to="/equipment">Equipment</Link>
          </div>
        </div>
      </div>

      <div className='coffee-display'>
        {/* Render three divs for the first three coffee beans */}
        {coffeeBeansForHomepage.map((bean) => (
          <div className="coffee-tile" key={bean.id}>
            <h2>{bean.name}</h2>
          </div>
        ))}
      </div>

      <div className='who-we-are'>
        <h2>Who we are</h2>
        <p>Cascadia is a zero-waste coffee roaster and cafe on the coast of Washington State. We pride ourselves on creating welcoming cafe spaces, roasting exceptional coffee, and inspiring learning. Our mission is to expand the number of people who share our belief that the coffee experience is an unparalleled adventure from seed to cup through doing good for each person we meet along the way.
        </p>
        <div className='navigation-links'>
          <Link to="/About">Learn more</Link>
        </div>
      </div>

      <div className='equipment-display'>
        {/* Render three divs for the first three equipment items */}
        {equipmentForHomepage.map((item) => (
          <div className="equipment-tile" key={item.id}>
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>

    </div>
  );
}

export default HomePage;
