import React, { FC } from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  /* min-height: 80vh; */
  position: absolute;
  margin: 0 auto 0 auto;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Section: FC = ({ children }) => (
  <StyledSection>{children}</StyledSection>
);
