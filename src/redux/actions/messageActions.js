import api from "../../utils/api";
import { hideModal } from "./postMessage";

export const FETCH_MESSAGES = "FETCH MESSAGES";
export const LOADING_MESSAGES = "LOADING MESSAGES";
export const INITIATE_SUCCESS = "INITIATE SUCCESS";
export const INITIATE_FAILURE = "INITIATE FAILURE";
export const NEW_MESSAGE = "NEW MESSAGE";
export const POST_NEW_MESSAGE = "POST NEW MESSAGE";
export const DELETE_OLD_MESSAGE = "DELETE OLD MESSAGE";
export const GOT_USER_MESSAGES = "GOT USER MESSAGES";
export const GET_RECENTS = "GET_RECENTS";
export const MERGE_QUEUE = "MERGE_QUEUE";
export const CLEAR_QUEUE = "CLEAR_QUEUE";
export const APPEND_SUCCESS = "APPEND_SUCCESS";
export const APPEND_FAILURE = "APPEND_FAILURE";
export const LOADING_MORE = "LOADING_MORE"

export const mergeQueue = () => {
  return {
    type: MERGE_QUEUE,
  };
};

export const clearQueue = () => {
  return {
    type: CLEAR_QUEUE,
  };
};

export const addRecents = (payload) => {
  return {
    type: GET_RECENTS,
    payload: [...payload],
  };
};

export const getRecents = (newestLocalId) => async (dispatch) => {
  try {
    const newestOnServer = await api.newestPost();
    if (newestOnServer.id - newestLocalId <= 0) {
      return;
    }
    const recentPosts = await api.recentPosts(
      newestOnServer.id - newestLocalId,
      newestLocalId
    );
    const payload = recentPosts;
    dispatch(addRecents(payload));
  } catch (err) {
    console.log(err);
  }
};

export const appendMessages = (offset) => async (dispatch, getState) => {
  try {
    dispatch({
      type: LOADING_MORE,
    })
    const { messages } = getState().messageReducer
    const lastId = messages[messages.length - 1].id
    let payload = await api.initiateMessages(offset);
    payload = payload.messages.filter(message => message.id < lastId)
    dispatch({ type: APPEND_SUCCESS, payload });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: APPEND_FAILURE,
      payload: "Something went wrong! OH MY GOD!",
    });
  }
};

export const fetchMessages = () => async (dispatch, getState) => {
  try {
    dispatch({ type: LOADING_MESSAGES });
    const payload = await api.initiateMessages(0);
    dispatch({ type: INITIATE_SUCCESS, payload });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: INITIATE_FAILURE,
      payload: "Something went wrong! OH MY GOD!",
    });
  }
};

export const newMessage = (data) => async (dispatch) => {
  try {
    const payload = await api.createNewMessage(data);
    dispatch(hideModal())
  } catch (err) { }
};

export const deleteMessage = (id) => async (dispatch) => {
  try {
    const payload = await api.deleteOldMessage(id);
    dispatch({
      type: DELETE_OLD_MESSAGE,
      payload,
    });
  } catch (err) { }
};

export const userMessages = (user) => async (dispatch) => {
  try {
    const payload = await api.getUserMessages(user);
    dispatch({ type: GOT_USER_MESSAGES, payload });
  } catch (err) {
    dispatch({
      type: INITIATE_FAILURE,
      payload: "Something went wrong! OH MY GOD!",
    });
  }
};
