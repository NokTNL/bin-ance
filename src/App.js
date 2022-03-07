import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initFetchPrice } from "./store/fetchPriceSlice";

import BuySellPanel from "./components/BuySellPanel";
import CurrencyBlock from "./components/CurrencyBlock/CurrencyBlock";
import ExchangeRate from "./components/ExchangeRate";
import Header from "./components/Header";
import BottomButton from "./components/BottomButton";

import "./App.css";
import "./global.css";
import "./reset.css";

function App() {
  const isBuyCrypto = useSelector((state) => state.ui.isBuyCrypto);
  const dispatch = useDispatch();

  // Redux store initialisation
  useEffect(() => {
    dispatch(initFetchPrice());
  }, []);

  // UI: If it's buying, display fiat above crytpo, and vice cersa
  const cryptoFiatOrder = isBuyCrypto ? ["fiat", "crypto"] : ["crypto", "fiat"];

  return (
    <div className="App">
      <Header />
      <h1>{isBuyCrypto ? "Buy" : "Sell"} Crypto</h1>
      <BuySellPanel />
      <ExchangeRate />
      {cryptoFiatOrder.map((cat, index) => (
        <CurrencyBlock currencyCat={cat} key={cat} isSpend={index === 0} />
      ))}
      <BottomButton />
    </div>
  );
}

export default App;
