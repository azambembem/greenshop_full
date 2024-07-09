import { configureStore } from "@reduxjs/toolkit";
import modal from "./generic-slices/modals";

export default configureStore({
  reducer: {
    modal
  }
});
