import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { newMessage } from "../../redux/actions/messageActions";
import "./InputMessage.css";

function InputMessage() {
  const [newMessageInput, setNewMessageInput] = useState("");

  const handleNewMessage = () => {
    dispatch(newMessage(newMessageInput));
    setNewMessageInput("");
  };
  const dispatch = useDispatch();

  return (
    <>
      <div className="InputMessage">
        <textarea
          cols="60"
          rows="3"
          minLength="2"
          maxLength="255"
          name="Message"
          id="newMessageInput"
          onChange={(e) => setNewMessageInput(e.target.value)}
          value={newMessageInput}
          placeholder="Post a new message"
        ></textarea>
        <button onClick={handleNewMessage}>Post Message!</button>
      </div>
    </>
  );
}

export default InputMessage;
