import { configureStore } from "@reduxjs/toolkit";
import Categorie from "./slices/CategorieSlice";
import SearchSlice from "./slices/SearchSlice";

const Store = configureStore({
  reducer: {
    category: Categorie,
  },
});
export default Store;