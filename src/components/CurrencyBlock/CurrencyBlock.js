import { useSelector } from "react-redux";

import AmountInput from "./AmountInput";
import SelectCurrencyButton from "./SelectCurrencyButton";
import CurrencyOptions from "./CurrencyOptions/CurrencyOptions";
import Overlay from "../Helpers/Overlay";

import "./CurrencyBlock.css";

export default function CurrencyBlock({ currencyCat, isSpend }) {
  const isShowingOptions = useSelector((state) => {
    // Only show options when this currency category is selected
    if (
      state.ui.currencyOptions.selectingCurrencyCat === currencyCat &&
      state.ui.currencyOptions.isShowingOptions === true
    ) {
      return true;
    } else return false;
  });

  return (
    <div className="currency-block">
      <h4>{isSpend ? "Spend" : "Receive"}</h4>
      <div className="currency-block__input-button-flex-container">
        <AmountInput currencyCat={currencyCat} />
        <SelectCurrencyButton currencyCat={currencyCat} />
      </div>
      {isShowingOptions && (
        <Overlay>
          <CurrencyOptions currencyCat={currencyCat} />
        </Overlay>
      )}
    </div>
  );
}
