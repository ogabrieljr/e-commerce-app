import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body {
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  padding: 20px 60px;

  @media screen and (max-width: 800px) {
  font-size: 15px;
  padding: 0px
  }
}

a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
}`;
