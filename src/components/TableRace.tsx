import * as React from "react";
import { HTMLAttributes } from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
interface IRaceData {
  year: string;
  grandPrix: string;
  date: string;
  winner: string;
  car: string;
  laps: string;
  time: string;
}

interface ITableRaceProps extends HTMLAttributes<HTMLDivElement> {
  data: IRaceData[];
}

export const TableRace: React.FunctionComponent<ITableRaceProps> = ({
  data,
  ...rest
}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Year</TableCell>
            <TableCell align="left">Grand Pix</TableCell>
            <TableCell align="left">Winner</TableCell>
            <TableCell align="left">Car</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length > 0 ? (
            data.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{row.year}</TableCell>
                <TableCell component="th" scope="row">
                  {row.grandPrix}
                </TableCell>
                <TableCell align="left">{row.winner}</TableCell>
                <TableCell align="left">{row.car}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">{row.time}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell align="center" rowSpan={6}>
                Not found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
