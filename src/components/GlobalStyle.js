import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
  text-decoration: none;
  overflow-x: hidden ;
  overflow: hidden;
}
body{

  background-color: ${({ theme }) => theme.body};
}



`