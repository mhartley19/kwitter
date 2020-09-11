import React, { useEffect } from "react";
import MessageItem from "../components/messageItem/MessageItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages, appendMessages } from "../redux/actions/messageActions";
import { MenuContainer } from "../components";
import QueuedPosts from "../components/queued-posts/QueuedPosts";
import InputMessage from "../components/inputMessage/InputMessage";
import InfiniteScroll from "react-infinite-scroller";
// import "./Screens.css";

export function MessageFeed() {
  const messages = useSelector((state) => state.messageReducer.messages);
  const isInitialized = useSelector(
    (state) => state.messageReducer.isInitialized
  );
  const loadingMore = useSelector((state) => state.messageReducer.loadingMore);
  const offset = useSelector((state) => state.messageReducer.offset);
  const queue = useSelector((state) => state.messageReducer.queue);
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
      <MenuContainer />
      <InputMessage />

      {messages.length > 0 && queue && <QueuedPosts lastId={messages[0].id} />}

      {isInitialized && (
        <InfiniteScroll
          pageStart={0}
          loadMore={handleLoadMore}
          hasMore={true || false}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
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
