import { configureStore } from "@reduxjs/toolkit";
import { testSlice } from "../slice/testSlice";

export const store = configureStore({
  reducer: {
    test: testSlice.reducer,
  },
});
