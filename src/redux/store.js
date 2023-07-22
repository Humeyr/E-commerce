import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./CategorySlice";
import userSlice from "./userSlice";

export default configureStore({
  reducer: {
    categoryState: categorySlice,
    userState: userSlice,
  },
});