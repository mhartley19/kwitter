import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { newMessage } from "../../redux/actions/messageActions";

function InputMessage() {
  const [newMessageInput, setNewMessageInput] = useState("");

  const handleNewMessage = () => {
    dispatch(newMessage(newMessageInput));
    setNewMessageInput("");
  };
  const dispatch = useDispatch();

  return (
    <>
      <input
        id="newMessageInput"
        type="text"
        value={newMessageInput}
        placeholder="Post New Message"
        onChange={(e) => setNewMessageInput(e.target.value)}
      ></input>

      <button onClick={handleNewMessage}>Click Here to Post</button>
    </>
  );
}

export default InputMessage;
