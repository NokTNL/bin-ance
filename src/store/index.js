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
      state.searchText = "";
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
    selectedInput: "",
    // only that slice of inputAmountPair is updated when the corresponding input box is selected
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
    selectInput(state, action) {
      const { currencyCat, currentAmount } = action.payload;
      state.selectedInput = currencyCat;
      state.inputAmountPair[currencyCat] = currentAmount;
    },
    changeInputAmount(state, action) {
      const newAmount = action.payload;
      state.inputAmountPair[state.selectedInput] = newAmount;
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
