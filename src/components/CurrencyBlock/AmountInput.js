import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store/store";

import "./AmountInput.css";

export default function AmountInput({ currencyCat, price }) {
  const selectedInput = useSelector((state) => state.dataDisplay.selectedInput);

  const inputAmount = useSelector((state) => {
    const selectedInputAmount =
      state.dataDisplay.inputAmountPair[selectedInput];
    if (selectedInput === "" || selectedInputAmount === "") return "";
    // If this input box is selected, then this amount is taken directly from the state
    // Otherwise, it is calculated from the state's amount and price
    if (selectedInput === currencyCat) return selectedInputAmount;
    else {
      if (selectedInput === "crypto") {
        return selectedInputAmount * price; // crypto --> fiat
      } else {
        return selectedInputAmount / price; // fiat --> crypto
      }
    }
  });

  const dispatch = useDispatch();

  const handleAmountChange = (event) => {
    const amount = event.target.value;
    dispatch(actions.dataDisplay.changeInputAmount(amount));
  };

  const handleFocusInput = (event) => {
    const currentAmount = inputAmount;
    dispatch(actions.dataDisplay.selectInput({ currencyCat, currentAmount }));
  };

  return (
    <input
      className="amount-input"
      type="number"
      min={0}
      value={inputAmount}
      placeholder={currencyCat === "crypto" ? "0.00000000" : "0.00"}
      onChange={handleAmountChange}
      onFocus={handleFocusInput}
    />
  );
}
