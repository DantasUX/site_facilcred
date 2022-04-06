/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";
import {primaryColor , darkBackground} from "../UI/variables"


const Container = styled.div`
  background: linear-gradient(180deg, ${primaryColor} 60%, ${darkBackground} 40%);
  margin-top: -10rem;
  padding-bottom: 50px ;

`;

const BoxSimulator = styled.div`
  height: 500px ;
  max-width: 700px ;
  margin: auto ;
  background-color: #f1f1f1 ;
  border-radius: 8px ;
  box-shadow: 0px 10px 25px black;
  margin-top: 15rem ;
  padding: 2rem;

`;
const Line = styled.div`
  height: 6px;
  width: 10rem;
  border-radius: 50px;
  background-color: #A6A6A6;
  margin: auto ;
  margin-bottom: 30px;
`;
const Title = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 20px ;
  color: ${({ theme }) => theme.text};

  p{
    font-size: 0.8rem;

  }
`;
const Calculate = styled.input`
  width: 100% ;
  height: 35px;
  border-radius: 5px ;
  border: 2px solid #A6A6A6;
`;
const Result = styled.div`
`;
const Table = styled.div`
`;


function Simulator(){
  return (
    <Container >
      <BoxSimulator>
        <Line/>
        <Title>SIMULADOR <p> Faça já sua simuláção e solicite seu emprestimo</p></Title>
        <Calculate/>
        <Result>
          <Table/>
        </Result>
      </BoxSimulator>
    </Container>
  );

}


export default Simulator;