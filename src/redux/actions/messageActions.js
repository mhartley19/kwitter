import api from "../../utils/api";

export const FETCH_MESSAGES = 'FETCH MESSAGES'
export const LOADING_MESSAGES = 'LOADING MESSAGES'
export const INITIATE_SUCCESS = 'INITIATE SUCCESS'
export const INITIATE_FAILURE = 'INITIATE FAILURE'
export const NEW_MESSAGE = 'NEW MESSAGE'
export const POST_NEW_MESSAGE = 'POST NEW MESSAGE'
export const DELETE_OLD_MESSAGE = 'DELETE OLD MESSAGE'
export const GOT_USER_MESSAGES = "GOT USER MESSAGES"
export const GET_RECENTS = 'GET_RECENTS'
export const MERGE_QUEUE = 'MERGE_QUEUE'
export const CLEAR_QUEUE = 'CLEAR_QUEUE'

export const mergeQueue = () => {
    return {
        type: MERGE_QUEUE
    }
}

export const clearQueue = () => {
    return {
        type: CLEAR_QUEUE
    }
}

export const addRecents = (payload) => {
    return {
        type: GET_RECENTS,
        payload: [...payload]
    }
}

export const getRecents = (newestLocalId) => async (dispatch) => {
    try {
        const newestOnServer = await api.newestPost()
        if (newestOnServer.id - newestLocalId <= 0) {
            console.log('no posts')
            return
        }
        console.log('posts')
        const recentPosts = await api.recentPosts(newestOnServer.id - newestLocalId, newestLocalId)
        // if (!recentPosts.messages.messages) { }
        const payload = recentPosts
        console.log('hello')
        dispatch(addRecents(payload))
    } catch (err) {
        console.log(err)
    }
}


export const fetchMessages = () => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING_MESSAGES });
        const payload = await api.initiateMessages();
        console.log("fetched")
        dispatch({ type: INITIATE_SUCCESS, payload })
    }
    catch (err) {
        console.log(err.message)
        dispatch({ type: INITIATE_FAILURE, payload: "Something went wrong! OH MY GOD!" })
    }

}

export const _newMessage = (data) => async (dispatch) => {
    try {
        console.log('message')
        const payload = await api.createNewMessage(data)
        dispatch({ type: POST_NEW_MESSAGE, payload })
            .then(dispatch({ type: INITIATE_SUCCESS, payload }))

    }
    catch (err) {

    }
}

export const newMessage = (data) => async (dispatch) => {
    return dispatch(_newMessage(data))
        .then(() => {
            return dispatch(fetchMessages())
        })
}

export const _deleteMessage = (id) => async (dispatch) => {
    try {
        console.log('delete')
        const payload = await api.deleteOldMessage(id)
        dispatch({ type: DELETE_OLD_MESSAGE, payload })
            .then(dispatch({ type: INITIATE_SUCCESS, payload }))

    }
    catch (err) {

    }
}

export const deleteMessage = (data) => async (dispatch) => {
    return dispatch(_deleteMessage(data))
        .then(() => {
            return dispatch(fetchMessages())
        })
}



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

