import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux/actions/auth";
import { Nav, Navbar, Form, Button, Col } from "react-bootstrap";
import { showModal, hideModal } from "../../redux/actions";
import CreatePostModal from "../createPostModal/createPostModal";

export const NavBar = () => {
  const dispatch = useDispatch();
  const logout = () => dispatch(actions.logout());
  const show = useSelector((state) => state.postMessage.show);

  return (
    <Navbar
      sticky="top"
      variant="dark"
      style={{
        display: "flex",
        flexDirection: "row",
        top: "0px",
        height: "50px",
        zIndex: "2",
        backgroundColor: "#343a40",
        paddingLeft: "5px",
        paddingRight: "5px",
      }}
    >
      <Col>
        <Nav className="mr-auto">
          <Button size="sm" variant="dark">
            <Nav.Link style={{ color: "white" }} href="/profiles/:username">
              Profile
            </Nav.Link>
          </Button>
          <Button size="sm" variant="dark">
            <Nav.Link style={{ color: "white" }} href="/messagefeed">
              Message Feed
            </Nav.Link>
          </Button>
          <Button size="sm" variant="dark">
            <Nav.Link style={{ color: "white" }} onClick={logout}>
              Logout
            </Nav.Link>
          </Button>
          <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
        </Nav>
      </Col>
      <Col
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Navbar.Brand
          href="/"
          style={{
            fontWeight: "bold",
            fontSize: "31px",
            fontFamily: "'Orbitron', sans-serif",
          }}
        >
          Kwitter Query
        </Navbar.Brand>
      </Col>
      <Col
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        post message
        <Button
          style={{ padding: "5px" }}
          variant="dark"
          onClick={() => dispatch(showModal())}
        >
          +
        </Button>
      </Col>
      <Form inline></Form>
      <CreatePostModal
        show={show}
        onHide={() => dispatch(hideModal())}
        maxlength="255"
      />{" "}
    </Navbar>
  );
};
