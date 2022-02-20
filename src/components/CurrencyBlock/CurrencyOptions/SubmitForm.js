import { Fragment } from "react";

import { images } from "../../../imageLoader";
import "./SubmitForm.css";

export default function SubmitForm({
  currencyCat,
  shownCurrencyList,
  onConfirmCurrency: handleConfirmCurrency,
}) {
  return (
    <form className="submit-form__option-list">
      {shownCurrencyList.map((currency) => {
        const { symbol, name } = currency;
        return (
          <Fragment key={symbol}>
            <input
              type="submit"
              className="submit-form__option-list-input-hidden"
              name={currencyCat}
              id={symbol}
              // no need value as the element is recognised by id
              onClick={handleConfirmCurrency}
            />
            <label htmlFor={symbol} className="submit-form__option-list-label">
              <img
                src={images[symbol]}
                alt=""
                className="submit-form__option-list-label-img"
              />
              <div className="submit-form__option-list-label-text-container">
                <div className="submit-form__option-list-label-symbol-text">
                  {symbol}
                </div>
                <div className="submit-form__option-list-label-name-text">
                  {name}
                </div>
              </div>
            </label>
          </Fragment>
        );
      })}
    </form>
  );
}
