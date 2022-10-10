import React from "react";
import styled from "styled-components";
import Card from "../../snippets/card/card";
import SearchBar from "../features/search-bar";
import SectionContent from "../features/section-content";
import Table from "../features/table";

export interface CircleProps {
  value: string | number;
  color?: string;
}

export interface ContainerProps {
  title: string;
  created: string;
  circles?: CircleProps[];
}

const settings: ContainerProps[] = [
  {
    title: "App Project",
    created: "20.02.2022",
    circles: [{ value: 1 }, { value: 2 }],
  },
  {
    title: "Project: fitbit",
    created: "28.02.2022",
    circles: [{ value: 1 }, { value: 2 }],
  },
  {
    title: "Client Documents",
    created: "4.03.2022",
    circles: [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }],
  },
];

const settings2: ContainerProps[] = [
  {
    title: "Landing Page",
    created: "20.02.2022",
    circles: [
      { value: 1, color: "#4AC29D" },
      { value: 2, color: "#FF6860" },
    ],
  },
  {
    title: "Illustration Pack",
    created: "20.02.2022",
    circles: [
      { value: 1, color: "#4AC29D" },
      { value: 2, color: "#FF6860" },
      { value: 3, color: "#FF9F00" },
    ],
  },
  {
    title: "CV Design",
    created: "20.02.2022",
    circles: [
      { value: 1, color: "#4AC29D" },
      { value: 2, color: "#FF9F00" },
    ],
  },
];
const Container = () => {
  return (
    <ContainerStyled>
      <ContainerSearch>
        <SearchBar />
      </ContainerSearch>
      <ContainerLayout>
        <SectionContent title="Recently Used" settings="View all">
          {settings.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </SectionContent>
        <SectionContent bottom={false} title="Recent Files" settings="View all">
          <Table />
        </SectionContent>
        <SectionContent title="Title" settings="View all">
          {settings2.map((item, index) => (
            <Card size="md" key={index} shadow={false} menu={false} {...item} />
          ))}
        </SectionContent>
      </ContainerLayout>
    </ContainerStyled>
  );
};

export default Container;

const ContainerStyled = styled.main`
  background-color: #f5f6fc;
  color: black;
  grid-area: main;
  padding: 25px 30px;
`;

const ContainerSearch = styled.div`
  height: 10%;
`;

const ContainerLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
`;
