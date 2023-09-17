import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components from react-router-dom
import Header from './Header';
import Footer from './Footer';
import Homepage from './Homepage';
import Shop from './Shop';
import Learn from './Learn';
import Locations from './Locations';
import Account from './Account'; // Import individual components from 'account'
import Cart from './Cart'; // Import CartPage

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Routes> {/* Use the Routes element to wrap Route components */}
            <Route path="/" element={<Homepage />} /> {/* Set the homepage as the initial page */}
            <Route path="/shop" element={<Shop />} /> {/* Add route for Shop page */}
            <Route path="/learn" element={<Learn />} /> {/* Add route for Learn page */}
            <Route path="/locations" element={<Locations />} /> {/* Add route for Locations page */}
            <Route path="/Account" element={<Account />} /> {/* Add route for Account page */}
            <Route path="/cart" element={<Cart />} /> {/* Add route for Cart page */}
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
