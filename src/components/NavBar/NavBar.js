import React from 'react'
import './NavBar.css'
import { useDispatch } from "react-redux"
import { actions } from "../../redux/actions/auth";
import { Nav, Navbar, Form } from "react-bootstrap";

export const NavBar = () => {
  const dispatch = useDispatch();
  const logout = () => dispatch(actions.logout());
  return (
    <Navbar
      bg="primary"
      variant="dark"
      style={{
        position: "sticky",
        top: "0px",
        zIndex: "1",
      }}
    >
      <Nav className="mr-auto">
        <Nav.Link href="/profiles/:username">Profile</Nav.Link>
        <Nav.Link href="/messagefeed">Message Feed</Nav.Link>
        <Nav.Link onClick={logout}>Logout</Nav.Link>
        <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
      </Nav>

      <Form inline></Form>
    </Navbar>
  );
};
