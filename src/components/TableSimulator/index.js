/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";
import {primaryColor , darkBackground} from "../UI/variables"



import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


function createData(index, parcela,valorparcela, valortotal) {
  return { index, parcela, valorparcela, valortotal };
}

const rows = [
  createData(0, '1x', 'R$ 1.120,00' , 'R$ 1.120,0'),
  createData(1, '2x', 'R$ 599,90' , 'R$ 1.200,0'),
  createData(2, '4x', 'R$ 325,90' , 'R$ 1.300,0'),
  createData(3, '6x', 'R$ 225,00' , 'R$ 1.350,0'),
  createData(4, '12x', 'R$ 120,90' , 'R$ 1.440,0'),
  createData(5, '24x', 'R$ 68,99' , 'R$ 1.679,76'),

];

const BoxTable = styled(Table)`
  width: 80% !important;
  margin: auto ;
  overflow-x: none;

`;


const ResultadosTable = styled(TableBody)`
  .impar{
    background-color: #fff !important;
    border-radius: 50px !important ;
  }
  .par{

  }
`;

const ItemTable = styled(TableRow)`
  padding-top: 5px !important ;
  height: 5px  !important ;



`;

const ItemTableTitles = styled(TableCell)`
  font-size: 0.6rem !important ;
  height: 5px !important ;
  padding: 5px !important ;
  white-space: nowrap;
`;

const ItemTableTitlesVTotal = styled(ItemTableTitles)`
@media (max-width: 490px){
    display: none !important ;
  }

`;

const ItemTableParcela = styled(TableCell)`
  font-size: 1.2rem !important ;
  font-weight: 800 !important ;
  padding: 5px !important ;
  padding-left: 20px !important ;
  color: ${primaryColor} !important ;
  padding-left: 5px ;
  width: 15% ;

`;
const ItemTableValorParcela = styled(TableCell)`
  font-size: 1.2rem !important ;
  font-weight: 800 !important ;
  color: ${darkBackground} !important ;
  width: 35%;
  white-space: nowrap;
  overflow: hidden;

  p{ display: none}
  @media (max-width: 490px){
    p{
      display: block;
      font-size: 0.8rem !important ;
      font-weight: 100 !important ;
    }
  }

`;
const ItemTableValorTotal = styled(TableCell)`
  width: 30%;
  @media (max-width: 490px){
    display: none !important ;
  }
`;
const ItemTableCedulaBtn = styled(TableCell)`
  width: 30%;

`;


const ItemTableBtn = styled(Button)`
  color: #fff !important;
  background-color: ${primaryColor} !important;
  height: 2rem ;
  font-size: 0.8rem !important;
  overflow: hidden;

`;

function TableSimulator(){
  return (
    <BoxTable>
      <TableHead>
        <ItemTable>
          <ItemTableTitles align="left">Parcelas</ItemTableTitles>
          <ItemTableTitles align="left">Valor da Parcela</ItemTableTitles>
          <ItemTableTitlesVTotal align="left">Valor Total</ItemTableTitlesVTotal>
          <ItemTableTitles align="left"></ItemTableTitles>
        </ItemTable>
      </TableHead>
      <ResultadosTable>
        {rows.map((row) => (
          <ItemTable key={row.parcela}   className={row.index % 2 === 0 ? "impar" : "par"}>
            <ItemTableParcela  align="left">{row.parcela}</ItemTableParcela>
            <ItemTableValorParcela align="left">{row.valorparcela}<p>{row.valortotal}</p></ItemTableValorParcela>
            <ItemTableValorTotal align="left">{row.valortotal}</ItemTableValorTotal>
            <ItemTableCedulaBtn align="right"> <ItemTableBtn>CONTRATAR</ItemTableBtn>    </ItemTableCedulaBtn>
          </ItemTable>
        ))}
      </ResultadosTable>
    </BoxTable>
  );

}


export default TableSimulator;