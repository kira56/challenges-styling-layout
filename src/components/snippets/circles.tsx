import React from "react";
import styled from "styled-components";
import { CircleProps } from "../sections/partials/container";

interface Props {
  items: CircleProps[];
  color?: string;
}

const Circles = ({ items }: Props) => {
  return (
    <CircleContent>
      {items?.length! > 3
        ? items
            ?.slice(0, 3)
            .map((item, index) => (
              <CircleItem key={index}>
                {index === 2 ? <p>+3</p> : null}
              </CircleItem>
            ))
        : items?.map((item, index) => (
            <CircleItem color={item.color} key={index} />
          ))}
    </CircleContent>
  );
};

export default Circles;

const CircleContent = styled.ul`
  display: flex;
  transform: translateX(-10px);
  padding-inline-start: 2em;

  & > * + * {
    background-color: white;
    position: absolute;
    transform: translateX(-8px);
  }

  & > * + * + * {
    background-color: white;
    position: absolute;
    transform: translateX(-16px);
  }
`;

const CircleItem = styled.li<Omit<Props, "items">>`
  position: relative;
  list-style: none;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  border: ${(props) =>
    props.color ? `1px solid ${props.color}` : "1px solid gray"};
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 10px;
  }
`;
