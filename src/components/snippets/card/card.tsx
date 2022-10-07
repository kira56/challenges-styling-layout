import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import Circle from "../circle";

const Card = () => {
  return (
    <CardStyled>
      <CardMedia>
        <BoxCardMedia />
        <Circle />
      </CardMedia>
      <CardContent>
        <CardTitle>Add Project</CardTitle>
        <CardDate>Created: 20.02.2022</CardDate>
      </CardContent>
      <IconOptionStyled>
        <FontAwesomeIcon icon={faEllipsisV} />
      </IconOptionStyled>
    </CardStyled>
  );
};

export default Card;

const CardStyled = styled.article`
  position: relative;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 4px 16px rgba(58, 58, 58, 0.07);
  border-radius: 12px;
  padding: 20px 17px;
  text-align: start;
`;

const CardMedia = styled.div`
  display: flex;
  align-items: center;
`;

const CardContent = styled.div`
  /* padding-top: 20px; */
`;

const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
`;

const CardDate = styled.p`
  font-size: 10px;
  color: #858a9d;
`;

const BoxCardMedia = styled.div`
  width: 30px;
  height: 26px;
  margin-left: 5px;
  background-color: #ff9f00;
  box-shadow: -5px 5px 0px 1px rgba(255, 208, 110, 0.75);
  -webkit-box-shadow: -5px 5px 0px 1px rgba(255, 208, 110, 0.75);
  -moz-box-shadow: -5px 5px 0px 1px rgba(255, 208, 110, 0.75);
`;

const IconOptionStyled = styled.div`
  position: absolute;
  padding-right: 17px;
  padding-top: 20px;
  top: 0;
  right: 0;
  color: #858a9d;
`;
