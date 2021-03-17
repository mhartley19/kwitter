import React, { useEffect, useState } from "react";
import MessageItem from "../messageItem/MessageItem";
import { Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { userMessages } from "../../redux/actions/messageActions";
import { getUserInfo, putUserPicture } from "../../redux/actions/userProfile";
import { UpdateForm } from "../updateForm/UpdateForm";
import defaultPhoto from "../default_photo.jpg";
import "./UserProfile.css";

function UserProfile() {
  const [picture, setPicture] = useState({
    selectedFile: null,
    value: undefined,
    profilePicture: defaultPhoto,
    isUploaded: false,
  });

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
      setPicture({
        isUploaded: true,
        profilePicture: `https://kwitter-api-b.herokuapp.com/users/${userInfo.username}/picture`,
      });
      dispatch(putUserPicture(userInfo.username, pictureData));
    } else {
      alert("Please select a file.");
    }
  };

  let newDate = new Date(userInfo.createdAt);
  let joinDate =
    newDate.getMonth() +
    1 +
    "-" +
    newDate.getDate() +
    "-" +
    newDate.getFullYear();

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
          className="profile"
          style={{
            border: "1px solid black",
            margin: "15px",
            width: "315px",
            height: "fit-content",
          }}
        >
          <Card.Header
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Card.Img
              className="profilePicture"
              alt={userInfo.username}
              key={userInfo.username}
              src={
                userInfo.pictureLocation === null
                  ? picture.profilePicture
                  : `https://kwitter-api-b.herokuapp.com/users/${userInfo.username}/picture`
              }
            />
            <br />
            <Card.Title className="profileHeader">
              {userInfo.displayName}
            </Card.Title>
            <Card.Text>(username: {userInfo.username})</Card.Text>
          </Card.Header>
          <Card.Body
            className="ProfileBody"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "rgb(70, 87, 135 )",
              paddingTop: "2px",
              paddingLeft: "3px",
              height: "fit-content",
            }}
          >
            <Card.Text
              style={{
                padding: "5px",
              }}
            >
              <strong>About me: </strong>
              {userInfo.about}{" "}
            </Card.Text>
            <details>
              <summary>Update User Info</summary>
              <input
                type="file"
                id="ProfilePicture"
                value={picture.value}
                className="customFileIinput"
                name="Add Picture"
                accept=".gif, .jpeg, .png, .jpg"
                onChange={onFileChange}
              />
              <Button className="uploadPhotoButton" onClick={onFileUpload}>
                Upload Photo
              </Button>
              {picture.isUploaded ? (
                <Card.Text>Uploaded Sucessfully</Card.Text>
              ) : null}
              {user.username === userInfo.username && <UpdateForm />}
            </details>
          </Card.Body>
          <Card.Footer
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "fit-content",
              fontSize: "small",
            }}
          >
            <Card.Text>Joined Kwitter: {joinDate}</Card.Text>
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
