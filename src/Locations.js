import React from 'react';

// Location component for the flagship location
function FlagshipLocation() {
  return (
    <div className="location">
      <h2>Flagship Location</h2>
      <p>
        Nestled in the picturesque town on the Washington Coast, Cascadia Coffee Roasters brings you the finest coffee
        beans from around the world. With a backdrop of Olympic National Park and the majestic Mt. Rainier in view,
        our cozy cafe is the perfect place to relax and savor the beauty of the Pacific Northwest.
      </p>
      <p>
        Located just 1.5 hours from Seattle, our small mountain-side town offers a tranquil escape from the hustle and
        bustle of the city, making it an ideal destination for coffee enthusiasts and nature lovers alike.
      </p>
      <address>
        Address: 123 Main St, Seattle, WA 98101
      </address>
    </div>
  );
}


// Location component for the smaller market location
function MarketLocation() {
  return (
    <div className="location">
      <h2>Market Location</h2>
      <p>
        Visit our cozy coffee corner nestled in the local fish and produce market on the picturesque bay. Enjoy the aroma of freshly brewed coffee while exploring the market's offerings.
      </p>
      <address>
        Address: 456 Dockside Ave, Bayville, WA 98002
      </address>
    </div>
  );
}

// Locations page
function LocationsPage() {
  return (
    <div className="locations-page">
      <h1>Our Locations</h1>
      <div className="locations-container">
        <FlagshipLocation />
        <MarketLocation />
      </div>
    </div>
  );
}

export default LocationsPage;
