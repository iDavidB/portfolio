import React, { FC, Fragment } from "react";
import styled from "styled-components";

import { Container } from "react-bootstrap";
import { Menu } from "../Menu/Menu";

const StyledContainer = styled(Container)`
  @media screen and (min-width: 1550px) {
    max-width: 1520px;
  }
`;

const StyledContentContainer = styled(StyledContainer)`
  padding-top: 60px;
  padding-bottom: 30px;
  min-height: 100vh;

  @media (min-width: 1200px) and (max-width: 1799px) {
    padding-top: 40px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    padding-top: 20px;
    padding-bottom: 30px;
  }

  @media screen and (max-width: 767px) {
    padding-top: 0px;
  }
`;

export const Layout: FC = ({ children }) => (
  <Fragment>
    <StyledContainer>
      <Menu />
    </StyledContainer>
    <StyledContentContainer>{children}</StyledContentContainer>
  </Fragment>
);
