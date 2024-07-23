import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsersFromAPI = createAsyncThunk(
  "users/fetchUsers",
  async function fetchUsers() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();

      return data;
    } catch (err) {
      console.log("ERRR is", err);
    }
  }
);

const initialState = { users: [] };
export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log("action", action);
      const newUser = action.payload;
      console.log("newUser", newUser);
      state.users.push(newUser);
    },
    removeUser: (state, action) => {
      const id = action.payload;
      state.users = state.users.filter((eachUser) => eachUser.id !== id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsersFromAPI.fulfilled, (state, action) => {
      const fetchedUsersArray = action.payload;

      fetchedUsersArray.map((each) => {
        state.users.push(each);
      });
    });
  },
});

export const userActions = userSlice.actions;
