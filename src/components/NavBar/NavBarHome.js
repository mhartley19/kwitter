import React from "react";
import { Nav, Navbar, Form } from "react-bootstrap";
import "./NavBar.css";

export const NavBarHome = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Nav className="mr-auto">
          <h3 className="home-header">Team Query</h3>

          <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
        </Nav>

        <Form inline></Form>
      </Navbar>
    </>
  );
};
