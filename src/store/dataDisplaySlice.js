import { createSlice } from "@reduxjs/toolkit";

const dataDisplaySlice = createSlice({
  name: "dataDisplay",
  initialState: {
    // the currency category of the selected input box; value === "crypto" or "fiat"
    selectedInput: "",
    // only that slice of inputAmountPair is updated when the corresponding input box is selected
    inputAmountPair: {
      crypto: "",
      fiat: "",
    },
  },
  reducers: {
    selectInput(state, action) {
      const { currencyCat, currentAmount } = action.payload;
      state.selectedInput = currencyCat;
      state.inputAmountPair[currencyCat] = currentAmount;
    },
    changeInputAmount(state, action) {
      const newAmount = action.payload;
      // Only change the input amount of the selected currency category.
      // In the component, the other amount will be computed from the selecetd input & price, ...
      // ... so it will be updated constantly
      state.inputAmountPair[state.selectedInput] = newAmount;
    },
  },
});

export default dataDisplaySlice;
