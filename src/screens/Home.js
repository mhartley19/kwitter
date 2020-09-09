import React from "react";
import { LoginFormContainer, MenuContainer, RegisterFormContainer } from "../components";
import { Link } from "react-router-dom";

export const HomeScreen = () => (
  <>
    <MenuContainer />
    <h1>Your favorite microblogging platform</h1>
    <h2>Login</h2>
    <LoginFormContainer />
    <Link to="/createNewUser">Create New User</Link>
  </>
);
