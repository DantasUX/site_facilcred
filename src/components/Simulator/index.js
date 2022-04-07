/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";
import {primaryColor , darkBackground} from "../UI/variables"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AiOutlineSend } from 'react-icons/ai';
import TableSimulator from "../TableSimulator/index"
import logocinza from "../../img/marcadagua.png"




const Container = styled.div`
  background: linear-gradient(180deg, ${primaryColor} 25rem, ${darkBackground} 25rem);
  margin-top: -10rem;
  padding-bottom: 50px ;
  @media (max-width: 500px){
    margin-top: -8.5rem;

  }

`;

const BoxSimulator = styled.div`
  max-width: 700px ;
  width: 90% ;
  margin: auto ;
  background-color:  ${({ theme }) => theme.body};
  border-radius: 8px ;
  box-shadow: 0px 10px 25px black;
  margin-top: 15rem ;
  padding: 0rem;
  position: relative;
  z-index: 1;
  .header{
    padding: 2rem;
    padding-bottom: 0 ;
  }
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
  border-left: 4px solid ${primaryColor};
  padding-left: 1rem ;
  font-size: 1.4rem;
  margin-bottom: 20px ;
  color: ${({ theme }) => theme.text};

  p{
    font-size: 0.8rem;
    font-weight: 100;

  }
`;
const Calculate = styled.div`
  display: flex ;
  align-items: center ;
  justify-content: space-between ;
  background-color: #fff ;
  padding: 2rem ;
  padding-top: 1rem ;
`;
const ImputCalculate = styled(TextField)`
  width: 80%  !important;
`;
const BtnCalculate = styled(Button)`
  color: #fff !important;
  background-color: ${primaryColor} !important;
  height: 2.5rem ;

`;


const Result = styled(BoxSimulator)`
  margin-top: -0.8rem ;
  padding: 5rem 1rem ;
  z-index: 0 ;
  background-image: url(${logocinza});
  background-repeat: no-repeat, repeat;
  background-position: bottom -50px left -50px;
  background-color: #E7E7E9;
  animation: animeResultado 2s ;

  @keyframes animeResultado{
    0%{
      opacity: 0 ;
      height: 0px ;
      margin-top: -10rem ;
    }
    100%{
      opacity: 1 ;
      height: auto ;
      margin-top: -0.8rem ;
    }
  }
`;

/*const Table = styled.div``;*/


function Simulator(){
  return (
    <Container >
      <BoxSimulator>
        <div className="header">
          <Line/>
          <Title>SIMULADOR <p> Faça já sua simuláção e solicite seu emprestimo</p></Title>
        </div>

        <Calculate>
          <ImputCalculate
            variant="standard"
            label="Digite o valor que deseja "
            size="small"
            fullWidth
            id="fullWidth"
            margin="normal"
            color="success" focused
          />
          <BtnCalculate><AiOutlineSend/></BtnCalculate>
        </Calculate>
      </BoxSimulator>
      <Result>
        <TableSimulator/>
      </Result>
    </Container>
  );

}


export default Simulator;