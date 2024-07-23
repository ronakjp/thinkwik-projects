import { configureStore } from "@reduxjs/toolkit";
import cart from "./cartSlice";
import uiSlice from "./uiSlice";
import { userSlice } from "./userSlice";

const store = configureStore({
  reducer: {
    cartReducer: cart.reducer,
    uiReducer: uiSlice.reducer,
    userReducer: userSlice.reducer,
  },
});

export default store;
