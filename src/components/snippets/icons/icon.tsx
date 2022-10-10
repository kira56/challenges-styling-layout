import React from "react";
import styled from "styled-components";

interface IconProps {
  border?: boolean;
  borderColor?: string;
  bg?: boolean;
}

const Icon = ({ border, borderColor, bg = false }: IconProps) => {
  return <IconContent border={border} borderColor={borderColor} bg={bg} />;
};

export default Icon;

const IconContent = styled.div<IconProps>`
  border: ${(props) =>
    props.border ? `1px solid ${props.borderColor}` : "none"};
  width: 15px;
  height: 15px;
  margin-right: 20px;
  font-size: 10px;
  background: ${(props) => (props.bg ? "#C4C4C4" : "transparent")};
`;
