import { useEffect, useState } from "react";
import BuySellPanel from "./components/BuySellPanel";
import CurrencyInput from "./components/CurrencyInput";
import ExchangeRate from "./components/ExchangeRate";
import fetchPrice from "./fetchPrice";

import "./App.css";
import "./global.css";
import logoImg from "./img/bin-ance_logo.png";
import creditImg from "./img/credit.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
      <header>
        <img alt="bin-ance" src={logoImg} className="header__logo-img" />
        <img
          alt="powered by the Binance API"
          src={creditImg}
          className="header__credit-img"
        />
      </header>
      <h1>Buy Crypto</h1>
      <main>
        <BuySellPanel buyOrSell={buyOrSell} setBuyOrSell={setBuyOrSell} />
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
        <a className="bottom-button" href="https://github.com/NokTNL/bin-ance">
          <button>Proceed</button>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </main>
    </div>
  );
}

export default App;
