import * as React from 'react';
import { Table, TableContainer, TableHead, TableCell, TableRow, TableBody } from '@mui/material';
import Paper from '@mui/material/Paper';
import './main.css'
import { Link } from 'react-router-dom';


export default function TableData({items, limit, titles, properties, linkAction}) {

  function handlClickRow(id){
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className='bg-light'>
            <TableRow >
              {titles.map((title, index)=>(
                <TableCell key={index} align="center">{title}</TableCell>
              ))}
            </TableRow>
        </TableHead>

        <TableBody>
        {items.map((item, iItem) => (
            <TableRow onClick={() => handlClickRow(item[properties[0]])} key={iItem}>
             {properties.map((property, iProperty)=>(
                <TableCell align="center" key={iProperty}>
                  <Link to={linkAction + item[properties[0]]}>{item[property]}</Link>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}