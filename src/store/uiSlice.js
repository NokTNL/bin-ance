import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    // true = buy, false = sell
    isBuyCrypto: true,
    currencyOptions: {
      isShowingOptions: false,
      selectingCurrencyCat: "",
    },
  },
  reducers: {
    toggleBuySell(state, action) {
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
    showOptions(state, action) {
      const { selectedCurrencyCat } = action.payload;
      // Check for invalid currency catagory name
      switch (selectedCurrencyCat) {
        case "crypto":
        case "fiat":
          break;
        default:
          throw new Error(`${selectedCurrencyCat} is not a valid currencyCat`);
      }
      state.currencyOptions.isShowingOptions = true;
      state.currencyOptions.selectingCurrencyCat = selectedCurrencyCat;
    },
    hideOptions(state) {
      state.currencyOptions.isShowingOptions = false;
      state.currencyOptions.selectingCurrencyCat = "";
    },
  },
});

export default uiSlice;
