import { configureStore } from "@reduxjs/toolkit";

import dataDisplaySlice from "./dataDisplaySlice";
import uiSlice from "./uiSlice";
import fetchPriceSlice from "./fetchPriceSlice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    dataDisplay: dataDisplaySlice.reducer,
    fetchPrice: fetchPriceSlice.reducer,
  },
});

export const actions = {
  ui: uiSlice.actions,
  dataDisplay: dataDisplaySlice.actions,
  fetchPrice: fetchPriceSlice.actions,
};

export default store;
