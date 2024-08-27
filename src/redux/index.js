import { configureStore } from "@reduxjs/toolkit";
import modal from "./generic-slices/modals";
import shopping from "./slices/shopping";

export default configureStore({
  reducer: {
    modal,
    shopping
  }
});
