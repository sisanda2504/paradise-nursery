import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../redux/CartSlice";
import PlantIcon from "./PlantIcon";
import "./CartItem.css";

const CartItem = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [checkoutMessage, setCheckoutMessage] = useState("");

  const getPlantPrice = (item) => {
    if (typeof item.price === "number") return item.price;
    return Number(String(item.price).replace(/[^0-9.]/g, "")) || 0;
  };

  const calculateTotalCost = (item) => getPlantPrice(item) * item.quantity;

  const calculateTotalAmount = () =>
    cartItems.reduce((sum, item) => sum + calculateTotalCost(item), 0);

  const handleIncrement = (itemId) => {
    dispatch(incrementQuantity(itemId));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementQuantity(itemId));
  };

  const handleDelete = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleContinueShopping = () => {
    navigate("/products");
  };

  const handleCheckout = () => {
    setCheckoutMessage("Coming Soon");
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = calculateTotalAmount();

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h1 className="cart-heading">Your Shopping Cart</h1>
        <p className="empty-cart">
          Your cart is empty. Head over to the plant shop to find your next
          favorite houseplant!
        </p>
        <button className="continue-btn" onClick={handleContinueShopping}>
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1 className="cart-heading">Your Shopping Cart</h1>
      <p className="cart-summary">
        {totalItems} item{totalItems !== 1 ? "s" : ""} in cart &middot; Total: R
        {totalAmount.toFixed(2)}
      </p>

      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="cart-item-thumb">
              <PlantIcon {...item.image} />
            </div>
            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p className="unit-price">Unit price: R{getPlantPrice(item).toFixed(2)}</p>
              <p className="line-total">
                Total cost: R{calculateTotalCost(item).toFixed(2)}
              </p>
            </div>
            <div className="cart-item-controls">
              <div className="quantity-controls">
                <button
                  className="qty-btn"
                  onClick={() => handleDecrement(item.id)}
                  aria-label={`Decrease quantity of ${item.name}`}
                >
                  -
                </button>
                <span className="qty-value">{item.quantity}</span>
                <button
                  className="qty-btn"
                  onClick={() => handleIncrement(item.id)}
                  aria-label={`Increase quantity of ${item.name}`}
                >
                  +
                </button>
              </div>
              <button
                className="delete-btn"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-total-row">
        <span>Total cart amount:</span>
        <span className="cart-total-value">R{totalAmount.toFixed(2)}</span>
      </div>

      {checkoutMessage && <p className="checkout-message">{checkoutMessage}</p>}

      <div className="cart-actions">
        <button className="continue-btn" onClick={handleContinueShopping}>
          Continue Shopping
        </button>
        <button className="checkout-btn" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;
