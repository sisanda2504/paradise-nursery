import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Welcome to Paradise Nursery</h1>
        <button
          className="get-started-btn"
          onClick={() => {
            setShowProductList(true);
            navigate("/products");
          }}
        >
          Get Started
        </button>
      </header>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing setShowProductList={setShowProductList} />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </div>
  );
}

export default App;
