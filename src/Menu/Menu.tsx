import React, { FC } from "react";
import { useMediaQuery } from "beautiful-react-hooks";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MobileMenu } from "./Mobile/MobileMenu";
import { DesktopMenu } from "./Desktop/DesktopMenu";

const StyledMainNavDiv = styled.div`
  padding: 50px 0;
  display: flex;
  position: relative;

  @media screen and (max-width: 1199px) {
    padding: 30px 0;
  }
`;

const StyledLogoLink = styled(Link)`
  font-size: 30px;
  text-decoration: underline;
  font-family: "Abril Fatface";
  font-weight: bold;

  &:hover {
    color: rgb(255, 139, 93);
  }
`;

export const Menu: FC = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <StyledMainNavDiv className="navbar-expand-md">
      <StyledLogoLink to="/">Brands.</StyledLogoLink>
      {isMobile ? <MobileMenu /> : <DesktopMenu />}
    </StyledMainNavDiv>
  );
};
