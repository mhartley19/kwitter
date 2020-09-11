import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/auth";
import "./Menu.css";

export const NewUserMenu = () => {
  const isAuthenticated = useSelector((state) => !!state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const logout = () => dispatch(actions.logout());
  return (
    <div id="menu">
      
      <div id="menu-links">
        {isAuthenticated ? (
          <>
          
            <Link to="/profiles/:username">Profile Page</Link>
            <Link to="/messagefeed">Message Feed</Link>
            <Link to="/" onClick={logout}>
              Logout
            </Link>
          </>
          
        ) :
        <Link to="/" onClick={logout}>Login Home</Link>}
      </div>
    </div>
  );
};