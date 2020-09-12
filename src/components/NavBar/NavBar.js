import React from "react";

import { useDispatch } from "react-redux";
import { actions } from "../../redux/actions/auth";
import { Nav, Navbar, Form, Button } from "react-bootstrap";
import { showModal } from "../../redux/actions";

export const NavBar = () => {
  const dispatch = useDispatch();
  const logout = () => dispatch(actions.logout());


  return (
    <Navbar

      variant="dark"
      style={{
        position: "sticky",
        top: "0px",
        height: "50px",
        zIndex: "2",
        backgroundColor: "#343a40"
      }}
    >
      <Nav className="mr-auto">
        <Button size="sm" variant="dark"><Nav.Link style={{ color: "white" }} href="/profiles/:username">Profile</Nav.Link></Button>
        <Button size="sm" variant="dark"><Nav.Link style={{ color: "white" }} href="/messagefeed">Message Feed</Nav.Link></Button>
        <Button size="sm" variant="dark"><Nav.Link style={{ color: "white" }} onClick={logout}>Logout</Nav.Link></Button>
        <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
      </Nav>

      <Button variant="dark" onClick={() => dispatch(showModal())}>
        +
      </Button>

      <Form inline></Form>
    </Navbar>
  );
};
