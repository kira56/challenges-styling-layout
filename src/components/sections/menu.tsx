import React from "react";
import styled from "styled-components";
import BarGradient from "../snippets/bar-gradient";
import Button from "../snippets/button";
import MenuItem from "../snippets/menu-item";

const Menu = () => {
  return (
    <MenuContent>
      <MenuTop>
        <BarGradient />
        <MenuList>
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </MenuList>
      </MenuTop>
      <MenuFooter>
        <Button />
      </MenuFooter>
    </MenuContent>
  );
};

export default Menu;

const MenuContent = styled.div`
  background-color: #343951;
  color: white;
  grid-area: menu;
  padding: 36px 40px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const MenuTop = styled.div`
  /* pending add styles */
`;

const MenuFooter = styled.div`
  /* pending add styles */
`;

const MenuList = styled.ul`
  padding-top: 50px;
  padding-bottom: 30px;
  padding-inline-start: 0;
  border-bottom: 1px solid #464c61;
`;
