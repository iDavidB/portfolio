import React, { FC, useState, Fragment } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface StyledInterface {
  open: boolean;
}

const StyledHamburgerMenu = styled.div`
  z-index: 10;

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
    background-color: ${(props: StyledInterface) =>
      props.open ? "#000" : "#fff"};
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

const StyledMenuItems = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
  opacity: 1;
  clip-path: ${(props: StyledInterface) =>
    props.open ? "circle(2500px at 100% -10%)" : "circle(50px at 100% -10%);"};
  -webkit-clip-path: ${(props: StyledInterface) =>
    props.open ? "circle(2500px at 100% -10%)" : "circle(50px at 100% -10%);"};
`;

export const MobileMenu: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <StyledHamburgerMenu onClick={() => setOpen(!open)}>
        <StyledLineDiv open={open} />
        <StyledLineDiv open={open} />
        <StyledLineDiv open={open} />
      </StyledHamburgerMenu>

      <StyledMenuItems open={open}>
        <ul>
          <li>
            <NavLink exact activeClassName="active" className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to="/test">
              Skills
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to="/poo">
              Experience
            </NavLink>
          </li>
        </ul>
      </StyledMenuItems>
    </Fragment>
  );
};
