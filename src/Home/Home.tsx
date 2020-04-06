import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image } from "react-bootstrap";
import styled from "styled-components";

import meImg from "../Static/Img/berg.jpg";
import { AbsoluteWrapper } from "../Constants/AbsoluteWrapper";

const StyledImg = styled(Image)`
  width: 100%;
  max-width: 93%;

  @media screen and (max-width: 1199px) {
    max-width: 100%;
  }
`;

const StyledH1 = styled.h1`
  font-size: 80px;
  margin-top: 50px;
  margin-bottom: 30px;
  font-family: "Abril Fatface";
  font-weight: bold;

  @media (min-width: 1200px) and (max-width: 1599px) {
    font-size: 56px;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  @media (min-width: 1600px) and (max-width: 1799px) {
    font-size: 70px;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    font-size: 46px;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  @media screen and (max-width: 767px) {
    font-size: 34px;
    margin-bottom: 20px;
    margin-top: 30px;
  }
`;

const StyledCol = styled(Col)`
  display: flex;
  flex-flow: column;
`;

const StyledSpan = styled.span`
  color: rgb(255, 139, 93);
`;

const StyledP = styled.p`
  font-size: 18px;
  font-weight: normal;

  @media screen and (max-width: 1599px) {
    font-size: 16px;
  }
`;

const StyledButton = styled(Link)`
  display: inline-block;
  padding: 15px 30px;
  border: 1px solid #fff;
  line-height: 1;
  margin-top: auto;
  width: fit-content;

  &:hover {
    background-color: #fff;
    color: rgb(255, 139, 93);
    text-decoration: none;
  }

  @media screen and (max-width: 991px) {
    margin-top: 30px;
  }
`;

export const Home: FC = () => (
  <AbsoluteWrapper>
    <Row>
      <Col lg={6} className="img-col">
        <StyledImg src={meImg} fluid />
      </Col>
      <StyledCol lg={6}>
        <StyledH1>
          David
          <StyledSpan> Brands</StyledSpan>
        </StyledH1>
        <StyledP>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
        </StyledP>
        <StyledButton to="/" className="def-btn">
          Explore
        </StyledButton>
      </StyledCol>
    </Row>
  </AbsoluteWrapper>
);
