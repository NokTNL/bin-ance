import { useEffect, useState } from "react";
import BuySellPanel from "./components/BuySellPanel";
import CurrencyInput from "./components/CurrencyInput";
import ExchangeRate from "./components/ExchangeRate";
import Header from "./components/Header";
import fetchPrice from "./fetchPrice";

const CURRENCY_PAIR_DEFAULT = {
  crypto: "BTC",
  fiat: "USD",
};

function App() {
  const [currencyPair, setCurrencyPair] = useState(CURRENCY_PAIR_DEFAULT);
  const [inputAmountPair, setInputAmountPair] = useState({
    crypto: "",
    fiat: "",
  });
  const [price, setPrice] = useState("");
  const [isPriceLoading, setIsPriceLoading] = useState(true);
  const [buyOrSell, setBuyOrSell] = useState("buy");
  const buySellArr =
    buyOrSell === "buy" ? ["fiat", "crypto"] : ["crypto", "fiat"];

  useEffect(() => {
    // A function that 1. detects new prices starts coming in AND 2. sets the new price
    const smartSetPriceFunc = (price) => {
      setIsPriceLoading(false);
      setPrice(price);
    };
    // Pass the setPrice function to let the module update the price for us
    fetchPrice.init(smartSetPriceFunc);
  }, []);
  useEffect(() => {
    // Send fetchPrice a new pair when currencyPair changes
    setIsPriceLoading(true);
    fetchPrice.setPair(currencyPair);
  }, [currencyPair]);

  return (
    <div className="App">
      <Header />
      <BuySellPanel buyOrSell={buyOrSell} setBuyOrSell={setBuyOrSell} />
      <ExchangeRate
        price={price}
        currencyPair={currencyPair}
        isPriceLoading={isPriceLoading}
      />
      {buySellArr.map((cat) => (
        <CurrencyInput
          currencyCat={cat}
          currencyType={currencyPair[cat]}
          setCurrencyPair={setCurrencyPair}
          inputAmount={inputAmountPair[cat]}
          setInputAmountPair={setInputAmountPair}
          price={price}
          key={cat}
        />
      ))}
      <a href="#">
        <button>Proceed</button>
      </a>
    </div>
  );
}

export default App;
