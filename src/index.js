import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import StateProvider from './redux/Store'

ReactDOM.render(
  <StateProvider>
    <StateProvider>
      <App />
    </StateProvider>
  </StateProvider>,
  document.getElementById("root")
);
