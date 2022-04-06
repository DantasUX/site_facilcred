/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";
import {primaryColor} from "../UI/variables"
import Button from '@mui/material/Button';
import { AiFillCaretDown } from "react-icons/ai";
import boneco from "../../img/boneco.png"



const Container = styled.div`
  /*background-color: ${({ theme }) => theme.body};*/
  margin-top: 10px ;
  max-width: 900px ;
  margin: auto ;
  display: flex ;
  height: 25rem ;
  justify-content: space-around ;
  align-items: center ;
  @media (max-width: 600px){
    flex-direction: column-reverse ;
    padding: 0 ;
    margin-top:0 ;
    height: 20rem;
  }
`;

const Description = styled.div`
  width:35% ;
  @media (max-width: 600px){
    width:80% ;
  }


`;

const Subject = styled.h1`
  font-weight: 100 ;
  font-size: 1.8rem;
  line-height: 1;
  overflow: hidden;
  color: ${({ theme }) => theme.text};
  margin-bottom: 2rem ;
  left: 50px ;
  animation: animeText 1s;


  p{
    font-weight: 800 ;
    overflow: hidden;
  }

  @keyframes animeText{
    10%{opacity: 0 ;}
    100%{opacity: 1 ;}
  }
`;

const BtnSimulator = styled(Button)`
  color: #fff !important;
  border-radius: 5px ;
  border: 2px solid #f1f1f1 !important;
  background-color: ${primaryColor};
  padding: 1rem 0.8rem;
  font-size: 0.7rem !important;
  font-weight: 600 ;

  animation: animeBTN 2s;

  .icone{
    margin-left: 2rem ;
  }

  @keyframes animeBTN{
    0%{
      opacity: 0 ;
      left: -200px;
    }
    100%{
      opacity: 1 ;
      left: 0px;
    }
  }
`;

const ImgMain = styled.img`
  width: 50% ;
  animation:animeImg 2s ;

  @media (max-width: 600px){
    /*position: absolute ;
    opacity: 0.1;
    top: 2rem;
    right: 10px;
    width: 60% ;
    animation: none ;
    filter: blur(1px);
    filter: grayscale(80%);*/
    display: none ;
  }


  @keyframes animeImg{
    0%{
      opacity: 0 ;
      margin-top: 50px;
    }
    50%{ opacity: 1 ; }
    100%{margin-top: 0px; }
  }
`;


function Main(){
  return (
    <Container >
      <Description>
        <Subject> ESTAMOS AQUI PARA LHE AJUDAR A REALIZAR <p> SEUS SONHOS </p> </Subject>
        <BtnSimulator variant="outlined" > FAÇA SUA SIMULAÇÃO  <AiFillCaretDown className="icone"/> </BtnSimulator>
      </Description>
      <ImgMain src={boneco}/>
    </Container>
  );

}


export default Main;