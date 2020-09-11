import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap"
import {
  getRecents,
  mergeQueue,
  clearQueue,
} from "../../redux/actions/messageActions";

function QueuedPosts({ lastId }) {
  const dispatch = useDispatch();
  const queue = useSelector((state) => state.messageReducer.queue);
  const recentMessage = useSelector(
    (state) => state.messageReducer.messages[0]
  );

  const updateQueue = () => {
    dispatch(getRecents(recentMessage.id));
  };

  useEffect(() => {
    const polling = setInterval(updateQueue, 7500);
    dispatch(clearQueue());
  }, [mergeQueue, recentMessage]);

  return (
    <div style={{ margin: "auto", display: queue.length > 0 ? "block" : "none" }}>
      <a style={{ color: "white" }} href="#top" onClick={() => dispatch(mergeQueue())}>
        {queue.length} unread posts
      </a>
    </div>
  );
}

export default QueuedPosts;
