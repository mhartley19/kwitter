import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../redux/actions/users";
import { Loader } from "../loader";

export const UpdateForm = () => {
  const { loading, error, username } = useSelector((state) => ({
    username: state.auth.username,
    loading: state.auth.loading,
    error: state.auth.error,
  }));

  const dispatch = useDispatch();

  const [state, setState] = useState({
    password: "",
    displayName: "",
    about: "",
  });

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(updateUser({ username, ...state }));
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };
  return (
    <>
      <form id="Update-form" onSubmit={handleUpdate}>
        <input
          type="text"
          name="password"
          className="updateInput"
          value={state.password}
          placeholder="Change Password"
          autoFocus
          onChange={handleChange}
        />
        <input
          type="text"
          name="about"
          className="updateInput"
          value={state.about}
          placeholder="Change About"
          onChange={handleChange}
        />
        <input
          type="text"
          name="displayName"
          className="updateInput"
          value={state.displayName}
          placeholder="Change Display Name"
          onChange={handleChange}
        />
        <button type="submit" className="updateInfoButton" disabled={loading}>
          Update User Info
        </button>
      </form>
      {loading && <Loader />}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </>
  );
};
