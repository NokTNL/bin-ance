import { configureStore, createSlice } from "@reduxjs/toolkit";

const currencyOptions = createSlice({
  name: "currencyOptions",
  initialState: {
    isShowingOptions: false,
  },
  reducers: {
    showOptions(state, action) {
      state.isShowingOptions = action.payload;
    },
  },
});

const buying = createSlice({
  name: "buying",
  initialState: {
    buyOrSell: "buy",
    inputAmountPair: {
      crypto: "",
      fiat: "",
    },
  },
  reducers: {
    setBuyOrSell(state, action) {
      state.buyOrSell = action.payload;
    },
    setInputAmountPair(state, action) {
      state.inputAmountPair = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    currencyOptions: currencyOptions.reducer,
    buying: buying.reducer,
  },
});

export default store;
export const actions = {
  currencyOptions: currencyOptions.actions,
  buying: buying.actions,
};
