import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import BoxMedia from "../box/box-media";
import { ContainerProps } from "../../sections/partials/container";
import Circles from "../circles";

interface ISize {
  wide: string;
}

interface ICardProps extends ContainerProps {
  size?: string;
  shadow?: boolean;
  menu?: boolean;
}

const Card = ({
  title,
  created,
  circles,
  shadow = true,
  menu = true,
  size = "lg",
}: ICardProps) => {
  return (
    <CardStyled wide={size}>
      <CardMedia>
        <BoxMedia shadow={shadow} />
        <Circles items={circles!} />
      </CardMedia>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDate>Created: {created}</CardDate>
      </CardContent>
      {menu && (
        <IconOptionStyled>
          <FontAwesomeIcon icon={faEllipsisV} />
        </IconOptionStyled>
      )}
    </CardStyled>
  );
};

export default Card;

const CardStyled = styled.article<ISize>`
  position: relative;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 4px 16px rgba(58, 58, 58, 0.07);
  border-radius: 12px;
  padding: ${(props) => (props.wide === "lg" ? "25px 20px" : "9px 12px")};
  text-align: start;
`;

const CardMedia = styled.div`
  display: flex;
  align-items: center;
`;

const CardContent = styled.div``;

const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
  line-height: 35px;
`;

const CardDate = styled.p`
  font-size: 10px;
  color: #858a9d;
`;

const IconOptionStyled = styled.div`
  position: absolute;
  padding-right: 17px;
  padding-top: 20px;
  top: 0;
  right: 0;
  color: #858a9d;
`;
