import React from "react";
import { LoginFormContainer, MenuContainer, RegisterFormContainer } from "../components";

export const HomeScreen = () => (
  <>
    <MenuContainer />
    <h2>Your favorite microblogging platform</h2>
    <p>Hello World</p>
    <LoginFormContainer />
    <RegisterFormContainer />
  </>
);
