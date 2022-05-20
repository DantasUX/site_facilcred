/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";
import {primaryColor , darkBackground} from "../UI/variables"



const Container = styled.div`
  background-color: ${primaryColor};
  height: 50rem;

  @media (max-width: 600px){

  }
`;



function Baseboard(){
  return (
    <Container>
      logo facil cred
    </Container>
  );

}


export default Baseboard;