import { useState, Fragment } from "react";
import { fullCurrencyList } from "../database";
import "./CurrencyOptionsSubmitForm.css";
import { images } from "../imageLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function CurrencyOptionsSubmitForm({
  currencyCat,
  setCurrencyPair,
  setIsShowingOptions,
}) {
  const myFullCurrencyList = fullCurrencyList[currencyCat];
  const [shownCurrencyList, setShownCurrencyList] =
    useState(myFullCurrencyList);
  const [searchText, setSearchText] = useState("");

  const onSearchTextChange = (event) => {
    const searchText = event.target.value;
    setSearchText(searchText);

    const searchRegExp = new RegExp(searchText.toUpperCase());
    const myFilteredList = myFullCurrencyList.filter(
      (currency) =>
        searchRegExp.test(currency.symbol.toUpperCase()) ||
        searchRegExp.test(currency.name.toUpperCase())
    );

    setShownCurrencyList(myFilteredList);
  };

  const onConfirmCurrency = (event) => {
    event.preventDefault();

    const selectedCurrency = event.target.id;
    setCurrencyPair((prev) => {
      return { ...prev, [currencyCat]: selectedCurrency };
    });
    setIsShowingOptions(false); // Hide CurrencyOptions
  };

  return (
    <>
      <div className="currency-options__search-text">
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="text"
          className="search-text__input"
          value={searchText}
          placeholder="Search"
          onChange={onSearchTextChange}
        />
      </div>

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
                onClick={onConfirmCurrency}
              />
              <label
                htmlFor={symbol}
                className="submit-form__option-list-label"
              >
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
    </>
  );
}
