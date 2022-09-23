import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    token: null,
    user: {},
  },
  reducers: {
    login(state, action) {
      state.token = action.payload.jwt;
      state.user = action.payload.user;
      //   state.cartItems = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { login } = loginSlice.actions;

export default loginSlice.reducer;
