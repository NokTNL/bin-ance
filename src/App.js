import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import BuySellPanel from "./components/BuySellPanel";
import CurrencyBlock from "./components/CurrencyBlock/CurrencyBlock";
import ExchangeRate from "./components/ExchangeRate";
import Header from "./components/Header";
import BottomButton from "./components/BottomButton";

import fetchPrice from "./fetchPrice";

import "./App.css";
import "./global.css";

const CURRENCY_PAIR_DEFAULT = {
  crypto: "BTC",
  fiat: "USD",
};

function App() {
  // Redux
  const buyOrSell = useSelector((state) => state.buying.buyOrSell);
  const cryptoFiatOrder =
    buyOrSell === "buy" ? ["fiat", "crypto"] : ["crypto", "fiat"];

  // useState
  const [currencyPair, setCurrencyPair] = useState(CURRENCY_PAIR_DEFAULT);
  const [price, setPrice] = useState("");
  const [isPriceLoading, setIsPriceLoading] = useState(true);

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
      <BuySellPanel />
      <ExchangeRate
        price={price}
        currencyPair={currencyPair}
        isPriceLoading={isPriceLoading}
      />
      {cryptoFiatOrder.map((cat, index) => (
        <CurrencyBlock
          currencyCat={cat}
          currencyType={currencyPair[cat]}
          setCurrencyPair={setCurrencyPair}
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
