import React, { useEffect } from "react";
import MessageItem from "../components/messageItem/MessageItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages } from "../redux/actions/messageActions";
import { MenuContainer } from "../components";
import QueuedPosts from "../components/queued-posts/QueuedPosts";
import InputMessage from "../components/inputMessage/InputMessage";

export function MessageFeed() {
  const messages = useSelector((state) => state.messageReducer.messages);
  const queue = useSelector((state) => state.messageReducer.queue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessages());
  }, []);

  return (
    <>
      <MenuContainer />
      <InputMessage />

      {messages.length > 0 && queue && <QueuedPosts lastId={messages[0].id} />}

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
    </>
  );
}
