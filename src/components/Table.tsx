import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';

interface ITable {
  data: string[],
  btcusd: number[],
  ltcbtc: number[],
  ltcusd: number[],
  ethbtc: number[],
  ethusd: number[],
}

export default function BasicTable(props: ITable) {
  return (
    <StyledDiv>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>NAME</TableCell>
              <TableCell align="right">LAST</TableCell>
              <TableCell align="right">CHANGE</TableCell>
              <TableCell align="right">CHANGE PERCENT</TableCell>
              <TableCell align="right">HIGH</TableCell>
              <TableCell align="right">LOW</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data?.map((item, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item}
                </TableCell>
                {item === 'btcusd' && props.btcusd ? 
                  <>
                    <TableCell align="right">{props.btcusd[4]}</TableCell>
                    <TableCell align="right">{props.btcusd[1]}</TableCell>
                    <TableCell align="right">{props.btcusd[2]}</TableCell>
                    <TableCell align="right">{props.btcusd[3]}</TableCell>
                    <TableCell align="right">{props.btcusd[5]}</TableCell>
                  </> : null
                }
                {item === 'ltcbtc' && props.ltcbtc ? 
                  <>
                    <TableCell align="right">{props.ltcbtc[4]}</TableCell>
                    <TableCell align="right">{props.ltcbtc[1]}</TableCell>
                    <TableCell align="right">{props.ltcbtc[2]}</TableCell>
                    <TableCell align="right">{props.ltcbtc[3]}</TableCell>
                    <TableCell align="right">{props.ltcbtc[5]}</TableCell>
                  </> : null
                }
                 {item === 'ltcusd' && props.ltcusd? 
                  <>
                    <TableCell align="right">{props.ltcusd[4]}</TableCell>
                    <TableCell align="right">{props.ltcusd[1]}</TableCell>
                    <TableCell align="right">{props.ltcusd[2]}</TableCell>
                    <TableCell align="right">{props.ltcusd[3]}</TableCell>
                    <TableCell align="right">{props.ltcusd[5]}</TableCell>
                  </> : null
                }
                {item === 'ethbtc' && props.ethbtc? 
                  <>
                    <TableCell align="right">{props.ethbtc[4]}</TableCell>
                    <TableCell align="right">{props.ethbtc[1]}</TableCell>
                    <TableCell align="right">{props.ethbtc[2]}</TableCell>
                    <TableCell align="right">{props.ethbtc[3]}</TableCell>
                    <TableCell align="right">{props.ethbtc[5]}</TableCell>
                  </> : null
                }
                {item === 'ethusd' && props.ethusd ? 
                  <>
                    <TableCell align="right">{props.ethusd[4]}</TableCell>
                    <TableCell align="right">{props.ethusd[1]}</TableCell>
                    <TableCell align="right">{props.ethusd[2]}</TableCell>
                    <TableCell align="right">{props.ethusd[3]}</TableCell>
                    <TableCell align="right">{props.ethusd[5]}</TableCell>
                  </> : null
                }
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  margin: 10px;
`