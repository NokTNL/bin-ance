import { useState } from "react";
import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";

import "./ExchangeRate.css";

export default function ExchangeRate() {
  const [isCryptoBase, setIsCryptoBase] = useState(true);

  const price = useSelector((state) => state.fetchPrice.price);
  const isPriceLoading = useSelector(
    (state) => state.fetchPrice.isPriceLoading
  );
  const { crypto, fiat } = useSelector(
    (state) => state.fetchPrice.currencyPair
  );

  const handleSwap = () => {
    setIsCryptoBase((prev) => !prev);
  };

  if (isPriceLoading) {
    return <div className="exchange-rate">loading...</div>;
  } else {
    return (
      <div className="exchange-rate">
        <span>
          {isCryptoBase
            ? `1 ${crypto} ≈ ${price} ${fiat}`
            : `1 ${fiat} ≈ ${1 / price} ${crypto}`}
        </span>
        <button
          className="exchange-rate__swap-base-button"
          onClick={handleSwap}
        >
          <FontAwesomeIcon
            className="exchange-rate__swap-base-button-svg"
            icon={faExchangeAlt}
          />
        </button>
      </div>
    );
  }
}
