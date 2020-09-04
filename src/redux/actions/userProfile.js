import api from "../../utils/api";

export const GET_USER_INFO = "GET USER INFO";
export const PUT_PICTURE = "PUT PICTURE";

export const getUserInfo = (user) => async (dispatch) => {
  try {
    const payload = await api.getUser(user);
    dispatch({ type: GET_USER_INFO, payload });
  } catch (err) {
    console.log(err);
  }
};

export const putUserPicture = (user) => async (dispatch) => {
  try {
    const payload = await api.putPicture(user);
    dispatch({ type: PUT_PICTURE, payload });
  } catch (err) {
    console.log(err);
  }
};
