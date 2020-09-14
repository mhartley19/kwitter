import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/auth";
import { Loader } from "../loader";
import "./RegisterForm.css";
import {
  CreateSuccessMessage,
  CreateUserError,
} from "../login-form/Success_Error";
import { Button } from "react-bootstrap";

export const RegisterForm = ({ register }) => {
  const { loading, error, auth } = useSelector((state) => ({
    loading: state.auth.loading,
    error: state.auth.error,
    auth: state.auth.newUserCreated,
  }));

  const dispatch = useDispatch();

  const [state, setState] = useState({
    username: "",
    displayName: "",
    password: "",
  });

  const handleRegister = (event) => {
    event.preventDefault();
    dispatch(actions.register(state));
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  return (
    <React.Fragment>
      <form id="register-form" onSubmit={handleRegister}>
        <label htmlFor="username">Username</label>
        <input
          class="form-item form-input"
          type="text"
          name="username"
          value={state.username}
          autoFocus
          required
          onChange={handleChange}
        />
        <label htmlFor="displayName">Display name</label>
        <input
          class="form-item form-input"
          type="displayName"
          name="displayName"
          value={state.displayName}
          required
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          class="form-item form-input"
          type="password"
          name="password"
          value={state.password}
          required
          onChange={handleChange}
        />
        <Button
          id="newUserButton"
          class="newUserButton"
          type="submit"
          disabled={loading}
          style={{ margin: "5px", backgroundColor: "#7289da", border: "none" }}
        >
          Create New User
        </Button>
      </form>
      {loading && <Loader />}
      {auth && <CreateSuccessMessage />}
      {error && <CreateUserError />}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </React.Fragment>
  );
};
