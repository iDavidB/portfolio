import React, { FC, useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { MenuContext } from "../../Context/MenuContext";

const StyledNavLink = styled(NavLink)`
  color: #000;
  font-size: 34px;
  font-family: "Abril Fatface";
  font-weight: bold;

  &.active {
    color: rgb(255, 139, 93);
  }
`;

interface MobileNavLinkInterface {
  to: string;
  title: string;
}

export const MobileNavLink: FC<MobileNavLinkInterface> = ({ title, to }) => {
  const { setOpen } = useContext(MenuContext);

  return (
    <li className="nav-item" onClick={() => setOpen()}>
      <StyledNavLink
        exact
        activeClassName="active"
        className="nav-link"
        to={to}
      >
        {title}
      </StyledNavLink>
    </li>
  );
};
