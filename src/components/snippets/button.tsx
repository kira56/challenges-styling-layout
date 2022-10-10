import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface Props {
  text: string;
  plus?: boolean;
}

const Button = ({ text, plus = false }: Props) => {
  return (
    <ButtonStyled plus={plus}>
      <button>
        {text}
        {plus && (
          <BoxPlus>
            <FontAwesomeIcon icon={faPlus} />
          </BoxPlus>
        )}
      </button>
    </ButtonStyled>
  );
};

export default Button;

const ButtonStyled = styled.div<Omit<Props, "text">>`
  background-color: #ff9f00;
  height: 45px;
  border-radius: 7px;
  padding-left: ${(props) => (props.plus ? "15px" : 0)};
  cursor: pointer;

  button {
    color: #fff;
    background: transparent;
    border: none;
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    justify-content: ${(props) => (props.plus ? "space-between" : "center")};
    align-items: center;
    text-align: ${(props) => (props.plus ? "start" : "center")};
  }
`;

const BoxPlus = styled.div`
  background-color: #ffb233;
  width: 35px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
`;
