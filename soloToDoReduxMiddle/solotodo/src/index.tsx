import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./stores/reducer";
import rootSaga from "./sagas/saga";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);