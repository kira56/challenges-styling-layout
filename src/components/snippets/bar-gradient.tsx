import React from "react";
import styled from "styled-components";

const BarGradient = () => {
  return <BarGradientStyled />;
};

export default BarGradient;

const BarGradientStyled = styled.div`
  width: 74px;
  height: 21px;
  border-radius: 5px;
  background: linear-gradient(270deg, #689ef8 0%, #ff6860 56.25%, #ff9f00 100%);
`;
