/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";
import {primaryColor , darkBackground, darkText} from "../UI/variables"

import service01 from "../../img/servico01.png"
import service02 from "../../img/servico02.png"
import service03 from "../../img/servico03.png"
import backContainer from "../../img/bakgraude.png"


const Container = styled.div`
  background-color: ${({ theme }) => theme.body};
  background-image: url(${backContainer});
  background-repeat: repeat-x;
  background-size: 130rem;
  padding-bottom: 10rem ;
  @media (max-width: 600px){
    margin-top: 100px ;
    background-size: 120rem;

  }
`;
const BoxInfo = styled.div`
  margin-top: 10px ;
  max-width: 900px ;
  margin: auto ;
  margin-top: 8rem ;
  justify-content: space-around ;
  align-items: center ;
  @media (max-width: 600px){
    flex-direction: column-reverse ;
    padding: 0 ;
    margin-top:0 ;
  }
`;
const DifferentialTitle = styled.h1`
  color: ${({ theme }) => theme.text};
  font-weight: 100 ;
  animation: animeTitle 3s ;
  line-height: 1.2;
  overflow: hidden;
  padding-left: 2rem ;

  p{
    font-weight: 900 ;
    overflow: hidden;
  }
  div{
    margin-top: 10px ;
    width: 10rem;
    height: 5px ;
    border-radius: 50px;
    background-color: ${primaryColor} ;
    animation: animeline 3s ;
  }

  @keyframes animeTitle{
    0%{opacity: 0 ;}
    20%{opacity: 0 ;}
    100%{opacity: 1 ;}
  }
  @keyframes animeline{
    0%{width: 0 ; opacity: 1 ;}
    100%{width: 10rem;opacity: 1 ;}
  }
`;
const BoxDifferential = styled.div`
  display: flex ;
  justify-content: space-around;
  margin-top: 5rem ;
  flex-direction: row;

  @media (max-width: 550px){
    flex-direction: column ;
    align-items: center ;

  }

`;
const ItemDifferential = styled.div`
  display: flex ;
  flex-direction:column ;
  width: 32%;
  padding: 0.8rem ;

  @media (max-width: 550px){
    flex-direction: row ;
    width: 90%;
  }
`;
const IconeDifferential = styled.img`
  @media (max-width: 550px){
    width: 40%;
    margin: auto ;
  }
`;
const DescriptionDifferential = styled.span`
  color: ${({ theme }) => theme.text};
  margin-top: 2rem ;
  text-align: center ;
  padding: 0 0.8rem ;
  font-weight: 600 ;
  @media (max-width: 550px){
    width: 70%;
  }

`;

function Differentials(){
  return (
    <Container >
      <BoxInfo>
        <DifferentialTitle>
          Conheça os Serviços <p>da FacilCred</p>
          <div/>
        </DifferentialTitle>
        <BoxDifferential >
          <ItemDifferential>
            <IconeDifferential src={service01}/>
            <DescriptionDifferential>
              Empréstimo com cartão de credito
            </DescriptionDifferential>
          </ItemDifferential>

          <ItemDifferential>
          <IconeDifferential src={service02}/>
            <DescriptionDifferential>
            Antecipação do seu FGTS na FacilCred
            </DescriptionDifferential>
          </ItemDifferential>

          <ItemDifferential>
          <IconeDifferential src={service03}/>
            <DescriptionDifferential>
            Consignado (para aposentados e pensionistas)
            </DescriptionDifferential>
          </ItemDifferential>
        </BoxDifferential>
      </BoxInfo>
    </Container>
  );

}


export default Differentials;