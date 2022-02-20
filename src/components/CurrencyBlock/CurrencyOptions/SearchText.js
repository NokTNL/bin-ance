import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../../store";

import "./SearchText.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchText() {
  const searchText = useSelector((state) => state.currencyOptions.searchText);
  const dispatch = useDispatch();

  const handleSearchTextChange = (event) => {
    dispatch(actions.currencyOptions.setSearchText(event.target.value));
  };

  return (
    <div className="currency-options__search-text">
      <FontAwesomeIcon icon={faSearch} />
      <input
        type="text"
        className="search-text__input"
        value={searchText}
        placeholder="Search"
        onChange={handleSearchTextChange}
      />
    </div>
  );
}
