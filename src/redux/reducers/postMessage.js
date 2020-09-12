import { HIDE_MODAL, SHOW_MODAL } from "../actions";
import {

} from "../actions/postMessage";

const initialState = {
    show: false
}

export const postMessage = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                ...state,
                show: true
            }
        case HIDE_MODAL:
            return {
                ...state,
                show: false
            }
        default: return state
    }
}