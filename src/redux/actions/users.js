import api from "../../utils/api"
export const UPDATE_USER = "UPDATE_USER"
export const UPDATE_SUCCESS = "UPDATE_SUCCESS"
export const UPDATE_FAILURE = "UPDATE_FAILURE"

export const updateUser = (changes) => async (dispatch, getState) => {
    try {
        dispatch({type: UPDATE_USER})
        const payload = await api.updateUser(changes)
    
        dispatch({type: UPDATE_SUCCESS, payload})
    }catch (err){
        dispatch({type: UPDATE_FAILURE, err})
    }
}