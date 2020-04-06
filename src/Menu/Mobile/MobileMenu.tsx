import React, { FC } from "react";
import styled from "styled-components";

const StyledHamburgerMenu = styled.div`
  @media screen and (max-width: 767px) {
    padding: 10px;
    cursor: pointer;
    margin-left: auto;
  }
`;

const StyledLineDiv = styled.span`
  @media screen and (max-width: 767px) {
    width: 26px;
    height: 4px;
    background-color: #fff;
    display: block;
    margin: 4px auto;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    border-radius: 15px;
    -webkit-border-radius: 15px;
    -o-border-radius: 15px;
    -moz-border-radius: 15px;
  }
`;

export const MobileMenu: FC = () => (
  <StyledHamburgerMenu>
    <StyledLineDiv></StyledLineDiv>
    <StyledLineDiv></StyledLineDiv>
    <StyledLineDiv></StyledLineDiv>
  </StyledHamburgerMenu>
);
