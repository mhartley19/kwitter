import React from "react";
import { MenuContainer } from "../components";
import UserProfile from "../components/userProfile/UserProfile";
import InputMessage from "../components/inputMessage/InputMessage";

export function ProfileScreen() {
  return (
    <>
      <MenuContainer />
      <InputMessage />
      <UserProfile />
    </>
  );
}
