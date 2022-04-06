import React from "react";
import { Icone } from "../UI";

import { BsBugFill } from "react-icons/bs";
import { BsBug } from "react-icons/bs";

const claro = <Icone  alt="Tema claro" > <BsBugFill/> </Icone>
const escuro = <Icone  alt="Tema escuro"> <BsBug/> </Icone>


export default ({ tema }) => (tema ? escuro : claro)

