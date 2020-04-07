import React, { FC, Fragment, useContext } from "react";
import styled from "styled-components";
import { useSpring, animated as a, config } from "react-spring";

import { MobileNavLink } from "./MobileNavLink";
import { MenuContext } from "../../Context/MenuContext";

const StyledHamburgerMenu = styled.div`
  z-index: 10;
  padding: 10px;
  cursor: pointer;
  margin-left: auto;
`;

const StyledLineDiv = styled(a.span)`
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
`;

const StyledMenuItems = styled(a.div)`
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
  clip-path: circle(50px at 100% -10%);
  -webkit-clip-path: circle(50px at 100% -10%);
`;

export const MobileMenu: FC = () => {
  const { open, setOpen } = useContext(MenuContext);

  const clipPathStyle = useSpring({
    clipPath: open
      ? "circle(1250px at 100% -10%)"
      : "circle(50px at 100% -10%)",
    config: config.slow,
  });

  const colorStyle = useSpring({
    backgroundColor: open ? "#000" : "#FFF",
    config: config.stiff,
  });

  return (
    <Fragment>
      <StyledHamburgerMenu onClick={() => setOpen()}>
        <StyledLineDiv style={colorStyle} />
        <StyledLineDiv style={colorStyle} />
        <StyledLineDiv style={colorStyle} />
      </StyledHamburgerMenu>

      <StyledMenuItems style={clipPathStyle}>
        <ul>
          <MobileNavLink to="/" title="Home" />
          <MobileNavLink to="/test" title="Test" />
          <MobileNavLink to="/nowhere" title="Nowhere" />
        </ul>
      </StyledMenuItems>
    </Fragment>
  );
};
