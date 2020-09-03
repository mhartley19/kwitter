import {LOADING_MESSAGES, INITIATE_SUCCESS, INITIATE_FAILURE} from '../actions/messageActions'

const initialState  = {
    messages: [],
    loading: false,
    error: ""
}

const messageReducer = (state = initialState, action) =>{
    switch(action.type){
        case LOADING_MESSAGES:                
            return {
                ...state, loading: true
            }
        case INITIATE_SUCCESS:
            return{
                ...state, loading: false, messages: [...action.payload.messages]
        }
        case INITIATE_FAILURE:
            return{
                ...state, loading: false, error: "Something went wrong. WTF!"
            }
        default: return state
    }
}

export default messageReducer