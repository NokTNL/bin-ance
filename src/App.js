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

/* const CURRENCY_PAIR_DEFAULT = {
  crypto: "BTC",
  fiat: "USD",
}; */

function App() {
  // Redux
  const isBuyCrypto = useSelector((state) => state.ui.isBuyCrypto);
  const price = useSelector((state) => state.fetchPrice.price);
  const isPriceLoading = useSelector(
    (state) => state.fetchPrice.isPriceLoading
  );
  const currencyPair = useSelector((state) => state.fetchPrice.currencyPair);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initFetchPrice());
  }, []);

  /** Delete these ----> */
  /* 
  // useState
  const [_currencyPair, setCurrencyPair] = useState(CURRENCY_PAIR_DEFAULT);
  // This price is always fiat per crypto (at least for the options provided in our database.js)
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
  */

  /** Delete these ----> */

  // If it's buying, display fiat above crytpo, and vice cersa
  const cryptoFiatOrder = isBuyCrypto ? ["fiat", "crypto"] : ["crypto", "fiat"];

  return (
    <div className="App">
      <Header />
      <h1>{isBuyCrypto ? "Buy" : "Sell"} Crypto</h1>
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
          price={price}
          key={cat}
          isSpend={index === 0}
        />
      ))}
      <BottomButton />
    </div>
  );
}

export default App;
