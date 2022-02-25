import { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../../store/store";

import SubmitForm from "./SubmitForm";
import SearchTextInput from "./SearchTextInput";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./CurrencyOptions.css";

export default function CurrencyOptions({ currencyCat, setCurrencyPair }) {
  // Component state as it is not quite relavent globally
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch();

  const onCancel = () => {
    dispatch(actions.ui.hideOptions());
  };
  return (
    <div className="currency-options">
      <div className="currency-options__heading-cancel-flex-container">
        <h3>Select Currency</h3>
        <button onClick={onCancel}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <SearchTextInput searchText={searchText} setSearchText={setSearchText} />
      <SubmitForm
        searchText={searchText}
        setCurrencyPair={setCurrencyPair}
        currencyCat={currencyCat}
      />
    </div>
  );
}
