import React from "react";
import styled from "styled-components";
import Icon from "../../snippets/icons/icon";

const SidebarMenu = () => {
  return (
    <SidebarNav>
      <SidebarNavList>
        <SidebarNavItem>
          <Icon bg={true} />
          <Icon bg={true} />
        </SidebarNavItem>
        <SidebarNavItem>
          Name <BoxUser />
        </SidebarNavItem>
      </SidebarNavList>
    </SidebarNav>
  );
};

export default SidebarMenu;

const SidebarNav = styled.nav`
  list-style: none;
  padding: 5px 30px;
  border-bottom: 1px solid #e0e7f1;
`;

const SidebarNavList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-inline-start: 0;
`;

const SidebarNavItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
`;

const BoxUser = styled.div`
  width: 31px;
  height: 31px;
  background-color: #c4c4c4;
  border-radius: 50%;
  margin-left: 10px;
`;
