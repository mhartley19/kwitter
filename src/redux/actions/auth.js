import api from "../../utils/api";

// AUTH CONSTANTS
export const LOGIN = "AUTH/LOGIN";
export const LOGIN_SUCCESS = "AUTH/LOGIN_SUCCESS";
export const LOGIN_FAILURE = "AUTH/LOGIN_FAILURE";
export const LOGOUT = "AUTH/LOGOUT";
export const REGISTER = "AUTH/REGISTER";
export const REGISTER_SUCCESS = "AUTH/REGISTER_SUCCESS";
export const REGISTER_FAILURE = "AUTH/REGISTER_FAILURE";

/*
 AUTH ACTIONS (this is a thunk....)
 THUNKS: --> https://github.com/reduxjs/redux-thunk#whats-a-thunk
 If you need access to your store you may call getState()
*/

// const handleRedirect = () => {
//  console.log('executed')
//   return (
//     <>
//     {console.log('returned')}
//     <BrowserRouter>
//     <ConnectedRoute
//         // exact
//         // isProtected
//         path="/testpage"
//         component={Testpage}
//       />
//     </BrowserRouter>
//     </>
//     )
//  }

const register = (credentials) => async (dispatch, getState) => {
  try {
    dispatch({ type: REGISTER });
    const payload = await api.register(credentials);
    dispatch({ type: REGISTER_SUCCESS, payload });
  } catch (err) {
    console.log(`Register error ${err}`);
    dispatch({
      type: REGISTER_FAILURE,
      payload: err.message,
    });
  }
};

const login = (credentials) => async (dispatch, getState) => {
  try {
    dispatch({ type: LOGIN });
    const payload = await api.login(credentials);
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    // console.log({ result })
    dispatch({ type: LOGIN_SUCCESS, payload });
  } catch (err) {
    console.log(`Login error ${err.message}`);
    dispatch({
      type: LOGIN_FAILURE,
      payload: err.message,
    });
  }
};

const logout = () => async (dispatch, getState) => {
  try {
    // We do not care about the result of logging out
    // as long as it succeeds
    await api.logout();
  } finally {
    /**
     * Let the reducer know that we are logged out
     */
    dispatch({ type: LOGOUT });
  }
};
// END AUTH ACTIONS

export const actions = {
  register,
  login,
  logout,
};
