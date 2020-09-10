import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { newMessage } from "../../redux/actions/messageActions";

function InputMessage() {
  const [newMessageInput, setNewMessageInput] = useState();

  //button dispatch merge queue

  const handleInput = (event) => {
    setNewMessageInput(event.target.value);
  };

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
        onChange={handleInput}
      ></input>

      <button onClick={handleNewMessage}>Click Here to Post</button>
    </>
  );
}

export default InputMessage;
