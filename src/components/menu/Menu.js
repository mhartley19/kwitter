import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/auth";
import "./Menu.css";
import { NavBar } from '../NavBar/NavBar'

export const Menu = () => {
  const isAuthenticated = useSelector((state) => !!state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const logout = () => dispatch(actions.logout());
  return (
      <>
        {isAuthenticated ? (
          <>
          <NavBar/>
          </>
        ) : null}
    </>
  );
};


{/* <Link to="/profiles/:username">Profile Page</Link> */}
// <Link to="/messagefeed">Message Feed</Link>
// <Link to="/" onClick={logout}>
//   Logout
// </Link>