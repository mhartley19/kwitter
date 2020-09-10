import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../redux/actions/users";
import { Loader } from "../loader";
// import "./UdateForm.css";

export const UpdateForm = ({ login }) => {
  const { loading, error, username } = useSelector((state) => ({
      username: state.auth.username,
    loading: state.auth.loading,
    error: state.auth.error,
  }));
  
  const dispatch = useDispatch();

  const [state, setState] = useState({
    // password: "",
    displayName: "",
    about: "",
  });

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(updateUser({...state, username}));
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };
  return ( 
    <React.Fragment>
      <form id="login-form" onSubmit={handleLogin}>
      {/* <label htmlFor="password">Change Password</label>
        <input
          type="text"
          name="password"
          value={state.password}
          autoFocus
          onChange={handleChange}
        />  */}
        <label htmlFor="about">Change About</label>
        <input
          type="text"
          name="about"
          value={state.about}
          onChange={handleChange}
        />
        <label htmlFor="displayName">Change Display name</label>
        <input
          type="text"
          name="displayName"
          value={state.displayName}
          onChange={handleChange}
        />
        <button type="submit" disabled={loading}>
          updateUser
        </button>
      </form>
      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </React.Fragment>
  );
};
