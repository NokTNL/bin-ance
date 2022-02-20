import { Fragment } from "react";
import { fullCurrencyList } from "../../../database";
import { useSelector } from "react-redux";

import { images } from "../../../imageLoader";
import "./SubmitForm.css";

export default function SubmitForm({
  currencyCat,
  onConfirmCurrency: handleConfirmCurrency,
}) {
  // Setting up for filtering by search text
  const searchText = useSelector((state) => state.currencyOptions.searchText);
  const myFullCurrencyList = fullCurrencyList[currencyCat];

  const searchRegExp = new RegExp(searchText.toUpperCase());
  const myFilteredList = myFullCurrencyList.filter(
    (currency) =>
      // Match either the name or the symbol
      searchRegExp.test(currency.symbol.toUpperCase()) ||
      searchRegExp.test(currency.name.toUpperCase())
  );

  return (
    <form className="submit-form__option-list">
      {myFilteredList.map((currency) => {
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