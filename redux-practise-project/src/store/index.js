import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, toggle: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      state.counter++;
    },
    decrement(state, action) {
      state.counter--;
    },
    toggle(state, action) {
      state.toggle = !state.toggle;
    },
  },
});

const initialLoginState = { logiStatus: false };

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: initialLoginState,
  reducers: {
    doLogin(state, action) {
      state.logiStatus = true;
    },
    doLogout(state, action) {
      state.logiStatus = false;
    },
  },
});

// const reuducerFunc = (state = initialState, action) => {
//   if (action.type === "INC") {
//     return { counter: state.counter + 1, toggle: state.toggle };
//   } else if (action.type === "DEC") {
//     return { counter: state.counter - 1, toggle: state.toggle };
//   } else if (action.type === "TOG") {
//     return { counter: state.counter, toggle: !state.toggle };
//   } else {
//     return state;
//   }
// };

const store = configureStore({
  reducer: { reducer1: counterSlice.reducer, reducer2: loginSlice.reducer },
});
export const counterActions = counterSlice.actions;
export const loginActions = loginSlice.actions;
export default store;
