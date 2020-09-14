import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
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
    <div
      style={{ margin: "auto", display: queue.length > 0 ? "block" : "none" }}
    >
      <a
        className="queuedPost"
        style={{
          color: "white",
          // backgroundColor: "#7d97f5",
          fontSize: "20px",
          fontWeight: "400",
          padding: "5px 10px 9px 10px",
          borderRadius: "4px",
          border: "1px solid black",
          boxShadow: "1px 4px 11px 1px black",
        }}
        href="#top"
        onClick={() => dispatch(mergeQueue())}
      >
        {queue.length} unread posts
      </a>
    </div>
  );
}

export default QueuedPosts;
