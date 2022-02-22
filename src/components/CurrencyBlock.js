import { useSelector } from "react-redux";

import AmountInput from "./CurrencyBlock/AmountInput";
import SelectCurrencyButton from "./CurrencyBlock/SelectCurrencyButton";
import CurrencyOptions from "./CurrencyOptions/CurrencyOptions";
import Overlay from "./Helpers/Overlay";

import "./CurrencyBlock.css";

export default function CurrencyInput({
  currencyCat,
  currencyType,
  setCurrencyPair,
  price,
  isSpend,
}) {
  const isShowingOptions = useSelector((state) => {
    // Only show options when this currency category is selected
    if (
      state.currencyOptions.currencyCat === currencyCat &&
      state.currencyOptions.isShowingOptions === true
    ) {
      return true;
    } else return false;
  });

  return (
    <div className="currency-block">
      <h4>{isSpend ? "Spend" : "Receive"}</h4>
      <div className="currency-block__input-button-flex-container">
        <AmountInput currencyCat={currencyCat} price={price} />
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
