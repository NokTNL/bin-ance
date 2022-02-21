import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store";

import SelectCurrencyButton from "./SelectCurrencyButton";
import CurrencyOptions from "./CurrencyOptions/CurrencyOptions";
import Overlay from "../Helpers/Overlay";

import "./CurrencyBlock.css";

export default function CurrencyInput({
  currencyCat,
  currencyType,
  setCurrencyPair,
  price,
  index,
}) {
  const inputAmount = useSelector(
    (state) => state.buying.inputAmountPair[currencyCat]
  );
  const isShowingOptions = useSelector((state) => {
    // Only show options when this currency category is selected
    if (
      state.currencyOptions.currencyCat === currencyCat &&
      state.currencyOptions.isShowingOptions === true
    ) {
      return true;
    } else return false;
  });
  const dispatch = useDispatch();

  const handleAmountChange = (event) => {
    const amount = event.target.value;
    dispatch(
      actions.buying.changeInputAmount(
        /*** Maybe use the price in the state in the future */
        { currencyCat, amount, price }
      )
    );
  };

  return (
    <div className="currency-block">
      <h4>{index === 0 ? "Spend" : "Receive"}</h4>
      <div className="currency-block__input-button-flex-container">
        <input
          type="number"
          min={0}
          value={inputAmount}
          placeholder={currencyCat === "crypto" ? "0.00000000" : "0.00"}
          onChange={handleAmountChange}
        />
        <SelectCurrencyButton
          currencyCat={currencyCat}
          currencyType={currencyType}
        />
      </div>
      {isShowingOptions && (
        <Overlay>
          <CurrencyOptions
            currencyCat={currencyCat}
            setCurrencyPair={setCurrencyPair}
          />
        </Overlay>
      )}
    </div>
  );
}
