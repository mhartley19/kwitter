import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleLike } from "../../redux/actions/likeAction";

function MessageItem({ user, text, id, date, likes }) {
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

  return (
    <div
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
      </ul>
    </div>
  );
}
export default MessageItem;
