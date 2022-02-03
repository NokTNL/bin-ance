import { useState } from "react";

export default function ExchangeRate({
  price,
  currencyPair: { crypto, fiat },
}) {
  const [isCryptoBase, setIsCryptoBase] = useState(true);

  const handleSwap = () => {
    setIsCryptoBase((prev) => !prev);
  };

  return (
    <div>
      <span>
        {isCryptoBase
          ? `1 ${crypto} ≈ ${price} ${fiat}`
          : `1 ${fiat} ≈ ${1 / price} ${crypto}`}
      </span>
      <button onClick={handleSwap}>
        <img alt="Swap" />
      </button>
    </div>
  );
}
