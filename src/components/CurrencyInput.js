import { useState } from "react";
import CurrencyOptions from "./CurrencyOptions";
import "./CurrencyInput.css";

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
        fiat: price / amount,
        crypto: amount,
      });
    }
  };

  const onSelectCurrency = () => {
    setIsShowingOptions(true);
  };

  return (
    <div className="currency-input">
      <h4>{index === 0 ? "Spend" : "Receive"}</h4>
      <input
        type="number"
        min={0}
        value={inputAmount}
        onChange={onAmountChange}
      />
      <button onClick={onSelectCurrency}>{currencyType}</button>
      {isShowingOptions && (
        <CurrencyOptions
          currencyCat={currencyCat}
          setCurrencyPair={setCurrencyPair}
          setIsShowingOptions={setIsShowingOptions}
        />
      )}
    </div>
  );
}
