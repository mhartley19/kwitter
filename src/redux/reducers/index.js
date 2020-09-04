import { combineReducers } from "redux";
import { authReducer } from "./auth";
import getUserReducer from "./users";
import messageReducer from "./messages";

export default combineReducers({
  auth: authReducer,
  messageReducer: messageReducer,
  user: getUserReducer,
});
