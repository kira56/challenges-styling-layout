import React from "react";
import styled from "styled-components";
import CardInfo from "../../snippets/card/card-info";
import SidebarList from "../features/sidebar-list";
import SidebarMenu from "../features/sidebar-menu";
import Storage from "../../snippets/storage";
import Title from "../../snippets/title";

const Sidebar = () => {
  return (
    <Aside>
      <SidebarMenu />
      <AsideStorage>
        <AsideStorageTitle>
          <Title title="Storage" />
        </AsideStorageTitle>
        <AsideGraphic>
          <Storage />
          <p>420.2 GB of 500GB used</p>
          <GraphicUsed>
            <h2>85%</h2>
            <h3>Used</h3>
          </GraphicUsed>
        </AsideGraphic>
      </AsideStorage>
      <AsideContent>
        <SidebarList />
      </AsideContent>
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

const AsideContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 30px;
`;

const AsideStorage = styled.div`
  text-align: start;
  h4 {
    padding: 0 30px !important;
  }
`;

const AsideStorageTitle = styled.div`
  padding: 0 30px;
`;

const GraphicUsed = styled.div`
  background-color: transparent;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    font-weight: 400;
  }
  h3 {
    font-weight: 300;
    font-size: 16px;
    color: #858a9d;
  }
`;

const AsideGraphic = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  text-align: center;

  p {
    font-size: 12px;
    padding-top: 10px;
    color: #858a9d;
  }
`;

const AsideBottom = styled.div`
  padding: 20px 33px;
`;
