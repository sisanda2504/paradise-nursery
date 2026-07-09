import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // { id, name, image, price (number), unitPrice (string), quantity }
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { id, name, image, price } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          id,
          name,
          image,
          price,
          quantity: 1,
        });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (i) => i.id !== action.payload
          );
        }
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (!item) return;
      const qty = Number(quantity);
      if (isNaN(qty) || qty <= 0) {
        // remove if invalid or zero
        state.items = state.items.filter((i) => i.id !== id);
      } else {
        item.quantity = qty;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  incrementQuantity,
  decrementQuantity,
  updateQuantity,
  clearCart,
} = CartSlice.actions;

export default CartSlice.reducer;
