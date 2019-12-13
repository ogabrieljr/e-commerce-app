import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body {
  @import url('https://fonts.googleapis.com/css?family=Just+Another+Hand|Open+Sans&display=swap');
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
