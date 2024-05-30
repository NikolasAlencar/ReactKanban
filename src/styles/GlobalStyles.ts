import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.color};;
  }

  html, body{
    height: 100%;
  }
`;

export default GlobalStyles;
