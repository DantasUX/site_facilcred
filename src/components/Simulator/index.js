/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";
import {primaryColor} from "../UI/variables"


const Container = styled.div`
  background-color: ${primaryColor} ;
  height: 50px ;
  margin-top: -10rem;

`;


function Simulator(){
  return (
    <Container >

    </Container>
  );

}


export default Simulator;