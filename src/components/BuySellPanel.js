import "./BuySellPanel.css";

export default function BuySellPanel({ buyOrSell, setBuyOrSell }) {
  const onSelection = (event) => {
    setBuyOrSell(event.target.value);
  };

  return (
    <div className="buy-sell-panel">
      <button
        className={buyOrSell === "buy" ? "buy-sell-panel__selected" : ""}
        value="buy"
        onClick={onSelection}
      >
        Buy
      </button>
      <button
        className={buyOrSell === "sell" ? "buy-sell-panel__selected" : ""}
        value="sell"
        onClick={onSelection}
      >
        Sell
      </button>
    </div>
  );
}
