import { useState } from "react";
import CurrencyOptions from "./CurrencyOptions";

export default function CurrencyInput({
  currencyCat,
  currencyType,
  setCurrencyPair,
}) {
  const [isShowingOptions, setIsShowingOptions] = useState(false);

  const onSelectCurrency = () => {
    setIsShowingOptions(true);
  };

  return (
    <div>
      <input type="number" min={0} />
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
