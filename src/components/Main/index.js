/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";


const Container = styled.div`
  /*background-color: ${({ theme }) => theme.body};*/
  margin-top: 10px ;
  max-width: 900px ;
  margin: auto ;
  display: flex ;
  height: 25rem ;
  justify-content: space-around ;
  align-items: center ;
`;

const Description = styled.div`
  width:40% ;
`;

const Subject = styled.h1`
  font-weight: 100 ;
  font-size: 1.8rem;
  line-height: 1;
  overflow: hidden;
  color: ${({ theme }) => theme.text};
  margin-bottom: 2rem ;

  p{
    font-weight: 800 ;
    overflow: hidden;

  }
`;

const BtnSimulator = styled.button`
`;

const ImgMain = styled.img`
  background-color: #e5e5e5 ;
  width: 50% ;
  height: 10px ;
`;


function Main(){
  return (
    <Container >
      <Description>
        <Subject> ESTAMOS AQUI PARA LHE AJUDAR A REALIZAR <p> SEUS SONHOS </p> </Subject>
        <BtnSimulator> FAÇA SUA SIMULAÇÃO  </BtnSimulator>
      </Description>
      <ImgMain/>
    </Container>
  );

}


export default Main;