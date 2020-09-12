import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/auth";
import { Loader } from "../loader";
import "./LoginForm.css";
import { LoginError } from './Success_Error'
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

export const LoginForm = ({ login }) => {
  const { loading, error } = useSelector((state) => ({
    loading: state.auth.loading,
    error: state.auth.error,
  }));

  const dispatch = useDispatch();

  const [state, setState] = useState({
    username: "",
    password: "",
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
        <h2 id="login-header" className='form-item'>Login</h2>
        <label className="form-item" htmlFor="username">Username</label>
        <input
          id='username'
          className="form-item form-input"
          type="text"
          name="username"
          value={state.username}
          autoFocus
          required
          onChange={handleChange}
        />
        <label className="form-item" htmlFor="password">Password</label>
        <input
          id="password"
          className="form-item form-input"
          type="password"
          name="password"
          value={state.password}
          required
          onChange={handleChange}
        />
        <Button id="login-button" className="form-item" type="submit" disabled={loading}>
          Login
        </Button>
        <Link id="create-user-link" className="form-item link" to="/createNewUser">Create New User</Link>
      </form>
      {loading && <Loader />}
      {error && <LoginError />}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </React.Fragment>
  );
};
