import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100vh;
  }

  * {
    background: #17181a;
    font-family: "Monsterrat", sans-serif;
    overflow-x: hidden;
    padding: 0;
    margin: 0;
    overflow: hidden;
  }
`;

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
