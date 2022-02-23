import { configureStore } from "@reduxjs/toolkit";

import buyingSlice from "./buyingSlice";
import currencyOptionsSlice from "./currencyOptionsSlice";

const store = configureStore({
  reducer: {
    currencyOptions: currencyOptionsSlice.reducer,
    buying: buyingSlice.reducer,
  },
});

export const actions = {
  currencyOptions: currencyOptionsSlice.actions,
  buying: buyingSlice.actions,
};

export default store;
