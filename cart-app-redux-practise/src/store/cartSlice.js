import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalQuantity: 0 };
const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const exisistingItem = state.items.find((item) => item.id === newItem.id);

      if (!exisistingItem) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        exisistingItem.quantity += 1;
        totalPrice += newItem.price;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const exisistingItem = state.items.find((item) => item.id === id);

      if (exisistingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        exisistingItem.quantity--;
        // exisistingItem.totalPrice -= exisistingItem.price;
      }

      state.cartItems.filter((eachItem) => eachItem.id === action.payload);
    },
  },
});

export default cart;
export const cartActions = cart.actions;
