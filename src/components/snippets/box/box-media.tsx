import React from "react";
import styled from "styled-components";

interface Props {
  shadow: boolean;
}

const BoxMedia = ({ shadow = false }: Props) => {
  return <BoxMediaContent shadow={shadow} />;
};

export default BoxMedia;

const BoxMediaContent = styled.div<Props>`
  width: 30px;
  height: 26px;
  margin-left: 5px;
  background-color: #ff9f00;
  box-shadow: ${(props) =>
    props.shadow ? "-5px 5px 0px 1px rgba(255, 208, 110, 0.75)" : "none"};
  -webkit-box-shadow: ${(props) =>
    props.shadow ? "-5px 5px 0px 1px rgba(255, 208, 110, 0.75)" : "none"};
  -moz-box-shadow: ${(props) =>
    props.shadow ? "-5px 5px 0px 1px rgba(255, 208, 110, 0.75)" : "none"};
`;
