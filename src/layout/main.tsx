import React from "react";
import styled from "styled-components";
import Container from "../components/sections/container";
import Menu from "../components/sections/menu";
import Sidebar from "../components/sections/sidebar";

const Main = () => {
  return (
    <Layout>
      <Menu />
      <Container />
      <Sidebar />
    </Layout>
  );
};

export default Main;

const Layout = styled.main`
  display: grid;
  min-height: 100vh;
  grid-template-columns: 1fr 4fr 1.5fr;
  grid-template-areas: "menu main sidebar";
  text-align: center;
  grid-gap: 20px;
  transition: all 0.25s ease-in-out;
`;
