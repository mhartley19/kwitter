import React, { useEffect } from "react";
import { MenuContainer } from "../components";
import MessageItem from "../components/messageItem/MessageItem";
import { useSelector, useDispatch } from "react-redux";
import { userMessages } from "../redux/actions/messageActions";
import { getUserInfo, putUserPicture } from "../redux/actions/userProfile";
import { UpdateForm } from "../components/updateForm/UpdateForm"

export function ProfileScreen() {
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
      <MenuContainer />
      <h2>{userInfo.username}'s Profile Page</h2>
      <div
        className="profilePage"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "left",
        }}
      >
        <div
          className="profileInfo"
          style={{
            border: "1px solid black",
            margin: "15px",
            padding: "15px",
            background: "rgb(181, 195, 235)",
            width: "300px",
            height: "500px",
          }}
        >
          <img
            alt={userInfo.username}
            key={userInfo.username}
            src={`https://kwitter-api.herokuapp.com${userInfo.pictureLocation}`}
            style={{ width: "200px" }}
          />
          <br />
          <label>Upload a Picture</label>
          <br />
          <input
            type="file"
            id="ProfilePicture"
            name="Add Picture"
            accept=".gif, .jpeg, .png, .jpg"
            onChange={onFileChange}
          />
          <button onClick={onFileUpload}>Upload!</button>
          <h4>Username: {userInfo.username}</h4>
          <p>bio: { userInfo.about } </p>
          <p>displayName: { userInfo.displayName } </p>
          <p>date joined Kwitter</p>
          {user.username === userInfo.username && <UpdateForm></UpdateForm>}
          {/* <a href=`/editprofile/${userInfo.username}` >edit profile</a> */}
        </div>
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
