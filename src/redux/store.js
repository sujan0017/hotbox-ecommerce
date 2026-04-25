import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlicer";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
