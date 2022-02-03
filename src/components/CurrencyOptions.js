import { useState, Fragment } from "react";
import { fullCurrencyList } from "../database";

export default function CurrencyOptions({
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
    <form>
      <input type="text" value={searchText} onChange={onSearchTextChange} />
      {shownCurrencyList.map((currency) => (
        <Fragment key={currency.symbol}>
          <input
            type="submit"
            name={currencyCat}
            id={currency.symbol}
            // no need value as the element is recognised by id
            onClick={onConfirmCurrency}
          />
          <label htmlFor={currency.symbol}>
            {currency.symbol}, {currency.name}
          </label>
        </Fragment>
      ))}
    </form>
  );
}
