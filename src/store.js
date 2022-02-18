import { createStore } from "redux";

const buyOrSellReducer = (state = { buyOrSell: "buy" }, action) => {
  switch (action.type) {
    case "setBuyOrSell":
      return { ...state, buyOrSell: action.selection };
    default:
      return state;
  }
};

const store = createStore(buyOrSellReducer);

export default store;
