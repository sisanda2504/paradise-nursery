import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";

const Navbar = () => {
  const items = useSelector((state) => state.cart.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-logo" aria-hidden="true">🌿</span>
        <span>Paradise Nursery</span>
      </div>
      <div className="navbar-links">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Home
        </NavLink>
        <NavLink to="/products" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Plants
        </NavLink>
        <NavLink to="/cart" className={({ isActive }) => (isActive ? "nav-link cart-link active" : "nav-link cart-link")}>
          <span className="cart-icon" aria-hidden="true">🛒</span>
          Cart
          <span className="cart-badge">{totalItems}</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
