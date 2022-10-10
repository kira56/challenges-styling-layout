import React from "react";
import styled from "styled-components";
import TableRow from "./table-row";

const settings = [
  {
    background: "#FF9F00",
    title: "Travel Lading Page",
    members: 5,
    date: "Mar 8, 2022",
  },
  {
    background: "#4AC29D",
    title: "True Photos",
    members: 12,
    date: "Mar 8, 2022",
  },
  {
    background: "#FF6860",
    title: "Dashboard Structure",
    members: 10,
    date: "Mar 9, 2022",
  },
  {
    background: "#FF9F00",
    title: "Character Illustration",
    members: 3,
    date: "Mar 10, 2022",
  },
];

const Table = () => {
  return (
    <TableStyled>
      <thead>
        <tr>
          <TableTitle>Name</TableTitle>
          <TableTitle>Members</TableTitle>
          <TableTitle>Last Modified</TableTitle>
        </tr>
      </thead>
      {settings.map((item) => (
        <TableRow key={item.title} {...item} />
      ))}
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
  color: #858a9d;
  font-weight: 400;
  padding: 10px 0;
`;
