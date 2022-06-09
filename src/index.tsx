import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Spartan:400,700&display=swap");

  html {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-height: 100vh;
    background: #c9ced3;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Spartan, sans-serif;
    font-size: 12px;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
