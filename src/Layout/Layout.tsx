import React, { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Header } from "../Header/Header";

export const Layout: FC = ({ children }) => (
  <Container>
    <Row>
      <Col>
        <Header />
      </Col>
    </Row>
    <Row>{children}</Row>
  </Container>
);
