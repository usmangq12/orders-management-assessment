import React from "react";
import styled from "styled-components";
import { Container } from "../shared/Style";

const TableRow = styled.tr``;

const TableCell = styled.td`
  border: 1px solid black;
  border-collapse: collapse;
  padding: 5px;
`;

const TableContent = styled.tbody``;

const TableContainer = styled.table`
  width: 100%;
  margin: 0 auto;
  max-width: 80%;
  border: 1px solid black;
  border-collapse: collapse;
  margin-top: 2rem;
`;

const Table = ({ data }) => {
  const [{ columns, rows }] = data;

  return (
    <Container>
      <TableContainer>
        <th>search</th>
        <th>add items</th>
        <th>print icon</th>
        <TableContent>
          {columns.map((column) => (
            // Create table column container using styled-components
            // <TableColumnr>
              <TableCell>{column}</TableCell>
            // </TableColumn>
          ))}
          {rows.map(({productName, brand, price, quantity, total, status}) => (
            <TableRow>
              <TableCell>{productName}</TableCell>
              <TableCell>{brand}</TableCell>
              <TableCell>{price}</TableCell>
              <TableCell>{quantity}</TableCell>
              <TableCell>{total}</TableCell>
              <TableCell>{status}</TableCell>
            </TableRow>
          ))}
        </TableContent>
      </TableContainer>
    </Container>
  );
};

export default Table;
