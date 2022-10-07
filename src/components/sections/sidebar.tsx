import React from "react";
import styled from "styled-components";

const Sidebar = () => {
  return <Aside>Sidebar</Aside>;
};

export default Sidebar;

const Aside = styled.aside`
  background-color: #f5f6fc;
  grid-area: sidebar;
  color: black;
`;
