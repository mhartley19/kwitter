import api from "../../utils/api";

export const FETCH_MESSAGES = "FETCH MESSAGES";
export const LOADING_MESSAGES = "LOADING MESSAGES";
export const INITIATE_SUCCESS = "INITIATE SUCCESS";
export const INITIATE_FAILURE = "INITIATE FAILURE";
export const NEW_MESSAGE = "NEW MESSAGE";
export const POST_NEW_MESSAGE = "POST NEW MESSAGE";
export const GOT_USER_MESSAGES = "GOT USER MESSAGES";

export const fetchMessages = () => async (dispatch, getState) => {
  try {
    dispatch({ type: LOADING_MESSAGES });
    const payload = await api.initiateMessages();
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
    dispatch({ type: POST_NEW_MESSAGE, payload }).then(
      dispatch({ type: INITIATE_SUCCESS, payload })
    );
  } catch (err) {}
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
