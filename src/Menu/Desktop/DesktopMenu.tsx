import React, { FC } from "react";
import { MenuItems } from "../MenuItems/MenuItems";
import styled from "styled-components";

const StyledMainMenuDiv = styled.div`
  @media screen and (min-width: 768px) {
    display: block;
    flex-grow: inherit;
    margin-left: auto;
    margin-top: auto;
    margin-bottom: auto;
  }

  @media screen and (max-width: 767px) {
    position: absolute;
    top: 90%;
    left: 0;
    width: 100%;
    height: auto;
    background-color: #ff8b5d;
    transform: translateX(-200%);
    -webkit-transform: translateX(-200%);
    -moz-transform: translateX(-200%);
    -ms-transform: translateX(-200%);
    -o-transform: translateX(-200%);
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    display: block;
    z-index: 55;
    text-align: center;
  }
`;

export const DesktopMenu: FC = () => (
  <StyledMainMenuDiv>
    <MenuItems />
  </StyledMainMenuDiv>
);
