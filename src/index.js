import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import reducer,{ initialState } from "../reducer";
import {StateProvider} from "../stateProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </StrictMode>,
  rootElement
);
