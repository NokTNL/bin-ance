import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./CurrencyOptions.css";
import CurrencyOptionsSubmitForm from "./CurrencyOptionsSubmitForm";

export default function CurrencyOptions({
  currencyCat,
  setCurrencyPair,
  setIsShowingOptions,
}) {
  const onCancel = () => {
    setIsShowingOptions(false);
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
        setIsShowingOptions={setIsShowingOptions}
      />
    </div>
  );
}
