import { useDispatch, useSelector } from "react-redux";
import "./BuySellPanel.css";

export default function BuySellPanel() {
  const buyOrSell = useSelector((state) => state.buyOrSell);
  const dispatch = useDispatch();

  const onSelection = (event) => {
    dispatch({
      type: "setBuyOrSell",
      payload: event.target.value,
    });
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
