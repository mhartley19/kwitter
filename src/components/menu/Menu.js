import React from "react";
import { useSelector } from "react-redux";
import "./Menu.css";
import { NavBar } from "../NavBar/NavBar";

export const Menu = () => {
  const isAuthenticated = useSelector((state) => !!state.auth.isAuthenticated);
  return (
    <>
      {isAuthenticated ? (
        <>
          <NavBar />
        </>
      ) : null}
    </>
  );
};
