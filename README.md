# bin-ance

<img width="350" alt="" src="https://user-images.githubusercontent.com/94875599/152708663-0e97ffb7-8e2b-4417-8c6a-72815f128631.png">

➡️ Live preview: https://noktnl.github.io/bin-ance/

A clone of [this Binance page](https://www.binance.com/en/buy-sell-crypto) but you can't really buy coins in it (hence the name _"Bin"-ance_...)\
But _smarter_ than the original page because the price updates whenever a new trade pops up in Binance, thanks to the Binance WebSocket API.

### Technical highlights

- _React/Redux_: `useState` for local state management, Redux for global state management using `createSlice`
- _Redux_: handles asynchronous actions with action creator thunks
- _JavaScript_: `async` & `await`, `fetch` API, `WebSocket` API, module design pattern (in `scripts/fetchPrice.js`)
- _CSS_: Responsive design with flexbox; CSS variables

### Credits

- Icons: from https://cryptologos.cc/ and [FontAwesome](https://fontawesome.com)
