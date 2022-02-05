/* 
 This was generated using a stupid JS code:
    let arr = [
        { symbol: "USD", name: "US Dollar" },
        { symbol: "EUR", name: "Euro" },
        { symbol: "GBP", name: "British Pound" },
        //
        { symbol: "BTC", name: "Bitcoin" },
        { symbol: "ETH", name: "Ethereum" },
        { symbol: "BNB", name: "Binance Coin" },
        { symbol: "ADA", name: "Cardano" },
        { symbol: "ATOM", name: "Cosmos" },
        { symbol: "DOGE", name: "Dogecoin" },
        { symbol: "LINK", name: "Chainlink" },
        { symbol: "DOT", name: "Polkadot" },
        { symbol: "SOL", name: "Solana" },
        { symbol: "SHIB", name: "SHIBA INU" },
      ];
      let string1 = "";
      let string2 = "";
      for (const { symbol } of arr) {
        string1 += `${symbol}, `;
        string2 += `import ${symbol} from "./img/currency-type/${symbol}.png"\n`;
      }
      console.log(string1, string2);
*/

import USD from "./img/currency-type/USD.png";
import EUR from "./img/currency-type/EUR.png";
import GBP from "./img/currency-type/GBP.png";
//
import BTC from "./img/currency-type/BTC.png";
import ETH from "./img/currency-type/ETH.png";
import BNB from "./img/currency-type/BNB.png";
import ADA from "./img/currency-type/ADA.png";
import ATOM from "./img/currency-type/ATOM.png";
import DOGE from "./img/currency-type/DOGE.png";
import LINK from "./img/currency-type/LINK.png";
import DOT from "./img/currency-type/DOT.png";
import SOL from "./img/currency-type/SOL.png";
import SHIB from "./img/currency-type/SHIB.png";

const images = (function () {
  return {
    USD,
    EUR,
    GBP,
    //
    BTC,
    ETH,
    BNB,
    ADA,
    ATOM,
    DOGE,
    LINK,
    DOT,
    SOL,
    SHIB,
  };
})();

export { images };
