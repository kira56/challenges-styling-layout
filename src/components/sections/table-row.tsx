import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const TableRow = () => {
  return (
    <TableRowContent>
      <TableRowItem>
        <RowBox /> Travel Landing Page
      </TableRowItem>
      <TableRowItem>5 members</TableRowItem>
      <TableRowItem>Mar 8.2022</TableRowItem>
      <TableRowItem>
        <FontAwesomeIcon icon={faEllipsisH} />
      </TableRowItem>
    </TableRowContent>
  );
};

export default TableRow;

const TableRowContent = styled.tr``;

const TableRowItem = styled.td`
  text-align: start;
  border: none;
  background-color: #fff;
  font-weight: 300;
  font-size: 14px;
  padding: 13px 0;

  &:first-child {
    display: flex;
    align-items: center;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding-left: 17px;
  }

  &:last-child {
    text-align: end;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    padding-right: 17px;
  }
`;

const RowBox = styled.div`
  width: 21px;
  height: 21px;
  border-radius: 5px;
  background-color: #4ac29d;
  margin-right: 10px;
`;
