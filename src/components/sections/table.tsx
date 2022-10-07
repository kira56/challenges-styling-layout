import React from "react";
import styled from "styled-components";
import TableRow from "./table-row";

const Table = () => {
  return (
    <TableStyled>
      <thead>
        <TableTitle>Name</TableTitle>
        <TableTitle>Members</TableTitle>
        <TableTitle>Last Modified</TableTitle>
      </thead>
      <TableRow />
      <TableRow />
      <TableRow />
    </TableStyled>
  );
};

export default Table;

const TableStyled = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 15px;
`;

const TableTitle = styled.th`
  text-align: start;
  padding: 10px 0;
`;
