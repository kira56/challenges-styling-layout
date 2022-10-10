import React from "react";
import styled from "styled-components";
import BarGradient from "../../snippets/bar-gradient";
import Button from "../../snippets/button";
import MenuItem from "../features/menu-item";
import Settings from "../features/settings";

const settings = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "My Files",
    url: "/",
  },
  {
    title: "Recent Files",
    url: "/",
  },
  {
    title: "Shared Files",
    url: "/",
  },
  {
    title: "File Request",
    url: "/",
  },
  {
    title: "Trash",
    url: "/",
  },
];

const Menu = () => {
  return (
    <MenuContent>
      <MenuTop>
        <BarGradient />
        <MenuList>
          {settings.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </MenuList>
      </MenuTop>
      <MenuFooter>
        <Settings />
        <Button text="Create New" plus />
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

  border-bottom: 1px solid #464c61;
`;
