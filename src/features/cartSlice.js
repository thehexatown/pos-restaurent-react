import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "auth",
  initialState: {
    cartItems: [],

    cartTotalAmount: 0,
  },
  reducers: {
    add(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          quantity:
            state.cartItems[existingIndex].quantity + action.payload.quantity,
        };
      } else {
        let tempProductItem = { ...action.payload };
        state.cartItems.push(tempProductItem);
      }
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;
      } else if (state.cartItems[itemIndex].quantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartItems = nextCartItems;
      }
    },
    getTotals(state, action) {
      let { total } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity, extraPrice } = cartItem;

          const itemTotal = price * quantity + extraPrice * quantity;

          cartTotal.total += itemTotal;

          return cartTotal;
        },
        {
          total: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalAmount = total;
    },
    clearCart(state, action) {
      state.cartItems = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, decreaseCart, getTotals, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
