import "./SearchText.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchText({
  searchText,
  onSearchTextChange: handleSearchTextChange,
}) {
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
