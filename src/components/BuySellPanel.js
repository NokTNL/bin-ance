import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store/store";
import "./BuySellPanel.css";

export default function BuySellPanel() {
  const isBuyCrypto = useSelector((state) => state.buying.isBuyCrypto);
  const dispatch = useDispatch();

  const handleSelection = (event) => {
    dispatch(actions.buying.setBuyOrSell(event.target.value));
  };

  return (
    <div className="buy-sell-panel">
      <button
        className={isBuyCrypto ? "buy-sell-panel__button--selected" : ""}
        value="buy"
        onClick={handleSelection}
      >
        Buy
      </button>
      <button
        className={isBuyCrypto ? "" : "buy-sell-panel__button--selected"}
        value="sell"
        onClick={handleSelection}
      >
        Sell
      </button>
    </div>
  );
}
