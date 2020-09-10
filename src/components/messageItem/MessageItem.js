import React, { useState, useEffect } from "react";
import fetch from "node-fetch";
import { Card, ToggleButton, ButtonGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleLike } from "../../redux/actions/likeAction";
import { deleteMessage } from "../../redux/actions/messageActions";
import defaultPhoto from "../default_photo.jpg";

function MessageItem({ user, text, id, date, likes }) {
  const [currentPhoto, setPhoto] = useState(false);
  const dispatch = useDispatch();
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
      <Button
        variant="primary"
        id={id}
        className="deleteMessageButton"
        onClick={() => handleDelete()}
      >
        Delete
      </Button>
    );
  };

  useEffect(() => {
    fetchPhoto();
  }, []);

  const fetchPhoto = () => {
    fetch(`https://kwitter-api.herokuapp.com/users/${user}`)
      .then((response) => response.json())
      .then(function (data) {
        if (data.user.pictureLocation !== null) {
          setPhoto(`https://kwitter-api.herokuapp.com/users/${user}/picture`);
        } else {
          setPhoto(defaultPhoto);
        }
      });
  };

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
          width: "500px",
        }}
      >
        <Card.Header
          style={{
            backgroundColor: "rgb(0, 31, 126)",
            padding: "5px",
          }}
        >
          <Card.Title
            style={{
              margin: "1px",
            }}
          >
            {" "}
            {currentPhoto && (
              <Card.Img
                src={currentPhoto}
                style={{ width: "50px", borderRadius: "50%" }}
              />
            )}
            {"    "}
            {user}
          </Card.Title>
        </Card.Header>
        <Card.Body
          style={{
            backgroundColor: "rgb(70, 87, 135 )",
            paddingTop: "2px",
            paddingLeft: "3px",
          }}
        >
          <Card.Text>Message:</Card.Text>
          <blockquote
            className="blockquote mb-0"
            style={{ paddingLeft: "8px" }}
          >
            <p>{text}</p>
          </blockquote>
        </Card.Body>
        <Card.Footer
          style={{
            backgroundColor: "rgb(0, 31, 126)",
            padding: "5px",
          }}
        >
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
          Date Created {date} {username === user ? <DeleteButton /> : null}
        </Card.Footer>
      </Card>
    </>
  );
}
export default MessageItem;
