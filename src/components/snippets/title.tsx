import React from "react";
import styled from "styled-components";

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return <TitleStyled>{title}</TitleStyled>;
};

export default Title;

const TitleStyled = styled.h1`
  font-size: 20px;
  font-weight: 400;
  line-height: 23.44px;
`;
