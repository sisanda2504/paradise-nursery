import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import "./App.css";

function App() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <header className="app-header">
        <h1>Welcome to Paradise Nursery</h1>
        <button
          className="get-started-btn"
          onClick={() => navigate("/products")}
        >
          Get Started
        </button>
      </header>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </div>
  );
}

export default App;
