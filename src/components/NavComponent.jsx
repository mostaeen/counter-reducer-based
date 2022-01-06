import React, { useContext } from "react";
import { Navbar, Container } from "react-bootstrap";
import CounterContext from "../context/CounterContext";

function NavComponent() {
  const { valued } = useContext(CounterContext);
  return (
    <div>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>{valued}</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavComponent;
