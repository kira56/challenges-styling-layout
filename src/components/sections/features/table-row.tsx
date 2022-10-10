import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import BoxList from "../../snippets/box/box-list";
interface TableRowProps {
  title: string;
  background?: string;
  members: number;
  date: string;
}

const TableRow = ({ title, background, members, date }: TableRowProps) => {
  return (
    <TableRowContent>
      <tr>
        <TableRowItem>
          <BoxList bg={background} /> {title}
        </TableRowItem>
        <TableRowItem>{members} members</TableRowItem>
        <TableRowItem>{date}</TableRowItem>
        <TableRowItem>
          <FontAwesomeIcon icon={faEllipsisH} />
        </TableRowItem>
      </tr>
    </TableRowContent>
  );
};

export default TableRow;

const TableRowContent = styled.tbody``;

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
