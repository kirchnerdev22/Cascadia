import React from 'react';
// import BasecampImage from './basecamp.jpg'; // Import image for Basecamp location
// import RoasteryImage from './roastery.jpg'; // Import image for the roastery
// import CoffeeClassImage from './coffee-class.jpg'; // Import image for coffee classes

function Basecamp() {
  return (
    <div className="about">
      <div className="location-tile">
        <img  alt="Basecamp Location" />
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
            Cascadia's Basecamp location is not just a coffee shop; it's where the magic happens. Established in 2018, this cozy coffee shop and roastery are situated in the heart of the picturesque mountain town of Evergreen, Washington.

            Our on-site roastery, pictured below, is where our talented roasters carefully roast our coffee beans to perfection. The aroma of freshly roasted coffee fills the air, creating an enticing and aromatic experience for our visitors.

            ![Roastery](RoasteryImage)

            In addition to serving freshly brewed coffee, our Basecamp location is also where we host coffee classes and workshops for those eager to explore the art of coffee. Whether you're a coffee enthusiast looking to deepen your knowledge or a beginner seeking to understand the complexities of coffee, our experienced baristas and educators are here to guide you on a coffee journey like no other.

            ![Coffee Classes](CoffeeClassImage)

            The interior of the café is adorned with reclaimed wood and rustic decor, reflecting the natural beauty of the Cascade Range that surrounds the town. Our menu features an array of specialty coffee beverages, from classic espresso drinks to unique creations inspired by the local landscape. We also offer a delectable selection of pastries sourced from local bakeries.

            Whether you're fueling up for a day of hiking, catching up with friends, or embarking on a coffee adventure, Cascadia Basecamp welcomes you to experience the best of Washington's mountain culture and coffee culture in one delightful place.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Basecamp;
