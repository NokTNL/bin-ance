import { configureStore, createSlice } from "@reduxjs/toolkit";

const currencyOptions = createSlice({
  name: "currencyOptions",
  initialState: {
    isShowingOptions: false,
    currencyCat: "",
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
    // true = buy, false = sell
    isBuyCrypto: true,
    inputAmountPair: {
      crypto: "",
      fiat: "",
    },
  },
  reducers: {
    setBuyOrSell(state, action) {
      switch (action.payload) {
        case "buy":
          state.isBuyCrypto = true;
          break;
        case "sell":
          state.isBuyCrypto = false;
          break;
        default:
          throw new Error(`Wrong type of payload in "setBuyOrSell"`);
      }
    },
    changeInputAmount(state, action) {
      /** May remove price as it can also be retrieved from the state */
      /** Options: rootreducer, thunks */
      /*** https://redux.js.org/faq/reducers#how-do-i-share-state-between-two-reducers-do-i-have-to-use-combinereducers */
      const { amount, price, currencyCat } = action.payload;
      state.inputAmountPair =
        currencyCat === "fiat"
          ? {
              crypto: amount / price,
              fiat: amount,
            }
          : {
              crypto: amount,
              fiat: amount * price,
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
