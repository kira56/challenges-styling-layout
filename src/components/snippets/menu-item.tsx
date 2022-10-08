import React from "react";
import styled from "styled-components";
// import InputCheckBox from "./input-checkbox";

const MenuItem = () => {
  return (
    <ItemStyled>
      <BoxStyled />
      <p>Home</p>
    </ItemStyled>
  );
};

export default MenuItem;

const ItemStyled = styled.li`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

export const BoxStyled = styled.div`
  border: 1px solid;
  width: 15px;
  height: 15px;
  margin-right: 20px;
  font-size: 10px;
`;
