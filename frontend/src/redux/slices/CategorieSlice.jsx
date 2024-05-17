import { createSlice } from "@reduxjs/toolkit";

const Categorie = createSlice({
  name: "Categorie",
  initialState: {
    Categorie: "All",
  },
  reducers: {
    setCategorie: (state, action) => {
      state.Categorie = action.payload;
    },
  },
});

export const { setCategorie } = Categorie.actions;
export default Categorie.reducer;