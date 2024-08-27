import { createSlice } from "@reduxjs/toolkit";

const shopping = createSlice({
  name: "shopping",
  initialState: {
    products: []
  },
  reducers: {
    setShoppingProducts: (state, { payload }) => {
      state.products = payload;
    }
  }
});

export const { setShoppingProducts } = shopping.actions;
export default shopping.reducer;
