import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Navbar from "./components/Navbar";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import Products from "./pages/Products"
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div id="content">
          <Routes>
            <Route path='/' exact element={<Products />} />
            <Route path='/product/:product_id'  element={<ProductDetail />} />
            <Route path='/Signin' element={<Signin />} />
            <Route path='/Signup' element={<Signup />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

