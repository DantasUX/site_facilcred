/* eslint-disable import/no-anonymous-default-export */
import React, {useState} from "react";
import styled from "styled-components";
import {primaryColor} from "../UI/variables"
import { HiMenu } from 'react-icons/hi';

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

`;

const Logo = styled.img`
  width: 120px ;
  src: ${logoDarck};
`;

const Links = styled.div`
  display: flex ;
  align-items: center;
  @media (max-width: 600px){
    position: absolute ;
    right: 0;
    top: 3.5rem;
    width: 45vw;
    height: 92vh ;
    flex-direction: column ;
    align-items: center ;
    background-color: ${({ theme }) => theme.menu} !important;
    display: ${(props) => props.status ? "flex" : "none" } ;
    box-shadow: -5px 5px 5px  ${({ theme }) => theme.shadow};


  }
`;

const Link = styled.a`
  font-size: 0.8rem ;
  font-weight: 600 ;
  padding: 0.8rem ;
  text-decoration: none ;
  color: ${({ theme }) => theme.text} !important;
  @media (max-width: 600px){
    color: ${({ theme }) => theme.textMenu} !important;
  }

`;

const LinksSimulador = styled(Link)`
  background-color: ${primaryColor} ;
  color: #fff !important;
  border-radius: 8px ;
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
         <Link href="#">Diferencial</Link>
         <Link href="#">Contatos</Link>
         <LinksSimulador href="#">Simulador</LinksSimulador>
       </Links>
       <BtnResponsive onClick={() => setDisplayMenu(!displayMenu)}><HiMenu/></BtnResponsive>
       </Menu>
    </Container>
  );

}


export default Header;