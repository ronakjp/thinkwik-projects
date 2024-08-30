import { Properties, TypeProperty } from "@/types/types";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const propertyInitialState: { userProperties: TypeProperty[] } = {
  userProperties: [],
};

export const propertiesSlice = createSlice({
  name: "propertySlice",
  initialState: propertyInitialState,
  reducers: {
    addProperty: (state, action: PayloadAction<TypeProperty>) => {
      if (action.payload) {
        state.userProperties.push(action.payload);

        console.log("Finished Hydrating the properties");
      }
    },
  },
});

export const store = configureStore({
  reducer: { property: propertiesSlice.reducer },
});

// TypeScript type that represents the entire state of the Redux store.
// `ReturnType<typeof store.getState>` infers the return type of `store.getState()`,
// which is the current state of the store. This type is exported for use throughout your app.

export type RootState = ReturnType<typeof store.getState>;

// TypeScript type that represents the dispatch function of the Redux store.
// `typeof store.dispatch` infers the type of the `dispatch` function provided by the store.
// This type is exported for use throughout your app.
export type AppDispatch = typeof store.dispatch;

// Custom `useAppDispatch` hook that wraps the standard `useDispatch` hook, ensuring that
// the `dispatch` function is typed correctly as `AppDispatch`. This hook should be used
// throughout your app instead of the plain `useDispatch` to ensure type safety when dispatching actions.

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const { addProperty } = propertiesSlice.actions;
