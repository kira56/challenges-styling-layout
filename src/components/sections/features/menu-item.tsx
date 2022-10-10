import React from "react";
import styled from "styled-components";
import Icon from "../../snippets/icons/icon";

interface Props {
  title: string;
  url?: string;
}

const MenuItem = ({ title }: Props) => {
  return (
    <ItemStyled>
      <Icon border={true} borderColor="#fff" />
      <p>{title}</p>
    </ItemStyled>
  );
};

export default MenuItem;

const ItemStyled = styled.li`
  display: flex;
  align-items: center;
  font-size: 14px;
  padding-bottom: 30px;
`;
