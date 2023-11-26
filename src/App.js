import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Product from "./Products/Product.jsx";
import  { UserProvider } from "./Context.jsx";
import Cart from "./Cart";
import Home from "./Home";
import Confirmed from "./Confirmed.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap'


function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/confirmed" element={<Confirmed />} />

          </Routes>
        </div>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
