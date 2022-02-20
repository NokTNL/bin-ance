import { useDispatch } from "react-redux";
import { actions } from "../../../store";
import { fullCurrencyList } from "../../../database";
import { useState } from "react";

import SubmitForm from "./SubmitForm";
import SearchText from "./SearchText";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./CurrencyOptions.css";

export default function CurrencyOptions({ currencyCat, setCurrencyPair }) {
  const dispatch = useDispatch();

  const onCancel = () => {
    dispatch(actions.currencyOptions.showOptions(false));
  };

  // Setting up for searching by text
  const myFullCurrencyList = fullCurrencyList[currencyCat];
  const [shownCurrencyList, setShownCurrencyList] =
    useState(myFullCurrencyList);
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (event) => {
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

  const handleConfirmCurrency = (event) => {
    event.preventDefault();
    const selectedCurrency = event.target.id;
    setCurrencyPair((prev) => {
      return { ...prev, [currencyCat]: selectedCurrency };
    });
    dispatch(actions.currencyOptions.showOptions(false)); // Hide CurrencyOptions
  };

  return (
    <div className="currency-options">
      <div className="currency-options__heading-cancel-flex-container">
        <h3>Select Currency</h3>
        <button onClick={onCancel}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <SearchText
        searchText={searchText}
        onSearchTextChange={handleSearchTextChange}
      />
      <SubmitForm
        onConfirmCurrency={handleConfirmCurrency}
        shownCurrencyList={shownCurrencyList}
        currencyCat={currencyCat}
      />
    </div>
  );
}
