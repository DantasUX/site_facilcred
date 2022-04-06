/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";


const Container = styled.div`
  background-color: ${({ theme }) => theme.body};
  margin-top: 10px ;
  height: 90vh;
`;

function Main(){
  return (
    <Container >

    </Container>
  );

}


export default Main;