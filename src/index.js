import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import "./index.css";
import App from "./App";
import mainreducer from "./store/reducer";
import loginreducer from "./store/login-reducer";
import signupreducer from "./store/signup-reducer";
import asyncreducer from "./store/async-reducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  ctr: mainreducer,
  res: asyncreducer,
  sign: signupreducer,
  log: loginreducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
