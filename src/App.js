import { useEffect, useState } from "react";
import BuySellPanel from "./components/BuySellPanel";
import CurrencyInput from "./components/CurrencyInput";
import ExchangeRate from "./components/ExchangeRate";
import Header from "./components/Header";
import BottomButton from "./components/BottomButton";
import fetchPrice from "./fetchPrice";

import "./App.css";
import "./global.css";

// Redux
import { useSelector } from "react-redux";

const CURRENCY_PAIR_DEFAULT = {
  crypto: "BTC",
  fiat: "USD",
};

function App() {
  // Redux
  const buyOrSell = useSelector((state) => state.buyOrSell);

  // useState
  const [currencyPair, setCurrencyPair] = useState(CURRENCY_PAIR_DEFAULT);
  const [inputAmountPair, setInputAmountPair] = useState({
    crypto: "",
    fiat: "",
  });
  const [price, setPrice] = useState("");
  const [isPriceLoading, setIsPriceLoading] = useState(true);
  // const [buyOrSell, setBuyOrSell] = useState("buy");
  const cryptoFiatOrder =
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
      <h1>Buy Crypto</h1>
      <BuySellPanel buyOrSell={buyOrSell} />
      <ExchangeRate
        price={price}
        currencyPair={currencyPair}
        isPriceLoading={isPriceLoading}
      />
      {cryptoFiatOrder.map((cat, index) => (
        <CurrencyInput
          currencyCat={cat}
          currencyType={currencyPair[cat]}
          setCurrencyPair={setCurrencyPair}
          inputAmount={inputAmountPair[cat]}
          setInputAmountPair={setInputAmountPair}
          price={price}
          key={cat}
          index={index}
        />
      ))}
      <BottomButton />
    </div>
  );
}

export default App;
