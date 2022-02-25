// This module has to be passed a setPriceFunc for updating the price continuously
// Syntax: setPriceFunc(newPrice: number)

// For fetching latest data once
async function fetchLatestTrade(cryptoTypeUpper, fiatTypeUpper) {
  try {
    const response = await fetch(
      `https://api.binance.com/api/v3/trades?symbol=${cryptoTypeUpper}${fiatTypeUpper}`
    );
    const obj = await response.json();
    const { price } = obj[obj.length - 1];
    return price;
  } catch {
    alert(
      "Failed to get the info. Maybe the pair you chose is not available on Binance."
    );
  }
}

// WebSocket management
const socketMod = (function () {
  let _socket;

  const addSocket = (cryptoTypeUpper, fiatTypeUpper, setPriceFunc) => {
    const crypto = cryptoTypeUpper.toLowerCase();
    const fiat = fiatTypeUpper.toLowerCase();

    // the socket object is stored here for future reference (not BOUND here, added globally)
    _socket = new WebSocket(
      `wss://stream.binance.com:9443/ws/${crypto}${fiat}@trade`
    );

    _socket.onopen = async function () {
      // To get the latest price without waiting new trades to happen
      const latestPrice = await fetchLatestTrade(
        cryptoTypeUpper,
        fiatTypeUpper
      );
      setPriceFunc(parseFloat(latestPrice));
      console.log(
        `[open] Connection established for ${cryptoTypeUpper}/${fiatTypeUpper}`
      );
    };

    _socket.onmessage = ({ data }) => {
      console.log(
        `[message] Message received for ${cryptoTypeUpper}/${fiatTypeUpper}`
      );
      const { p: price } = JSON.parse(data);
      setPriceFunc(parseFloat(price));
    };

    _socket.onclose = function (event) {
      if (event.wasClean) {
        console.log(
          `[close] Connection for ${cryptoTypeUpper}/${fiatTypeUpper} closed cleanly, code=${event.code} reason=${event.reason}`
        );
      } else {
        console.log(
          `[close] Connection for ${cryptoTypeUpper}/${fiatTypeUpper} died, code=${event.code} reason=${event.reason}`
        );
      }
    };

    _socket.onerror = function (error) {
      console.log(`[error] ${error.message}`);
    };
  };

  const closeSocket = () => {
    _socket && _socket.close();
  };
  return { addSocket, closeSocket };
})();

// Exported module
const mainMod = (() => {
  let setPriceFunc;

  const init = (func) => {
    setPriceFunc = func;
  };

  const setPair = ({ crypto, fiat }) => {
    // USD is traded in the name "BUSD" on Binance
    if (fiat === "USD") fiat = "BUSD";

    socketMod.closeSocket();
    socketMod.addSocket(crypto, fiat, setPriceFunc);
  };
  return { init, setPair };
})();

export default mainMod;
