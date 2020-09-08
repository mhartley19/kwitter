import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/users";
import { Loader } from "../loader";
import "./UdateForm.css";

export const UdateForm = ({ login }) => {
  const { loading, error } = useSelector((state) => ({
    loading: state.auth.loading,
    error: state.auth.error,
  }));

  const dispatch = useDispatch();

  const [state, setState] = useState({
    username: "",
    displayName: "",
    about: "",
  });

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(actions.login(state));
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  return (
    <React.Fragment>
      <form id="login-form" onSubmit={handleLogin}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={state.username}
          autoFocus
          required
          onChange={handleChange}
        />
        <label htmlFor="displayName">Display name</label>
        <input
          type="displayName"
          name="displayName"
          value={state.displayName}
          required
          onChange={handleChange}
        />
        <button type="submit" disabled={loading}>
          Login
        </button>
      </form>
      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </React.Fragment>
  );
};
