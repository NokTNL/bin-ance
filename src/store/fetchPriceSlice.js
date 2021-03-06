import { createSlice } from "@reduxjs/toolkit";
import fetchPrice from "../scripts/fetchPrice";

const fetchPriceSlice = createSlice({
  name: "fetchPrice",
  initialState: {
    currencyPair: {
      crypto: "BTC",
      fiat: "USD",
    },
    isPriceLoading: true,
    price: "",
  },
  reducers: {
    updateCurrencyPair(state, action) {
      const { selectedCurrencyType, currencyCat } = action.payload;
      // Check for invalid currency catagory name
      switch (currencyCat) {
        case "crypto":
        case "fiat":
          break;
        default:
          throw new Error(`${currencyCat} is not a valid currencyCat`);
      }
      state.currencyPair[currencyCat] = selectedCurrencyType;
      state.isPriceLoading = true;
    },
    updatePrice(state, action) {
      const newPrice = action.payload;
      state.price = newPrice;
      state.isPriceLoading = false;
    },
  },
});

// Thunks
export const initFetchPrice = () => {
  return (dispatch, getState) => {
    const setPriceFunc = (price) => {
      dispatch(fetchPriceSlice.actions.updatePrice(price));
    };
    // Pass the setPrice function to let the module update the price for us
    fetchPrice.init(setPriceFunc);
    // fetch the price of the initial pair
    fetchPrice.setPair(getState().fetchPrice.currencyPair);
  };
};
export const sendNewCurrencyPair = ({ selectedCurrencyType, currencyCat }) => {
  return (dispatch, getState) => {
    // Only if selectedCurrencyType is different from the old one, send a new API request
    const { currencyPair } = getState().fetchPrice;
    if (currencyPair[currencyCat] !== selectedCurrencyType) {
      dispatch(
        fetchPriceSlice.actions.updateCurrencyPair({
          selectedCurrencyType,
          currencyCat,
        })
      );
      // dispatch is SYNCHRONOUS so you will have an updated state straight away
      const { currencyPair: newCurrencyPair } = getState().fetchPrice;
      fetchPrice.setPair(newCurrencyPair);
    }
  };
};

export default fetchPriceSlice;
