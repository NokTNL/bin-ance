import { useState } from "react";
import CurrencyOptions from "./CurrencyOptions";
import "./CurrencyInput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { images } from "../imageLoader";

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

  const onSelectCurrency = () => {
    setIsShowingOptions(true);
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
        <button className="select-currency-button" onClick={onSelectCurrency}>
          <img
            src={images[currencyType]}
            alt={currencyType}
            className="select-currency-button__currency-image"
          />
          <span className="select-currency-button__text">{currencyType}</span>
          <FontAwesomeIcon
            className="select-currency-button__arrow"
            icon={faAngleRight}
          />
        </button>
      </div>
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
