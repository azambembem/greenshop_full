import { createSlice } from "@reduxjs/toolkit";

const modal = createSlice({
  name: "modal",
  initialState: {
    categoryModal: false,
    authModal: false,
    siteMap: false,
    confirmModal: false,
    orderModal: { show: false, data: null },
    addModal: false
  },
  reducers: {
    setCategoryModal: (state) => {
      state.categoryModal = !state.categoryModal;
    },
    setAuthModal: (state) => {
      state.authModal = !state.authModal;
    },
    setSiteMap: (state) => {
      state.siteMap = !state.siteMap;
    },
    setConfirmModal: (state) => {
      state.confirmModal = !state.confirmModal;
    },
    setOrderModal: (state, { payload }) => {
      state.orderModal = payload;
    },
    setAddModal: (state) => {
      state.addModal = !state.addModal;
    }
  }
});

export default modal.reducer;
export const {
  setCategoryModal,
  setAuthModal,
  setSiteMap,
  setConfirmModal,
  setOrderModal,
  setAddModal
} = modal.actions;
