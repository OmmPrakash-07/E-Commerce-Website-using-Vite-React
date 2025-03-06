import React from 'react';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { Cart } from './Pages/Cart';
import { Product } from './Pages/Product';  // Added import for Product component
import { LoginSignup } from './Pages/LoginSignup';  // Added import for LoginSignup component
import { Footer } from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
import ShopContextProvider from './Context/ShopContext';

function App() {
  return (
    <ShopContextProvider>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
            <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
            <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
            <Route path='/product/:productId' element={<Product />} />  {/* Corrected product route */}
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<LoginSignup />} />  {/* Corrected component name */}
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </ShopContextProvider>
  );
}

export default App;
