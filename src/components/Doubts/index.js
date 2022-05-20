/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";
import {primaryColor , darkBackground} from "../UI/variables"



const Container = styled.div`
  background: linear-gradient(180deg,${primaryColor}  50%,  ${({ theme }) => theme.body} 50%);
  height: 50rem;

  @media (max-width: 600px){

  }
`;



function Doubts(){
  return (
    <Container>
      ficou com duvidas?
    </Container>
  );

}


export default Doubts;