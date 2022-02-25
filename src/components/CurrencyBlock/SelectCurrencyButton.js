import { useDispatch } from "react-redux";
import { actions } from "../../store/store";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./SelectCurrencyButton.css";
import { images } from "../../scripts/imageLoader";

export default function SelectCurrencyButton({ currencyCat, currencyType }) {
  const dispatch = useDispatch();

  const handleSelectCurrency = () => {
    dispatch(actions.ui.showOptions({ selectedCurrencyCat: currencyCat }));
  };

  return (
    <button className="select-currency-button" onClick={handleSelectCurrency}>
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
