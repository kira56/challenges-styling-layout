import React from "react";
import styled from "styled-components";

type TSize = "lg" | "md";

interface Props {
  bg?: string;
  size?: TSize;
}

const BoxList = ({ bg = "#000", size = "md" }: Props) => {
  return <BoxListStyled bg={bg} size={size} />;
};

export default BoxList;

const BoxListStyled = styled.div<Props>`
  width: ${(props) => (props.size === "md" ? "21px" : "30px")};
  height: ${(props) => (props.size === "md" ? "21px" : "30px")};
  border-radius: 5px;
  background-color: ${(props) => props.bg};
  margin-right: 10px;
`;
