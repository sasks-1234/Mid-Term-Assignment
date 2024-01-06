import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Reduer/CreateSlice";
const store = configureStore({
  reducer: {
    cart: Slice,
  },
});


export default store