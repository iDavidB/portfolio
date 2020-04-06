import React, { FC, Fragment } from "react";
import styled from "styled-components";
import { AbsoluteWrapper } from "./Constants/AbsoluteWrapper";

const StyledImgDiv = styled.div`
  position: relative;
  flex: 1;
  flex-basis: 25rem;
  overflow: hidden;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledDescDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-basis: 25rem;
  padding-left: 5rem;
  position: relative;
`;

const StyledH2 = styled.h2`
  font-family: "Abril Fatface";
  font-size: 5rem;
`;

const StyledSpan = styled.span`
  color: rgb(255, 139, 93);
  font-family: "Abril Fatface";
`;

const StyledP = styled.p`
  padding: 3rem 0rem;
  font-size: 1.5rem;
  color: rgb(223, 223, 223);
`;

const StyledA = styled.a`
  padding: 1rem 2rem;
  background: none;
  color: white;
  border: 1px solid white;
  font-size: 1rem;
  text-decoration: none;
  align-self: flex-start;
  cursor: pointer;
  background-size: 200% 100%;
  background-position: right bottom;
`;

export const Test: FC = () => (
  <AbsoluteWrapper>
    <Fragment>
      <StyledImgDiv>
        <StyledImg src="" alt="Test" />
      </StyledImgDiv>
      <StyledDescDiv>
        <div className="title">
          <StyledH2>
            Freedom at your <StyledSpan>fingertips</StyledSpan>
          </StyledH2>
        </div>
        <StyledP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </StyledP>
        <StyledA>Explore</StyledA>
      </StyledDescDiv>
    </Fragment>
  </AbsoluteWrapper>
);
