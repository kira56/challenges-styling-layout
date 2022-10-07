import React from "react";
import styled from "styled-components";
import Title from "../snippets/title";

export interface SectionProps {
  children?: JSX.Element | JSX.Element[];
}

const SectionContent = ({ children }: SectionProps) => {
  return (
    <SectionContentStyled>
      <HeadingStyled>
        <Title title="Recently Used" />
        <span>View all</span>
      </HeadingStyled>
      <SectionListItems>{children}</SectionListItems>
    </SectionContentStyled>
  );
};

export default SectionContent;

const SectionContentStyled = styled.section`
  /* background-color: pink; */
  margin-top: 30px;
`;

const HeadingStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SectionListItems = styled.div`
  display: flex;
  gap: 20px;
  /* flex-wrap: wrap; */
  width: 100%;
`;
