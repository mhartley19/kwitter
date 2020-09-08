import React, { useEffect, useState } from "react";
import MessageItem from "../components/messageItem/MessageItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages, newMessage } from "../redux/actions/messageActions";
import { MenuContainer } from "../components";
import api from "../utils/api";

export function MessageFeed() {
  const [newMessageInput, setNewMessageInput] = useState();

  const handleInput = (event) => {
    setNewMessageInput(event.target.value);
  };

  const messages = useSelector((state) => state.messageReducer.messages);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('rendering feed')
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
