import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./SelectCurrencyButton.css";
import { images } from "../imageLoader";

export default function SelectCurrencyButton({
  setIsShowingOptions,
  currencyType,
}) {
  const onSelectCurrency = () => {
    setIsShowingOptions(true);
  };

  return (
    <button className="select-currency-button" onClick={onSelectCurrency}>
      <img
        src={images[currencyType]}
        alt=""
        className="select-currency-button__currency-image"
      />
      <span className="select-currency-button__text">{currencyType}</span>
      <FontAwesomeIcon
        className="select-currency-button__arrow"
        icon={faAngleRight}
      />
    </button>
  );
}
