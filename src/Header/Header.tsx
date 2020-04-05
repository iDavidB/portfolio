import React, { FC } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledHeader = styled.header`
  min-height: 5vh;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  width: 80%;
  margin: auto;
  padding: 2rem 0rem;
  right: 10%;
  left: 10%;
  z-index: 3;
`;

const StyledDiv = styled.div`
  cursor: pointer;
  width: 20%;
  justify-content: space-between;
`;

const StyledNavLink = styled(NavLink)`
  padding: 1rem 2rem;
  background: none;
  color: white;
  border: 1px solid white;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
`;

const StyledLogo = styled(NavLink)`
  color: white;
  font-family: "Abril Fatface";
`;

export const Header: FC = () => (
  <StyledHeader>
    <h1>
      <StyledLogo to="/">Brands.</StyledLogo>
    </h1>
    <StyledDiv>
      <StyledNavLink to="/test">Test</StyledNavLink>
    </StyledDiv>
  </StyledHeader>
);
