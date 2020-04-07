import React, { FC, useContext } from "react";
import { useMediaQuery } from "beautiful-react-hooks";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSpring, animated as a, config } from "react-spring";

import { MobileMenu } from "./Mobile/MobileMenu";
import { DesktopMenu } from "./Desktop/DesktopMenu";
import { MenuContext } from "../Context/MenuContext";

const StyledMainNavDiv = styled.div`
  padding: 50px 0;
  display: flex;
  position: relative;

  @media screen and (max-width: 1199px) {
    padding: 30px 0;
  }
`;

const StyledLogoLink = styled(a(Link))`
  font-size: 30px;
  text-decoration: underline;
  font-family: "Abril Fatface";
  font-weight: bold;
  z-index: 10;

  &:hover {
    color: rgb(255, 139, 93);
  }
`;

export const Menu: FC = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const { open } = useContext(MenuContext);

  const LogoStyling = useSpring({
    color: open ? "#000" : "#FFF",
    config: config.stiff,
  });

  return (
    <StyledMainNavDiv className="navbar-expand-md">
      <StyledLogoLink style={LogoStyling} to="/">
        Brands.
      </StyledLogoLink>
      {isMobile ? <MobileMenu /> : <DesktopMenu />}
    </StyledMainNavDiv>
  );
};
