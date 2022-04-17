import { createGlobalStyle } from "styled-components";
import Colors from "./colors";

const GlobalStyles = createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500;700&display=swap'); */

*,
::before,
::after {
    margin: 0;
    padding: 0;
    outline: 0;
  }

body {
    background-color: ${Colors.background};
    font-family: 'Roboto', sans-serif;
    font-size: 62.5% rem;
    overflow-x: hidden;
}

ul {
  list-style: none;
}

ul li a {
  text-decoration: none;
}
`;

export default GlobalStyles;
