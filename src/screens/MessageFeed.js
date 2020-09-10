import React, { useEffect, useState } from "react";
import MessageItem from "../components/messageItem/MessageItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages, newMessage, getRecents } from "../redux/actions/messageActions";
import { MenuContainer } from "../components";
import QueuedPosts from "../components/queued-posts/QueuedPosts";

export function MessageFeed() {
  const [newMessageInput, setNewMessageInput] = useState();

  const handleInput = (event) => {
    setNewMessageInput(event.target.value);
  };

  const messages = useSelector((state) => state.messageReducer.messages);
  const queue = useSelector((state) => state.messageReducer.queue)

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("rendering feed");
    dispatch(fetchMessages());
  }, []);

  return (
    <>
      <MenuContainer />
      <input
        id="newMessageInput"
        type="text"
        placeholder="Post New Message"
        onChange={handleInput}
      ></input>

      <button onClick={() => dispatch(newMessage(newMessageInput))}>
        Click Here to Post
      </button>

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
