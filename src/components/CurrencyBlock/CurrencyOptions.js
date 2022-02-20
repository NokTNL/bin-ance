import { useDispatch } from "react-redux";
import { actions } from "../../store";

import CurrencyOptionsSubmitForm from "./CurrencyOptionsSubmitForm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./CurrencyOptions.css";

export default function CurrencyOptions({ currencyCat, setCurrencyPair }) {
  const dispatch = useDispatch();

  const onCancel = () => {
    dispatch(actions.currencyOptions.showOptions(false));
  };

  return (
    <div className="currency-options">
      <div className="currency-options__heading-cancel-flex-container">
        <h3>Select Currency</h3>
        <button onClick={onCancel}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <CurrencyOptionsSubmitForm
        currencyCat={currencyCat}
        setCurrencyPair={setCurrencyPair}
      />
    </div>
  );
}
