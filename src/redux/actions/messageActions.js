import api from "../../utils/api";

export const FETCH_MESSAGES = 'FETCH MESSAGES'
export const LOADING_MESSAGES = 'LOADING MESSAGES'
export const INITIATE_SUCCESS = 'INITIATE SUCCESS'
export const INITIATE_FAILURE = 'INITIATE FAILURE'


export const fetchMessages = () => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING_MESSAGES });
        const payload = await api.initiateMessages();
        dispatch({type: INITIATE_SUCCESS, payload})
    }
    catch (err){
        console.log(err.message)
        dispatch({type: INITIATE_FAILURE, payload: "Something went wrong! OH MY GOD!"})
    }
    
}