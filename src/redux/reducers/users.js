
// TODO: implement
import { GET_USER_INFO, PUT_PICTURE } from "../actions/userProfile";

const initialState = {
  pictureLocation: "",
  username: "",
  displayName: "",
  about: "",
  googleId: "",
  createdAt: "",
  updatedAt: "",
  profilePicture: {},
};

const getUserReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      const {
        pictureLocation,
        username,
        displayName,
        about,
        googleId,
        createdAt,
        updatedAt,
      } = action.payload.user;
      return {
        ...state,
        pictureLocation,
        username,
        displayName,
        about,
        googleId,
        createdAt,
        updatedAt,
      };
    case PUT_PICTURE:
      return {
        ...state,
        profilePicture: action.payload,
      };
    default:
      return state;
  }
};

export default getUserReducer;
