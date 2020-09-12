import React, { useEffect } from "react";
import MessageItem from "../components/messageItem/MessageItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages, appendMessages } from "../redux/actions/messageActions";
import { MenuContainer } from "../components";
import QueuedPosts from "../components/queued-posts/QueuedPosts";
import InfiniteScroll from "react-infinite-scroller";
import CreatePostModal from "../components/createPostModal/createPostModal";
import { hideModal } from "../redux/actions";
import { Spinner } from "react-bootstrap";

export function MessageFeed() {
  const messages = useSelector((state) => state.messageReducer.messages);
  const isInitialized = useSelector(
    (state) => state.messageReducer.isInitialized
  );
  const loadingMore = useSelector((state) => state.messageReducer.loadingMore);
  const offset = useSelector((state) => state.messageReducer.offset);
  const queue = useSelector((state) => state.messageReducer.queue);
  const show = useSelector((state) => state.postMessage.show);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  const handleLoadMore = () => {
    if (!isInitialized || loadingMore) {
      return;
    }
    dispatch(appendMessages(offset));
  };

  return (
    <>
      <a name="top"></a>
      <MenuContainer />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          margin: "auto",
          position: "fixed",
          zIndex: "2",
        }}
      >
        <QueuedPosts />
      </div>

      {isInitialized && (
        <InfiniteScroll
          pageStart={0}
          loadMore={handleLoadMore}
          hasMore={true || false}
          loader={
            <Spinner
              key={Math.random()}
              animation="border"
              role="status"
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <span className="sr-only">Loading...</span>
            </Spinner>
          }
        >
          {messages.map((message) => (
            <MessageItem
              user={message.username}
              text={message.text}
              id={message.id}
              date={message.createdAt}
              likes={message.likes}
              key={message.id}
            />
          ))}
        </InfiniteScroll>
      )}
    </>
  );
}
