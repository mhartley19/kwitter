import {
  LOADING_MESSAGES,
  INITIATE_SUCCESS,
  INITIATE_FAILURE,
  POST_NEW_MESSAGE,
  DELETE_OLD_MESSAGE,
  GOT_USER_MESSAGES,
} from "../actions/messageActions";

import { UPDATE_MESSAGE } from "../actions/likeAction";

const initialState = {
  messages: [],
  userMessages: [],
  loading: false,
  error: "",

};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_MESSAGES:
      return {
        ...state,
        loading: true,
      };
    case INITIATE_SUCCESS:
      return {
        ...state,
        loading: false,
        messages: [...action.payload.messages],
      };
    case INITIATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: "Something went wrong. WTF!",
      };

    case POST_NEW_MESSAGE:
      return {
        ...state,
       
      };

    case UPDATE_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages.map((message) =>
            message.id === action.payload.id ? action.payload : message
          ),
        ],
      };
      case DELETE_OLD_MESSAGE:
        return {
          ...state,
        }
    case GOT_USER_MESSAGES:
      return {
        ...state,
        userMessages: [...action.payload.messages],
      };

    default:
      return state;
  }
};

export default messageReducer;
