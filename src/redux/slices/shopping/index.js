import { createSlice } from "@reduxjs/toolkit";

const shopping = createSlice({
  name: "shopping",
  initialState: {
    products: [],
    coupon: null
  },
  reducers: {
    setShoppingProducts: (state, { payload }) => {
      state.products = payload;
    },
    setCoupon: (state, { payload }) => {
      state.coupon = payload;
    }
  }
});

export const { setShoppingProducts, setCoupon } = shopping.actions;
export default shopping.reducer;
