import React from "react";
import styled from "styled-components";
import Title from "../../snippets/title";

export interface SectionProps {
  title: string;
  children?: JSX.Element | JSX.Element[];
  bottom?: boolean;
  settings?: JSX.Element | string;
}

const SectionContent = ({
  children,
  title,
  settings,
  bottom = true,
}: SectionProps) => {
  return (
    <SectionContentStyled>
      <HeadingStyled bottom={bottom}>
        <Title title={title} />
        <span>{settings}</span>
      </HeadingStyled>
      <SectionListItems>{children}</SectionListItems>
    </SectionContentStyled>
  );
};

export default SectionContent;

const SectionContentStyled = styled.section``;

const HeadingStyled = styled.div<Omit<SectionProps, "children" | "title">>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${(props) => (props.bottom ? "20px" : "0px")};
`;

const SectionListItems = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`;
