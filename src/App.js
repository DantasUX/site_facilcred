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
import Differentials from "./components/Differentials/index"




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
        <Differentials/>
      </>
      {/*
      <Contacts/>
      <Baseboard/>*/}
     </ThemeProvider>
  );
}

export default App;
