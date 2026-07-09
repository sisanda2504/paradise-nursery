import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import PlantIcon from "./PlantIcon";
import plantsData from "./plantsData";
import "./ProductList.css";

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Track which plant ids have been added, so their button becomes
  // disabled immediately (in addition to being reflected in the cart state).
  const [addedIds, setAddedIds] = useState(() => new Set());

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  const handleAddToCart = (plant) => {
    if (isInCart(plant.id)) return;
    dispatch(
      addItem({
        id: plant.id,
        name: plant.name,
        image: plant.colors,
        price: plant.price,
      })
    );
    setAddedIds((prev) => {
      const next = new Set(prev);
      next.add(plant.id);
      return next;
    });
  };

  // Keep addedIds in sync with the actual cart state so removing an item
  // re-enables the Add button.
  React.useEffect(() => {
    setAddedIds((prev) => {
      const next = new Set([...prev].filter((id) => cartItems.some((i) => i.id === id)));
      return next;
    });
  }, [cartItems]);

  return (
    <div className="product-list">
      <h1 className="product-list-heading">Our Houseplants</h1>
      {plantsData.map((group) => (
        <div className="category-section" key={group.category}>
          <h2 className="category-title">{group.category}</h2>
          <div className="plant-grid">
            {group.plants.map((plant) => {
              const added = addedIds.has(plant.id) || isInCart(plant.id);
              return (
                <div className="plant-card" key={plant.id}>
                  <div className="plant-thumb">
                    <PlantIcon {...plant.colors} />
                  </div>
                  <h3 className="plant-name">{plant.name}</h3>
                  <p className="plant-desc">{plant.description}</p>
                  <p className="plant-price">R{plant.price.toFixed(2)}</p>
                  <button
                    className={`add-to-cart-btn ${added ? "added" : ""}`}
                    disabled={added}
                    onClick={() => handleAddToCart(plant)}
                  >
                    {added ? "Added to Cart" : "Add to Cart"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
