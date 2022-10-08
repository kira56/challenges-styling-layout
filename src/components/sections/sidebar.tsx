import React from "react";
import styled from "styled-components";
import CardInfo from "../snippets/card/card-info";
import SidebarMenu from "./sidebar-menu";

const Sidebar = () => {
  // Add vertical properties in this component
  return (
    <Aside>
      <SidebarMenu />
      <AsideBottom>
        <CardInfo />
      </AsideBottom>
    </Aside>
  );
};

export default Sidebar;

const Aside = styled.aside`
  background-color: #f5f6fc;
  grid-area: sidebar;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AsideBottom = styled.div`
  padding: 20px 33px;
`;
