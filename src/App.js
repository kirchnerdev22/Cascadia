import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Account from './Account';
import About from './About';
import Basecamp from './Basecamp';
import Cart from './Cart';
import Classes from './Classes';
import Coffee from './Coffee';
import Contact from './Contact';
import Equipment from './Equipment';
import Footer from './Footer';
import Guides from './Guides';
import Header from './Header';
import Homepage from './Homepage';
import Learn from './Learn';
import Locations from './Locations';
import Merch from './Merch';
import Shop from './Shop';
import TheWharf from './TheWharf';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/About" element={<About />} />
            <Route path="/basecamp" element={<Basecamp />} /> {/* Corrected path */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/Classes" element={<Classes />} />
            <Route path="/Coffee" element={<Coffee />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Equipment" element={<Equipment />} />
            <Route path="/Guides" element={<Guides />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/Merch" element={<Merch />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/thewharf" element={<TheWharf />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
