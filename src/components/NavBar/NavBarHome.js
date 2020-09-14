import React from "react";
import { Nav, Navbar, Form } from "react-bootstrap";

export const NavBarHome = () => {
  return (
    <>
      <Navbar
        sticky="top"
        variant="dark"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          top: "0px",
          height: "50px",
          zIndex: "2",
          backgroundColor: "#343a40",
          paddingLeft: "5px",
          paddingRight: "5px",
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

        <Form inline></Form>
      </Navbar>
    </>
  );
};
