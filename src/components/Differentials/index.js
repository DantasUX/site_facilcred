/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from "react";
import styled from "styled-components";
import {primaryColor ,lightText, darkBackground, lightBackground} from "../UI/variables"
import man from "../../img/man.png"
import { BsFillShieldLockFill } from 'react-icons/bs';
import { GiSwipeCard } from 'react-icons/gi';
import { BiDollarCircle } from 'react-icons/bi';
import { BiLike } from 'react-icons/bi';
import  Aos from "aos";
import "aos/dist/aos.css"



const Container = styled.div`
  background: linear-gradient(180deg, ${({ theme }) => theme.body} 50%, ${primaryColor} 50%);
  padding-bottom: 50px ;

  @media (max-width: 600px){
  }
`;
const BoxDiferentials = styled.div`
  max-width: 700px ;
  width: 90% ;
  margin: auto ;
  background-color:   ${lightBackground};
  border-radius: 8px ;
  z-index: 1;
  display: flex ;
  box-shadow: 0px 10px 25px -5px black;



  .header{
    padding: 2rem;
    padding-bottom: 0 ;
  }
`;
const BoxInfo = styled.div`
  width:50% ;
  margin-left: auto ;
  padding: 2rem ;
  display: flex ;
  flex-direction: column ;
  justify-content: flex-end ;
  text-align: right;

  @media (max-width: 760px){
    width: 90%;
  }

`;
const ImgDiferentials = styled.img`
  width: auto ;
  height:  34rem;
  position: absolute ;
  margin-left: -5rem ;
  margin-top: 1rem ;
  z-index: 2;
  @media (max-width: 760px){
    display: none ;
  }

`;
const BoxTitleDiferentials = styled.div`
    display: flex ;
    margin-bottom: 2rem ;

`;
const TitleDiferentials = styled.div`
  font-weight: 900 ;
  font-size: 1.8rem;
  color: ${lightText};
  line-height: 1.2;

  span{
    font-weight: 100 ;
  }
`;
const Line = styled.div`
  height:100% ;
  width: 0.5rem ;
  background-color: ${primaryColor} ;
  margin-left: 1rem ;

`;
const Diferentials = styled.div`
  display: flex ;
  margin-top: 20px ;
  justify-content: flex-end ;
  align-items: center ;

`;
const TextDiferentials = styled.text`
  width: 50% ;
  margin-right: 10px;
`;
const BoxIcone = styled.div`
  background-color: ${darkBackground} ;
  display: flex ;
  border-radius: 50% ;
  padding: 1rem ;
  font-size: 38px ;
  color: #fff ;

`;

function Differentials(){
  useEffect(() =>{
    Aos.init({ duration: 2000});

  },[])


  return (
    <Container id="differentials">
      <BoxDiferentials data-aos="fade-right">
        <ImgDiferentials src={man}/>
        <BoxInfo>
          <BoxTitleDiferentials>
            <TitleDiferentials>
              POR QUE PEDIR EMPRÉSTIMO A<br></br>
              <span>FÁCIL CRED?</span>
            </TitleDiferentials>
            <Line/>
          </BoxTitleDiferentials>
          <Diferentials>

            <TextDiferentials>Rápido, prático e seguro</TextDiferentials>
            <BoxIcone><BsFillShieldLockFill/></BoxIcone>
          </Diferentials>

          <Diferentials>
            <TextDiferentials>Parcelamos em até 24 vezes</TextDiferentials>
            <BoxIcone><GiSwipeCard/></BoxIcone>
          </Diferentials>

          <Diferentials>
            <TextDiferentials>Menores taxas da região</TextDiferentials>
            <BoxIcone><BiDollarCircle/></BoxIcone>
          </Diferentials>

          <Diferentials>
            <TextDiferentials>Confiança e credibilidade</TextDiferentials>
            <BoxIcone><BiLike/></BoxIcone>
          </Diferentials>
        </BoxInfo>


      </BoxDiferentials>
    </Container>
  );

}


export default Differentials;