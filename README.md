# bin-ance

<img width="350" alt="" src="https://user-images.githubusercontent.com/94875599/152708663-0e97ffb7-8e2b-4417-8c6a-72815f128631.png">

➡️ Live preview: https://noktnl.github.io/bin-ance/

A clone of [this Binance page](https://www.binance.com/en/buy-sell-crypto) but you can't really buy coins in it (hence the name _"Bin"-ance_...)\
But _smarter_ than the original page because the price updates whenever a new trade pops up in Binance, thanks to the Binance WebSocket API.

### Technical highlights

- _React_: `useState` for local state management, `useEffect` for handling asynchronous side effects
- _Redux_: global states organised in slices
- _JavaScript_: `async` & `await`, `fetch` API, `WebSocket` API, module design pattern (in `fetchPrice.js`)
- _CSS_: flexbox, variables, full-page overlay
