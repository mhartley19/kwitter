import React, { useEffect } from "react";
import MessageItem from "../messageItem/MessageItem";
import { Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { userMessages } from "../../redux/actions/messageActions";
import { getUserInfo, putUserPicture } from "../../redux/actions/userProfile";

function UserProfile() {
  const picture = {
    selectedFile: null,
  };

  const user = useSelector((state) => state.auth);
  const userInfo = useSelector((state) => state.user);
  const messages = useSelector((state) => state.messageReducer.userMessages);
  const dispatch = useDispatch();

  const onFileChange = (event) => {
    picture.selectedFile = event.target.files[0];
  };

  const onFileUpload = () => {
    if (picture.selectedFile) {
      const pictureData = new FormData();
      pictureData.append("picture", picture.selectedFile);
      dispatch(putUserPicture(userInfo.username, pictureData));
    } else {
      alert("Please select a file.");
    }
  };

  useEffect(() => {
    dispatch(userMessages(user.username));
  }, [user]);

  useEffect(() => {
    dispatch(getUserInfo(user.username));
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        <Card
          text="white"
          style={{
            border: "1px solid black",
            margin: "15px",
            width: "300px",
            height: "600px",
          }}
        >
          <Card.Header
            style={{
              backgroundColor: "rgb(0, 31, 126)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Card.Img
              alt={userInfo.username}
              key={userInfo.username}
              src={`https://kwitter-api.herokuapp.com${userInfo.pictureLocation}`}
              style={{
                width: "200px",
                backgroundColor: "rgb(70, 87, 135 )",
              }}
            />
            <br />
            <Card.Title>{userInfo.displayName}</Card.Title>
            <Card.Text>(username: {userInfo.username})</Card.Text>
          </Card.Header>
          <Card.Body
            style={{
              backgroundColor: "rgb(70, 87, 135 )",
              paddingTop: "2px",
              paddingLeft: "3px",
            }}
          >
            <input
              type="file"
              id="ProfilePicture"
              name="Add Picture"
              accept=".gif, .jpeg, .png, .jpg"
              onChange={onFileChange}
            />
            <Button onClick={onFileUpload}>Upload!</Button>
            <Card.Text>bio: {userInfo.about} </Card.Text>
          </Card.Body>
          <Card.Footer
            style={{
              backgroundColor: "rgb(0, 31, 126)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Card.Text>Joined Kwitter: {userInfo.createdAt}</Card.Text>
          </Card.Footer>
        </Card>

        <div
          className="userMessages"
          style={{
            border: "1px solid black",
            margin: "15px",
            padding: "15px",
            background: "rgb(181, 195, 235)",
            width: "400px",
          }}
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
        </div>
      </div>
    </>
  );
}

export default UserProfile;
