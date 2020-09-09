import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getRecents, mergeQueue, clearQueue } from '../../redux/actions/messageActions';


function QueuedPosts({ lastId }) {
    const dispatch = useDispatch();
    const queue = useSelector(state => state.messageReducer.queue)
    const recentMessage = useSelector(state => state.messageReducer.messages[0])



    const updateQueue = () => {
        dispatch(getRecents(recentMessage.id))
        console.log(queue)
    }

    useEffect(() => {
        const polling = setInterval(updateQueue, 7500)
        dispatch(clearQueue())
    }, [mergeQueue, recentMessage])

    return (
        <div>
            <button onClick={() => dispatch(mergeQueue())}>{queue.length} unread posts</button>
        </div>
    )
}

export default QueuedPosts
