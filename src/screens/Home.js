import React from "react";
import { LoginFormContainer, MenuContainer } from "../components";
import { Link } from "react-router-dom";
import { NavBarHome } from "../components/NavBar/NavBarHome";

export const HomeScreen = () => (
  <>
    <NavBarHome />
    <MenuContainer />
    <h1 className="kwitter-header">Kwitter</h1>
    <h2 id="home-screen-header" className="header">
      Your favorite microblogging platform
    </h2>

    <LoginFormContainer />
  </>
);
