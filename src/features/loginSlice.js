import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    token: null,
    user: {},
    organization: {},
  },
  reducers: {
    login(state, action) {
      state.token = action.payload.jwt;
      state.user = action.payload.user;
      //   state.cartItems = [];
    },
    Organization(state, action) {
      state.organization = action.payload;
      //   state.cartItems = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, Organization } = loginSlice.actions;

export default loginSlice.reducer;
