import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../../store/store";

import { fullCurrencyList } from "../../../database";

import { images } from "../../../scripts/imageLoader";
import "./SubmitForm.css";
import { sendNewCurrencyPair } from "../../../store/fetchPriceSlice";

export default function SubmitForm({ searchText, currencyCat }) {
  const dispatch = useDispatch();

  // Setting up for filtering by search text
  const myFullCurrencyList = fullCurrencyList[currencyCat];
  const searchRegExp = new RegExp(searchText.toUpperCase());
  const myFilteredList = myFullCurrencyList.filter(
    (currency) =>
      // Match either the name or the symbol
      searchRegExp.test(currency.symbol.toUpperCase()) ||
      searchRegExp.test(currency.name.toUpperCase())
  );

  const handleConfirmCurrency = (event) => {
    event.preventDefault();
    const selectedCurrencyType = event.target.id;
    dispatch(
      sendNewCurrencyPair({
        selectedCurrencyType,
        currencyCat,
      })
    );
    dispatch(actions.ui.hideOptions()); // Hide CurrencyOptions
  };

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
              // no need "value" attribute as the element can be recognised by id
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
