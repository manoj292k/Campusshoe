import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Mens from './component/Mens';
import Womens from './component/Womens';
import Kids from './component/Kids';
import Footer from './component/Footer';
import Cart from './component/Cart';


function App() {
  const [cartItems, setCartItems] = useState([]);

  const clearCart = (itemId) => {
    // Implement logic to remove item from the cart
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          {/* Set the home page as the default route */}
          <Route path="/Campusshoe" element={<Home />} />
          <Route path="/Mens" element={<Mens />} />
          <Route path="/Womens" element={<Womens />} />
          <Route path="/Kids" element={<Kids addToCart={addToCart} />} />
          <Route path="/Cart" element={<Cart cartItems={cartItems} clearCart={clearCart} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
