import React from "react";
import styled from "styled-components";
import BoxList from "../../snippets/box/box-list";

const settings = [
  {
    title: "Documents",
    files: 720,
    storage: 200,
    bg: "#FF9F00",
  },
  {
    title: "Documents",
    files: 720,
    storage: 125,
    bg: "#689FF8",
  },
  {
    title: "Documents",
    files: 720,
    storage: 75,
    bg: "#4AC29D",
  },
  {
    title: "Documents",
    files: 720,
    storage: 50,
    bg: "#BCBECA",
  },
];

const SidebarList = () => {
  return (
    <ListContent>
      <table>
        <tbody>
          {settings.map((item, index) => (
            <ListItem key={index}>
              <td>
                <BoxList size="lg" bg={item.bg} />
              </td>
              <td
                style={{
                  textAlign: "start",
                  width: "65%",
                }}
              >
                <ListTitle>{item.title}</ListTitle>
                <ListText>{item.files} files</ListText>
              </td>
              <td>
                <BoxStorage>{item.storage}GB</BoxStorage>
              </td>
            </ListItem>
          ))}
        </tbody>
      </table>
    </ListContent>
  );
};

export default SidebarList;

const ListContent = styled.div`
  width: 100%;
  table {
    width: 100%;
  }
`;

const ListItem = styled.tr`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #e0e7f1;
`;

const ListTitle = styled.h5`
  font-weight: 400;
`;

const ListText = styled.p`
  font-size: 10px;
  color: gray;
`;

const BoxStorage = styled.div`
  background-color: #fff;
  border-radius: 5px;
  width: 70px;
  padding: 6px 0;
  font-size: 12px;
`;
