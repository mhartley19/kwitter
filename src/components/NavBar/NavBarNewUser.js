import React from "react";
import { Nav, Navbar, Form } from "react-bootstrap";

export const NavBarNewUser = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>

        <Form inline></Form>
      </Navbar>
    </>
  );
};
