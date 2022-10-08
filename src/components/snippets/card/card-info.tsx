import React from "react";
import styled from "styled-components";
import Button from "../button";

const CardInfo = () => {
  return (
    <CardInfoStyled>
      <CardMedia>
        <BoxMedia />
      </CardMedia>
      <CardContent>
        <CardTitle>Buy More space now</CardTitle>
        <span style={{ fontSize: "12px", fontWeight: "200" }}>
          Upgrade to cloud premium
        </span>
      </CardContent>
      <CardFooter>
        <Button />
      </CardFooter>
    </CardInfoStyled>
  );
};

export default CardInfo;

const CardInfoStyled = styled.div`
  background-color: #fff;
  padding: 16px 40px;
  border-radius: 18px;
`;

const CardMedia = styled.div``;
const CardContent = styled.div`
  padding: 20px 0;
`;
const CardFooter = styled.div``;

const CardTitle = styled.h4`
  font-size: 18px;
  font-weight: 400;
  line-height: 2em;
  margin-block-start: 0;
  margin-block-end: 0;
`;

const BoxMedia = styled.div`
  width: 100%;
  height: 100px;
  left: 845px;
  top: 563px;

  background: linear-gradient(
    270.15deg,
    #689ff8 0.15%,
    #ff6860 54.7%,
    #ff9f00 99.9%
  );
  border-radius: 11px;
`;
