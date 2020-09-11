import {
  LOADING_MESSAGES,
  INITIATE_SUCCESS,
  INITIATE_FAILURE,
  POST_NEW_MESSAGE,
  DELETE_OLD_MESSAGE,
  GOT_USER_MESSAGES,
  GET_RECENTS,
  MERGE_QUEUE,
  CLEAR_QUEUE, APPEND_SUCCESS, LOADING_MORE
} from "../actions/messageActions";

import { UPDATE_MESSAGE } from "../actions/likeAction";

const initialState = {
  messages: [],
  userMessages: [],
  loading: false,
  error: "",
  queue: [],
  offset: 25,
  isInitialized: false,
  loadingMore: false
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_QUEUE:
      return {
        ...state,
        queue: []
      };
    case MERGE_QUEUE:
      return {
        ...state,
        messages: [...state.queue, ...state.messages],
        queue: []
      };
    case GET_RECENTS:
      return {
        ...state,
        queue: [...action.payload.filter(post => post.id > state.messages[0].id)]
      };
    case LOADING_MESSAGES:
      return {
        ...state,
        loading: true,
        isInitialized: false,
        queue: []
      };
    case INITIATE_SUCCESS:
      return {
        ...initialState,
        messages: [...action.payload.messages],
        isInitialized: true
      };
    case INITIATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: "Something went wrong. WTF!",
        queue: []
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
        messages: [...state.messages.filter(post => post.id !== action.payload.id)]
      }
    case GOT_USER_MESSAGES:
      return {
        ...state,
        userMessages: [...action.payload.messages],
      };
    case LOADING_MORE:
      return {
        ...state,
        loadingMore: true
      }
    case APPEND_SUCCESS:
      return {
        ...state,
        offset: state.offset + 25,
        messages: [...state.messages, ...action.payload],
        loadingMore: false
      }

    default:
      return state;
  }
};

export default messageReducer;
