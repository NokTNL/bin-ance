import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";

import "./ExchangeRate.css";

export default function ExchangeRate({
  price,
  currencyPair: { crypto, fiat },
  isPriceLoading,
}) {
  const [isCryptoBase, setIsCryptoBase] = useState(true);

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
        <button onClick={handleSwap}>
          <FontAwesomeIcon icon={faExchangeAlt} />
        </button>
      </div>
    );
  }
}
