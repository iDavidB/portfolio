import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  padding: 0 30px !important;
  line-height: 1.2;
  font-family: "Abril Fatface";
  font-weight: bold;

  &:hover {
    color: rgb(255, 139, 93);
    text-decoration: none;
  }

  @media screen and (min-width: 768px) {
    border-right: 1px solid #fff;

    &:first-child {
      border-left: 1px solid #fff;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 5px 0 !important;

    &:hover {
      color: #fff;
      opacity: 0.8;
    }
  }
`;

export const MenuItems: FC = () => (
  <ul className="navbar-nav">
    <li className="nav-item">
      <StyledNavLink className="nav-link" to="/">
        Home
      </StyledNavLink>
    </li>
    <li className="nav-item">
      <StyledNavLink className="nav-link" to="/test">
        Skills
      </StyledNavLink>
    </li>
    <li className="nav-item">
      <StyledNavLink className="nav-link" to="/test">
        Experience
      </StyledNavLink>
    </li>
  </ul>
);
