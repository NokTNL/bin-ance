import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store";

import SelectCurrencyButton from "./SelectCurrencyButton";
import CurrencyOptions from "./CurrencyOptions";
import Overlay from "../Helpers/Overlay";

import "./CurrencyBlock.css";

export default function CurrencyInput({
  currencyCat,
  currencyType,
  setCurrencyPair,
  price,
  index,
}) {
  // Redux
  const inputAmount = useSelector(
    // Extract only that portion of the state
    (state) => state.buying.inputAmountPair[currencyCat]
  );
  const isShowingOptions = useSelector(
    (state) => state.currencyOptions.isShowingOptions
  );
  const dispatch = useDispatch();

  const handleAmountChange = (event) => {
    const amount = event.target.value;
    dispatch(
      actions.buying.setInputAmountPair(
        currencyCat === "fiat"
          ? {
              fiat: amount,
              crypto: amount / price,
            }
          : {
              fiat: amount * price,
              crypto: amount,
            }
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
        <SelectCurrencyButton currencyType={currencyType} />
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
