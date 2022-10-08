import React from "react";
import styled from "styled-components";
import Card from "../snippets/card/card";
import SearchBar from "../snippets/search-bar";
import SectionContent from "./section-content";
import Table from "./table";

const Container = () => {
  return (
    <Contenedor>
      <SearchBar />
      <SectionContent>
        <Card />
        <Card />
        <Card />
      </SectionContent>
      <SectionContent>
        <Table />
      </SectionContent>
      {/* <SectionContent>
        <Card />
        <Card />
        <Card />
      </SectionContent> */}
    </Contenedor>
  );
};

export default Container;

const Contenedor = styled.main`
  background-color: #f5f6fc;
  color: black;
  grid-area: main;
  padding: 25px 30px;
`;
