import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital@1&family=Playfair+Display:ital@1&family=Roboto&display=swap');
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: 'Noto Serif', serif;
font-family: 'Playfair Display', serif;
font-family: 'Roboto', sans-serif; }
`;

export default GlobalStyles;
