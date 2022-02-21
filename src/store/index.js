import { configureStore, createSlice } from "@reduxjs/toolkit";

const currencyOptions = createSlice({
  name: "currencyOptions",
  initialState: {
    isShowingOptions: false,
    curencyCat: "",
    searchText: "",
  },
  reducers: {
    showOptions(state, action) {
      state.isShowingOptions = true;
      state.currencyCat = action.payload;
    },
    hideOptions(state) {
      state.isShowingOptions = false;
      state.currencyCat = "";
    },
    setSearchText(state, action) {
      state.searchText = action.payload;
    },
  },
});

const buying = createSlice({
  name: "buying",
  initialState: {
    buyOrSell: "buy",
    /*** This can be problaematic in the future: if I buy, do I base on the amount of crypto or fiat? */
    /**** Should always based on "Spend" amount ? */
    inputAmountPair: {
      crypto: "",
      fiat: "",
    },
  },
  reducers: {
    setBuyOrSell(state, action) {
      state.buyOrSell = action.payload;
    },
    changeInputAmount(state, action) {
      /** May remove price as it can also be retrieved from the state */
      /** Options: rootreducer, thunks */
      /*** https://redux.js.org/faq/reducers#how-do-i-share-state-between-two-reducers-do-i-have-to-use-combinereducers */
      const { currencyCat, amount, price } = action.payload;
      state.inputAmountPair =
        currencyCat === "fiat"
          ? {
              fiat: amount,
              crypto: amount / price,
            }
          : {
              fiat: amount * price,
              crypto: amount,
            };
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
