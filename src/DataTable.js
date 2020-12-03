import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import * as tableData from "./mockJson.json";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function DataTable() {
  const classes = useStyles();
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    createCols();
  }, []);

  const createCols = () => {
    const keyNames = Object.keys(tableData.default[0]);
    setColumns(keyNames);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell key={column} align='right' style={{ minWidth: 170 }}>
                  {column}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.default.map(row => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1}>
                  {columns.map(column => {
                    const value = row[column];
                    return (
                      <TableCell key={column} align='right'>
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
