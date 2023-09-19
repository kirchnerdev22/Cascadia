import React from 'react';
// import WharfImage from './wharf.jpg'; // Import image for Wharf location
// import LocalVendorsImage from './local-vendors.jpg'; // Import image for local vendors

function TheWharf() {
  return (
    <div className="wharf-page">
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
          Cascadia's Wharf location, established in 2018, is a hidden gem nestled in the reclaimed Wharf area of Seabreeze, Washington. Situated along the rugged coastline of the Pacific Ocean, this charming café offers a unique maritime experience for coffee enthusiasts.

          ![Wharf Location](WharfImage)

          The interior of Cascadia Wharf is designed to capture the essence of the coastal surroundings, with nautical-inspired decor and reclaimed wood that reflects the area's maritime heritage. Large windows provide breathtaking views of the ocean, allowing you to enjoy a cup of coffee while listening to the soothing sound of waves crashing against the docks.

          Here at Cascadia Wharf, we continue our commitment to quality coffee by roasting beans on-site. Our menu features a selection of signature coffee drinks, as well as refreshing iced beverages perfect for warm coastal days. Whether you're a local or a tourist exploring the nearby boardwalk, our café is a cozy haven where you can savor the flavors of Washington's coast.

          ![Local Vendors](LocalVendorsImage)

          While you're here, don't forget to explore the vibrant community of local vendors in the Wharf area. From artisanal craft shops to seafood restaurants serving the freshest catch, there's something for everyone to discover. We're proud to be part of this lively neighborhood, and we invite you to explore all that Seabreeze's Wharf has to offer.

          Come visit Cascadia Wharf to enjoy the serene beauty of the Pacific Ocean and experience the warmth of our coastal café. It's a must-visit destination for coffee aficionados and seaside adventurers alike.
        </p>
      </div>
    </div>
  );
}

export default TheWharf;
