import api from "../../utils/api";

export const UPDATE_MESSAGE = "UPDATED MESSAGE";

export const toggleLike = (isLiked, id, likeId) => async (dispatch) => {
  try {
    let payload;
    if (isLiked) {
      payload = await api.deleteLike(likeId, id);
    } else {
      payload = await api.postLike(id);
    }
    dispatch({ type: UPDATE_MESSAGE, payload: payload.message });
  } catch (err) {
    console.log(err);
  }
};
