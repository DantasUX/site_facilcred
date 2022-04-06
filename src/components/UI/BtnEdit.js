import styled from "styled-components";
import Fab  from '@mui/material/Fab';
import {primaryColor, darkText} from "./variables";



const BtnEdit = styled(Fab)`
    background-color: ${primaryColor} !important;
    color: ${darkText}!important;
    position: fixed !important;
    bottom: 1rem ;
    right: 1rem ;



`


export default BtnEdit;