import { useState } from "react";
import CurrencyOptions from "./CurrencyOptions";
import "./CurrencyInput.css";

import SelectCurrencyButton from "./SelectCurrencyButton";
import Overlay from "./Overlay";

export default function CurrencyInput({
  currencyCat,
  currencyType,
  setCurrencyPair,
  inputAmount,
  setInputAmountPair,
  price,
  index,
}) {
  const [isShowingOptions, setIsShowingOptions] = useState(false);

  const onAmountChange = (event) => {
    const amount = event.target.value;
    if (currencyCat === "fiat") {
      setInputAmountPair({
        fiat: amount,
        crypto: amount / price,
      });
    } else {
      setInputAmountPair({
        fiat: amount * price,
        crypto: amount,
      });
    }
  };

  return (
    <div className="currency-input">
      <h4>{index === 0 ? "Spend" : "Receive"}</h4>
      <div className="input-button-flex-container">
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
