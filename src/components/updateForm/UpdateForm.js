import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../redux/actions/users";
import { getUserInfo } from "../../redux/actions/userProfile";
import { Loader } from "../loader";

export const UpdateForm = () => {
  const { loading, error, username } = useSelector((state) => ({
    username: state.auth.username,
    loading: state.auth.loading,
    error: state.auth.error,
  }));

  const userInfo = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    password: "",
    displayName: "",
    about: "",
  });

  const handleUpdate = (event) => {
    event.preventDefault();
    if (state.password === "") {
      setState({ password: userInfo });
    }
    if (state.displayName === "") {
      setState({ displayName: userInfo.displayName });
    }
    if (state.about === "") {
      setState({ about: userInfo.about });
    }
    dispatch(updateUser({ username, ...state }));
    dispatch(getUserInfo(username));
    setState({
      password: "",
      displayName: "",
      about: "",
    });
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
