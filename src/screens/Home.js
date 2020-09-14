import React from "react";
import { LoginFormContainer, MenuContainer } from "../components";
import { NavBarHome } from "../components/NavBar/NavBarHome";

export const HomeScreen = () => (
  <>
    <div>
      <NavBarHome />
      <MenuContainer />
      <h2 id="home-screen-header" className="header">
        Your favorite microblogging platform
      </h2>

      <LoginFormContainer />
    </div>
  </>
);
