import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Button, Form } from "react-bootstrap";
import { newMessage } from "../../redux/actions/messageActions";

export default function CreatePostModal(props) {
  const [newMessageInput, setNewMessageInput] = useState("");

  const handleNewMessage = () => {
    dispatch(newMessage(newMessageInput));
    setNewMessageInput("");
  };
  const dispatch = useDispatch();

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          as="textarea"
          rows="3"
          minLength="2"
          maxLength="255"
          onChange={(e) => setNewMessageInput(e.target.value)}
          value={newMessageInput}
          placeholder="Say something..."
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={props.onHide}>
          Close
        </Button>
        <Button variant="dark" onClick={handleNewMessage}>
          Post
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
