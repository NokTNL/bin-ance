export default function BuySellPanel({ buyOrSell, setBuyOrSell }) {
  const onSelection = (event) => {
    setBuyOrSell(event.target.value);
  };

  return (
    <div>
      <button value="buy" onClick={onSelection}>
        Buy
      </button>
      <button value="sell" onClick={onSelection}>
        Sell
      </button>
    </div>
  );
}
