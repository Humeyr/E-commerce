import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  initilized: false,
};

export const CategorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export default CategorySlice.reducer;

export const { setCategories } = CategorySlice.actions;