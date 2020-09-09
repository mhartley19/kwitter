import React, { useState } from "react";
import { Card, ToggleButton, ButtonGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleLike } from "../../redux/actions/likeAction";
import { deleteMessage } from "../../redux/actions/messageActions";
import defaultPhoto from "../default_photo.jpg";

function MessageItem({ user, text, id, date, likes }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  const username = useSelector((state) => state.auth.username);
  const isLiked = () => {
    return likes.some((like) => like.username === username);
  };

  const getLikeId = () => {
    if (isLiked()) {
      const user = likes.filter((like) => like.username === username);
      return user[0].id;
    }
  };
  const handleDelete = () => {
    dispatch(deleteMessage(id));
  };
  const DeleteButton = () => {
    return (
      <button
        id={id}
        className="deleteMessageButton"
        onClick={() => handleDelete()}
      >
        Delete
      </button>
    );
  };
  console.log();
  return (
    <>
      <Card
        text="white"
        border="success"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          alignItems: "left",
          border: "1px solid black",
          backgroundColor: "rgb(220, 223, 232 )",
          margin: "15px",
          width: "400px",
        }}
      >
        <Card.Header style={{ backgroundColor: "rgb(0, 31, 126)" }}>
          {" "}
          <Card.Img
            src={`https://kwitter-api.herokuapp.com/users/${user}/picture`}
            style={{ width: "50px", borderRadius: "50%" }}
          />
          {"    "}
          <Card.Title> {user}</Card.Title>
        </Card.Header>
        <Card.Body style={{ backgroundColor: "rgb(70, 87, 135 )" }}>
          <Card.Text>Message:</Card.Text>
          <blockquote className="blockquote mb-0">
            <p>{text}</p>
          </blockquote>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: "rgb(0, 31, 126)" }}>
          <ButtonGroup toggle className="mb-2">
            <ToggleButton
              type="checkbox"
              variant="primary"
              checked={isLiked()}
              value="1"
              onChange={() => dispatch(toggleLike(isLiked(), id, getLikeId()))}
            >
              {isLiked() ? "unlike" : "like"}
            </ToggleButton>
          </ButtonGroup>{" "}
          {likes.length} likes <br />
          Date Created {date}
        </Card.Footer>
      </Card>

      {/* <div
        className="MessageItem"
        style={{
          border: "1px solid black",
          backgroundColor: "rgb(220, 223, 232 )",
          padding: "10px",
          margin: "15px",
          width: "400px",
        }}
      >
        <h3>{user}</h3>
        <p>{text}</p>
        <ul>
          <li>Users ID: {id}</li>
          <li>Date Created: {date}</li>
          <li>Likes: {likes.length}</li>
          <input
            defaultChecked={isLiked()}
            type="checkbox"
            onChange={() => dispatch(toggleLike(isLiked(), id, getLikeId()))}
          />

          {username === user ? <DeleteButton /> : null}
        </ul>
      </div> */}
    </>
  );
}
export default MessageItem;
