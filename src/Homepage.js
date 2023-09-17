import React from 'react';
import './Homepage.css'; // Import your external CSS file


function HomePage() {
  return (
    <div className="home-page">
      
      
      <header className="hero">
        <h1>Welcome to Cascadia Coffee Roasters</h1>
        <p>Your Perfect Coffee Experience in the Heart of the Pacific Northwest</p>
      </header>

      <section className="about-section">
        <h2>About Us</h2>
        <p>
          Nestled in the picturesque town on the Washington Coast, Cascadia Coffee Roasters brings you the finest coffee
          beans from around the world. With a backdrop of Olympic National Park and the majestic Mt. Rainier in view,
          our cozy cafe is the perfect place to relax and savor the beauty of the Pacific Northwest.
        </p>
        <p>
          Located just 1.5 hours from Seattle, our small mountain-side town offers a tranquil escape from the hustle and
          bustle of the city, making it an ideal destination for coffee enthusiasts and nature lovers alike.
        </p>
      </section>

      <section className="menu-section">
        <h2>Our Menu</h2>
        <p>Explore our diverse menu of handcrafted coffee, artisanal pastries, and more. Whether you're a coffee aficionado or simply looking for a delightful treat, we have something for everyone.</p>
        {/* You can add menu items and descriptions here */}
      </section>

      <section className="visit-section">
        <h2>Visit Us</h2>
        <p>Plan your visit to Cascadia Coffee Roasters and immerse yourself in the beauty of the Pacific Northwest. Experience the aroma of freshly roasted coffee beans and the warmth of our welcoming cafe.</p>
        <p>We are located at:</p>
        <address>
          123 Coffee Lane<br />
          Mountainside Town, WA 98765<br />
        </address>
        <p>Hours of Operation:</p>
        <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
        <p>Saturday - Sunday: 8:00 AM - 5:00 PM</p>
      </section>

      <section className="instagram-section">
        <h2>Follow Us on Instagram</h2>
        {/* You can add an Instagram feed or links here */}
      </section>

      
    </div>
  );
}

export default HomePage;
