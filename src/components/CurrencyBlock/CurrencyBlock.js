import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
    (state) => state.inputAmountPair[currencyCat]
  );
  const dispatch = useDispatch();

  // useState
  const [isShowingOptions, setIsShowingOptions] = useState(false);

  const onAmountChange = (event) => {
    const amount = event.target.value;
    if (currencyCat === "fiat") {
      dispatch({
        type: "setInputAmountPair",
        payload: {
          fiat: amount,
          crypto: amount / price,
        },
      });
    } else {
      dispatch({
        type: "setInputAmountPair",
        payload: {
          fiat: amount * price,
          crypto: amount,
        },
      });
    }
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
          onChange={onAmountChange}
        />
        <SelectCurrencyButton
          setIsShowingOptions={setIsShowingOptions}
          currencyType={currencyType}
        />
      </div>
      {isShowingOptions && (
        <Overlay>
          <CurrencyOptions
            currencyCat={currencyCat}
            setCurrencyPair={setCurrencyPair}
            setIsShowingOptions={setIsShowingOptions}
          />
        </Overlay>
      )}
    </div>
  );
}
