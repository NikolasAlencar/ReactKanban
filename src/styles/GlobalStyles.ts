import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f0f0f0;
    color: #333;
  }

  html, body{
    height: 100%;
  }
`;

export default GlobalStyles;
