/* eslint-disable import/no-anonymous-default-export */
import React, {useState} from "react";
import styled, { keyframes } from "styled-components";
import {primaryColor} from "../UI/variables"
import { HiMenu } from 'react-icons/hi';
import {Link}  from 'react-scroll'

import logoLight from "../../img/logo.png"
import logoDarck from "../../img/logo02.png"



const Container = styled.div`
  background-color: ${({ theme }) => theme.body};
  padding: 10px ;
  font-weight: 200;
  box-shadow: 0px 5px 5px  ${({ theme }) => theme.shadow};

`;
const Menu = styled.nav`
  max-width: 900px;
  margin: auto ;
  display: flex ;
  justify-content:  space-between ;
  align-items: center ;

`;
const Logo = styled.img`
  width: 7rem ;
  height: 1.9rem ;
  animation: cursor 2s;
`;
const Links = styled.div`
  display: flex ;
  align-items: center;
  animation: cursor 1s;
  @media (max-width: 600px){
    position: absolute ;
    right: 0;
    top: 3.3rem;
    width: 45vw;
    height: 102vh ;
    flex-direction: column ;
    align-items: center ;
    background-color: ${({ theme }) => theme.menu} !important;
    display: ${(props) => props.status ? "flex" : "none" } ;
    box-shadow: 0px 10px 25px  #262626;
    z-index: 2 ;
  }

  @keyframes cursor{
    0%{
      opacity: 0 ;
    }
    100%{
      opacity: 1 ;
    }
  }
`;

const BtnMenu = styled(Link)`
  font-size: 0.8rem ;
  font-weight: 400 ;
  padding: 0.8rem ;
  margin-left: 1rem ;
  text-decoration: none ;
  color: ${({ theme }) => theme.text} ;


  :hover{
    animation: linkHouver 1.2s ;
  }

  @keyframes linkHouver{
    0%{
    }
    100%{
      background-color: rgba(0,0,0,0.1);
    }
  }

  @media (max-width: 600px){
    color: ${({ theme }) => theme.textMenu};
  }


`;
const LinksSimulador = styled(Link)`
  background-color: ${primaryColor} ;
  color: #fff !important;
  border-radius: 5px ;
  padding: 0.5rem;
  margin-left: 1rem;

  :hover{
    background-color: #000 ;
    color: ${primaryColor};
  }



`;
const BtnResponsive = styled.button`
  display: none ;
  background-color: ${({ theme }) => theme.body} !important;
  border: none ;
  color: ${({ theme }) => theme.text};
  font-size: 2rem ;
 @media (max-width: 600px){
  display: flex ;
  }

`;

function Header(tema){
  const [displayMenu, setDisplayMenu]= useState(false);
  return (
    <Container elevation={4} >
      <Menu>
       <Logo src={ tema && tema.tema ?  logoLight :  logoDarck}  alt="logotipo da Facil cred" />
       <Links status={displayMenu}>
         <BtnMenu to="differentials" spy={true} smooth={true} offset={50} >Diferencial</BtnMenu>
         <BtnMenu to="services" spy={true} smooth={true} offset={50} >Servi??os</BtnMenu>
         <LinksSimulador to="simulator" spy={true} smooth={true} offset={50} >Simulador</LinksSimulador>
       </Links>
       <BtnResponsive onClick={() => setDisplayMenu(!displayMenu)}><HiMenu/></BtnResponsive>
       </Menu>
    </Container>
  );

}


export default Header;