import { combineReducers } from "redux";
import { authReducer } from "./auth";
import getUserReducer from "./users";
import messageReducer from "./messages";
import { postMessage } from "./postMessage"

export default combineReducers({
  auth: authReducer,
  messageReducer: messageReducer,
  user: getUserReducer,
  postMessage
});
