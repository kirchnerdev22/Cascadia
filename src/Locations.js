import React from 'react';
// import BasecampImage from './basecamp.jpg'; // Import image for Basecamp location
// import WharfImage from './wharf.jpg'; // Import image for Wharf location

function Locations() {
  return (
    <div className="about">
      <div className="location-tile">
        <img alt="Basecamp Location" />
        <div className="location-details">
          <h2>Cascadia Basecamp</h2>
          <p>Established: 2018</p>
          <h3>Address:</h3>
          <p>123 Mountain View Drive, Evergreen, WA 98765</p>
          <h3>Hours:</h3>
          <ul>
            <li>Monday to Friday: 6:30 AM - 5:00 PM</li>
            <li>Saturday and Sunday: 7:00 AM - 4:00 PM</li>
          </ul>
          <p className="description">
            Cascadia's Basecamp location is nestled in the heart of the picturesque mountain town of Evergreen, Washington. Established in 2018, this cozy coffee shop and roastery have quickly become a beloved hub for locals and visitors alike. Surrounded by lush evergreen forests and crisp mountain air, Cascadia Basecamp offers a warm and inviting atmosphere for those seeking the perfect cup of coffee.
          </p>
        </div>
      </div>

      <div className="location-tile">
        <img alt="Wharf Location" />
        <div className="location-details">
          <h2>Cascadia Wharf</h2>
          <p>Established: 2018</p>
          <h3>Address:</h3>
          <p>456 Dockside Lane, Seabreeze, WA 98766</p>
          <h3>Hours:</h3>
          <ul>
            <li>Monday to Friday: 7:00 AM - 3:00 PM</li>
            <li>Saturday: 8:00 AM - 2:00 PM</li>
            <li>Closed on Sundays</li>
          </ul>
          <p className="description">
            Cascadia's Wharf location, established in 2018, is a hidden gem nestled in the reclaimed Wharf area of Seabreeze, Washington. Situated along the rugged coastline of the Pacific Ocean, this smaller but charming café offers a unique maritime experience for coffee enthusiasts.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Locations;
