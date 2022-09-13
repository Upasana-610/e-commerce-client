import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital@1&family=Playfair+Display&family=Quicksand:wght@300&family=Roboto&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    ${"" /* font-family: 'Noto Serif', serif; */}
    font-family: 'Quicksand', sans-serif;
${"" /* font-family: 'Roboto', sans-serif; */}
}

body {
  max-width: 100%;
  overflow-x: hidden;
  
}

html{
  font-size:62.5%;
}

li{
  list-style:none;
}
::-webkit-scrollbar {
  width: 5px;
  height:5px
}
/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(156, 149, 149); 
  border-radius: 10px;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #6d6c6c; 
}
`;
export default GlobalStyle;
