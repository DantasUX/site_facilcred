import React, {useState}from 'react';
import { ThemeProvider } from 'styled-components';
import { themeLight, themeDarck } from './components/UI/colorThemes';
import Button from '@mui/material/Button';

import { GlobalStyle } from './components/GlobalStyle';
import './App.css';
import SwitcherTema from "./components/SwitcherTema";
import BtnEdit from "./components/UI/BtnEdit"


import Header from "./components/Header/index"
import Main from "./components/Main/index"
import Simulator from "./components/Simulator/index"
import Services from "./components/Services/index"
import Differentials from "./components/Differentials/index"
import Doubts from "./components/Doubts/index"
import Baseboard from "./components/Baseboard/index"
import Dantas from "./components/Dantas/index"




function App() {
  const [tema, setTema] = useState (true);

  const toggleTema = ()=>{
    setTema((tema)=>!tema);
  }


  return (
    <ThemeProvider theme={tema ? themeLight : themeDarck}>
      <GlobalStyle/>
      <BtnEdit onClick={toggleTema} > <SwitcherTema tema={tema}/> </BtnEdit>
      <>
        <Header tema={(tema)} />
        <Main/>
        <Simulator/>
        <Services/>
        <Differentials/>
      </>
{/*

      <Doubts/>
      <Baseboard/>
      <Dantas/>
*/}

      {/*
      <Baseboard/>*/}
     </ThemeProvider>
  );
}

export default App;
