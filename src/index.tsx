import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { MenuContextProvider } from "./Context/MenuContext";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html,
  body {
    @media screen and (min-width: 767px) {
      overflow: hidden;
    }
  }

  a {
    color: #fff;
    transition: all 0.3s;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    -ms-transition: all 0.3s;
  }

  body {
    background-color: #17181a;
    color: #fff;
    font-weight: normal;
    font-size: 16px;
  }
`;

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <MenuContextProvider>
        <GlobalStyle />
        <App />
      </MenuContextProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
