import React from "react";
import styled from "styled-components";
import Icon from "../../snippets/icons/icon";

const SearchBar = () => {
  return (
    <InputFieldStyled>
      <InputFielIcon>
        <Icon border={true} borderColor="#C4C4C4" />
      </InputFielIcon>
      <input type="text" placeholder="Search" />
    </InputFieldStyled>
  );
};

export default SearchBar;

const InputFieldStyled = styled.div`
  position: relative;
  width: 100%;
  border-radius: 7px;
  background-color: #fff;
  text-align: start;
  padding: 8px 10px;
  display: flex;
  align-items: center;

  input {
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    padding-left: 25px;
    &::placeholder {
      color: #c4c4c4;
    }
  }
`;

const InputFielIcon = styled.div`
  position: absolute;
`;
