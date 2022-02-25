import { configureStore } from "@reduxjs/toolkit";

import dataDisplaySlice from "./dataDisplaySlice";
import uiSlice from "./uiSlice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    dataDisplay: dataDisplaySlice.reducer,
  },
});

export const actions = {
  ui: uiSlice.actions,
  dataDisplay: dataDisplaySlice.actions,
};

export default store;
