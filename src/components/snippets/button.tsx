import React from "react";
import styled from "styled-components";

const Button = () => {
  return (
    <ButtonStyled>
      <button>Create New</button>
    </ButtonStyled>
  );
};

export default Button;

const ButtonStyled = styled.div`
  background-color: #ff9f00;
  border-radius: 7px;
  button {
    padding: 12px 0;
    color: #fff;
    background: transparent;
    border: none;
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-weight: 200;
  }
`;
