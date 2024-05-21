// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/CategorieSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});
