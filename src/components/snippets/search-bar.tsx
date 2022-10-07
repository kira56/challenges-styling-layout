import React from "react";
import styled from "styled-components";

const SearchBar = () => {
  return <InputFieldStyled>SearchBar</InputFieldStyled>;
};

export default SearchBar;

const InputFieldStyled = styled.div`
  width: 100%;
  border-radius: 7px;
  background-color: #fff;
  text-align: start;
  padding: 8px 10px;
`;
