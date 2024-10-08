import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartIsVisible: false };
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state, action) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export default uiSlice;
export const uiActions = uiSlice.actions;
