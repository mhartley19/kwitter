import {LOADING_MESSAGES, INITIATE_SUCCESS, INITIATE_FAILURE} from '../actions/messageActions'
import { UPDATE_MESSAGE } from '../actions/likeAction'

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
        case UPDATE_MESSAGE:
            return {...state, messages: [...state.messages.map((message) => message.id === action.payload.id ? action.payload : message )] }
        default: return state
    }
}

export default messageReducer