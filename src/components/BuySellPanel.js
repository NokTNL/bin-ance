import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store";
import "./BuySellPanel.css";

export default function BuySellPanel() {
  const buyOrSell = useSelector((state) => state.buying.buyOrSell);
  const dispatch = useDispatch();

  const handleSelection = (event) => {
    dispatch(actions.buying.setBuyOrSell(event.target.value));
  };

  return (
    <div className="buy-sell-panel">
      <button
        className={buyOrSell === "buy" ? "buy-sell-panel__selected" : ""}
        value="buy"
        onClick={handleSelection}
      >
        Buy
      </button>
      <button
        className={buyOrSell === "sell" ? "buy-sell-panel__selected" : ""}
        value="sell"
        onClick={handleSelection}
      >
        Sell
      </button>
    </div>
  );
}
