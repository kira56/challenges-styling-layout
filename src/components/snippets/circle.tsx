import React from "react";
import styled from "styled-components";

const Circle = () => {
  return (
    <CircleContent>
      <CircleStyled />
      <CircleStyled />
      <CircleStyled />
    </CircleContent>
  );
};

export default Circle;

const CircleContent = styled.ul`
  display: flex;
  transform: translateX(-10px);
  & > * + * {
    background-color: white;
    position: absolute;
    transform: translateX(-8px);
  }

  & > * + * + * {
    background-color: white;
    position: absolute;
    transform: translateX(-16px);
  }
`;

const CircleStyled = styled.li`
  position: relative;
  list-style: none;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  border: 1px solid #bec0c8;
`;
