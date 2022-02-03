import { useState } from "react";
import BuySellPanel from "./components/BuySellPanel";
import CurrencyInput from "./components/CurrencyInput";
import ExchangeRate from "./components/ExchangeRate";
import Header from "./components/Header";

const CURRENCY_PAIR_DEFAULT = {
  crypto: "BTC",
  fiat: "USD",
};

let price = 35000;

function App() {
  const [currencyPair, setCurrencyPair] = useState(CURRENCY_PAIR_DEFAULT);
  console.log(`selected: ${currencyPair.crypto}/${currencyPair.fiat}`);

  return (
    <div className="App">
      <Header />
      <BuySellPanel />
      <ExchangeRate price={price} currencyPair={currencyPair} />
      <CurrencyInput
        currencyCat="fiat"
        currencyType={currencyPair.fiat}
        setCurrencyPair={setCurrencyPair}
      />
      <CurrencyInput
        currencyCat="crypto"
        currencyType={currencyPair.crypto}
        setCurrencyPair={setCurrencyPair}
      />
      <a href="#">
        <button>Proceed</button>
      </a>
    </div>
  );
}

export default App;
