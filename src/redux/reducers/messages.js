
import {LOADING_MESSAGES, INITIATE_SUCCESS, INITIATE_FAILURE, NEW_MESSAGE, POST_NEW_MESSAGE} from '../actions/messageActions'

import { UPDATE_MESSAGE } from '../actions/likeAction'


const initialState  = {
    messages: [],
    loading: false,
    error: "",
    newMessageValue: []
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
        case POST_NEW_MESSAGE:
            return{
                ...state, newMessageValue: [action.payload.message]
            }
        case UPDATE_MESSAGE:
            return {...state, messages: [...state.messages.map((message) => message.id === action.payload.id ? action.payload : message )] }

        default: return state
    }
}

export default messageReducer