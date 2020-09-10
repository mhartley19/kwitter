import{
    UPDATE_USER, UPDATE_SUCCESS, UPDATE_FAILURE
} from "../actions"

const INITIAL_STATE = {
    username: "",
    displayName: "",
    about: "",
    loading: false,
    error: "",
  };
  
  export const userReducer = (state = { ...INITIAL_STATE }, action) => {
    switch (action.type) {
      case UPDATE_USER:
        return {
          ...INITIAL_STATE,
          loading: true
        };
      case UPDATE_SUCCESS:
        return {
          ...state,
          loading: false
        };
      case UPDATE_FAILURE:
        return {
          ...INITIAL_STATE,
          loading: false,
          error: "bad"
        }
      default: return state
    };
    
  }