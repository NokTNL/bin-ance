import { createStore } from "redux";

const INITIAL_STATE = {
  buyOrSell: "buy",
  inputAmountPair: {
    crypto: "",
    fiat: "",
  },
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "setBuyOrSell":
      return { ...state, buyOrSell: payload };
    case "setInputAmountPair":
      return { ...state, inputAmountPair: payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
