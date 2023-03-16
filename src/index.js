import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import { createStore, } from "redux"; // Leaving this as a reminder that this is deprecated
import { legacy_createStore as createStore, applyMiddleware } from "redux";

import App from "./components/App";
import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
